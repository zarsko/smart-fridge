'use client';

import React, { useState } from 'react';
import { useZxing } from 'react-zxing';
import AppLayout from '../components/AppLayout';
import { inventoryService } from '../../services/inventory';
import type { InventoryItem } from '../../types/inventory';

export default function BarcodeScan() {
  const [result, setResult] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [productInfo, setProductInfo] = useState<any>(null);
  const [location, setLocation] = useState<InventoryItem['location']>('fridge');
  const [amount, setAmount] = useState(1);
  const [expirationDate, setExpirationDate] = useState('');
  const [addingToInventory, setAddingToInventory] = useState(false);

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      handleBarcodeScan(result.getText());
    },
    onError(error) {
      console.error("Scanner error:", error);
      setError("שגיאה בסריקה. אנא נסו שוב.");
    },
  });

  const handleBarcodeScan = async (barcode: string) => {
    setLoading(true);
    setError(null);
    try {
      // בדיקה אם המוצר כבר קיים במלאי
      const existingItem = await inventoryService.findByBarcode(barcode);
      if (existingItem) {
        setProductInfo({
          ...existingItem,
          product_name: existingItem.name,
          image_url: existingItem.imageUrl,
          brands: existingItem.brand,
        });
        return;
      }

      // אם לא קיים, מביא מידע מ-OpenFoodFacts
      const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}`);
      const data = await response.json();
      
      if (data.status === 1) {
        setProductInfo(data.product);
      } else {
        setError("מוצר לא נמצא במאגר");
      }
    } catch (err) {
      console.error("API error:", err);
      setError("שגיאה בטעינת פרטי המוצר");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToInventory = async () => {
    if (!productInfo) return;
    
    setAddingToInventory(true);
    try {
      const item: Omit<InventoryItem, 'id'> = {
        barcode: result,
        name: productInfo.product_name || 'מוצר לא ידוע',
        brand: productInfo.brands,
        quantity: productInfo.quantity,
        imageUrl: productInfo.image_url,
        location,
        amount,
        expirationDate,
        addedDate: new Date().toISOString(),
      };

      await inventoryService.addItem(item);
      setResult('');
      setProductInfo(null);
      setLocation('fridge');
      setAmount(1);
      setExpirationDate('');
      setError('המוצר נוסף בהצלחה למלאי!');
    } catch (err) {
      console.error("Error adding to inventory:", err);
      setError("שגיאה בהוספת המוצר למלאי");
    } finally {
      setAddingToInventory(false);
    }
  };

  return (
    <AppLayout title="סריקת ברקוד">
      <div className="space-y-6 p-4">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">סריקת ברקוד</h2>
          <p className="text-gray-600">סרקו את הברקוד של המוצר כדי להוסיף אותו למלאי</p>
        </div>

        <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-gray-100">
          <video
            ref={ref as React.RefObject<HTMLVideoElement>}
            className="w-full h-auto"
          />
        </div>

        {error && (
          <div className={`px-4 py-3 rounded ${error.includes('בהצלחה') ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'}`}>
            {error}
          </div>
        )}

        {loading && (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-2">טוען פרטי מוצר...</p>
          </div>
        )}

        {productInfo && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{productInfo.product_name}</h3>
            {productInfo.image_url && (
              <img 
                src={productInfo.image_url} 
                alt={productInfo.product_name}
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
            )}
            <div className="space-y-4">
              <div className="space-y-2">
                <p><strong>מותג:</strong> {productInfo.brands || 'לא ידוע'}</p>
                <p><strong>כמות:</strong> {productInfo.quantity || 'לא ידוע'}</p>
                <p><strong>ברקוד:</strong> {result}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">מיקום</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value as InventoryItem['location'])}
                    className="w-full p-2 border rounded"
                  >
                    <option value="fridge">מקרר</option>
                    <option value="freezer">מקפיא</option>
                    <option value="pantry">מזווה</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">כמות</label>
                  <input
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">תאריך תפוגה</label>
                  <input
                    type="date"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              <button 
                className={`mt-4 w-full py-2 px-4 rounded transition-colors ${
                  addingToInventory 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
                onClick={handleAddToInventory}
                disabled={addingToInventory}
              >
                {addingToInventory ? 'מוסיף למלאי...' : 'הוסף למלאי'}
              </button>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
} 
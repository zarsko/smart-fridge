'use client';

import React, { useState } from 'react';
import { useZxing } from 'react-zxing';
import AppLayout from '../components/AppLayout';

export default function BarcodeScan() {
  const [result, setResult] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [productInfo, setProductInfo] = useState<any>(null);

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
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
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
            <div className="space-y-2">
              <p><strong>מותג:</strong> {productInfo.brands || 'לא ידוע'}</p>
              <p><strong>כמות:</strong> {productInfo.quantity || 'לא ידוע'}</p>
              <p><strong>ברקוד:</strong> {result}</p>
            </div>
            <button 
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              onClick={() => {
                // כאן נוסיף את הלוגיקה להוספת המוצר למלאי
                console.log('Adding to inventory:', productInfo);
              }}
            >
              הוסף למלאי
            </button>
          </div>
        )}
      </div>
    </AppLayout>
  );
} 
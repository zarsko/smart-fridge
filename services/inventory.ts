import { InventoryItem } from '../types/inventory';

export const inventoryService = {
  // הוספת פריט למלאי
  async addItem(item: Omit<InventoryItem, 'id'>): Promise<string> {
    const response = await fetch('/api/inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    
    if (!response.ok) {
      throw new Error('Failed to add item');
    }
    
    const data = await response.json();
    return data.id;
  },

  // עדכון פריט במלאי
  async updateItem(id: string, updates: Partial<InventoryItem>): Promise<void> {
    const response = await fetch('/api/inventory', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, ...updates }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update item');
    }
  },

  // מחיקת פריט מהמלאי
  async deleteItem(id: string): Promise<void> {
    const response = await fetch('/api/inventory', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete item');
    }
  },

  // קבלת כל הפריטים במלאי
  async getAllItems(): Promise<InventoryItem[]> {
    const response = await fetch('/api/inventory');
    if (!response.ok) {
      throw new Error('Failed to fetch items');
    }
    return response.json();
  },

  // קבלת פריטים לפי מיקום
  async getItemsByLocation(location: InventoryItem['location']): Promise<InventoryItem[]> {
    const items = await this.getAllItems();
    return items.filter(item => item.location === location);
  },

  // חיפוש פריט לפי ברקוד
  async findByBarcode(barcode: string): Promise<InventoryItem | null> {
    const items = await this.getAllItems();
    return items.find(item => item.barcode === barcode) || null;
  }
}; 
export interface InventoryItem {
  id: string;
  barcode: string;
  name: string;
  brand?: string;
  quantity?: string;
  imageUrl?: string;
  expirationDate?: string;
  addedDate: string;
  category?: string;
  location: 'fridge' | 'freezer' | 'pantry';
  amount: number;
} 
'use client';

import React from 'react';
import AppLayout from '../components/AppLayout';

export default function ReceiptScan() {
  return (
    <AppLayout title="סריקת קבלה">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">סריקת קבלה</h2>
        <p className="text-gray-600">סרקו את הקבלה שלכם כדי להוסיף את המוצרים למלאי</p>
      </div>
    </AppLayout>
  );
} 
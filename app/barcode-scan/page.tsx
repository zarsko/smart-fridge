'use client';

import React from 'react';
import AppLayout from '../components/AppLayout';

export default function BarcodeScan() {
  return (
    <AppLayout title="סריקת ברקוד">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">סריקת ברקוד</h2>
        <p className="text-gray-600">סרקו את הברקוד של המוצר כדי להוסיף אותו למלאי</p>
      </div>
    </AppLayout>
  );
} 
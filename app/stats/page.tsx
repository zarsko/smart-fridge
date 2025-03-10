'use client';

import React from 'react';
import AppLayout from '../components/AppLayout';

export default function Stats() {
  return (
    <AppLayout title="סטטיסטיקות">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">סטטיסטיקות וניתוח נתונים</h2>
        <p className="text-gray-600">מעקב אחר דפוסי צריכת המזון והוצאות חודשיות</p>
      </div>
    </AppLayout>
  );
} 
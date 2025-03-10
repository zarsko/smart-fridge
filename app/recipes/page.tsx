'use client';

import React from 'react';
import AppLayout from '../components/AppLayout';

export default function Recipes() {
  return (
    <AppLayout title="מתכונים">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">מתכונים מומלצים</h2>
        <p className="text-gray-600">מתכונים המותאמים למוצרים שיש לכם במקרר</p>
      </div>
    </AppLayout>
  );
} 
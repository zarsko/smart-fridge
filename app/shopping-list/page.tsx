'use client';

import React from 'react';
import AppLayout from '../components/AppLayout';

export default function ShoppingList() {
  return (
    <AppLayout title="רשימת קניות">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">רשימת הקניות שלי</h2>
        <p className="text-gray-600">כאן תוכלו לנהל את רשימת הקניות שלכם</p>
      </div>
    </AppLayout>
  );
} 
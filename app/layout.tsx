import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smart Fridge - ניהול מקרר חכם',
  description: 'אפליקציה לניהול מלאי המקרר, רשימות קניות, וקבלת המלצות למתכונים',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
} 
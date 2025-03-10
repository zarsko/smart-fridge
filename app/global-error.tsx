'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">משהו השתבש</h2>
            <p className="text-gray-600 mb-4">{error.message}</p>
            <button
              onClick={() => reset()}
              className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all"
            >
              נסה שוב
            </button>
          </div>
        </div>
      </body>
    </html>
  );
} 
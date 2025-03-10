import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">הדף לא נמצא</h2>
        <p className="text-gray-600 mb-4">מצטערים, הדף שחיפשת לא קיים</p>
        <Link 
          href="/" 
          className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all"
        >
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
} 
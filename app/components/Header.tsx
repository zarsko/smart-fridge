import React from 'react';
import Link from 'next/link';
import { FaBarcode, FaReceipt, FaPlus } from 'react-icons/fa';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="flex space-s-3">
            <Link href="/barcode-scan" className="btn-primary flex items-center">
              <FaBarcode className="ms-1" />
              <span>סריקת ברקוד</span>
            </Link>
            <Link href="/receipt-scan" className="btn-secondary flex items-center">
              <FaReceipt className="ms-1" />
              <span>סריקת קבלה</span>
            </Link>
            <button className="bg-primary text-white p-2 rounded-full">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
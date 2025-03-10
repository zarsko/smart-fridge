import React from 'react';
import Link from 'next/link';
import { FaHome, FaShoppingCart, FaListAlt, FaUtensils, FaChartBar } from 'react-icons/fa';

interface NavigationItem {
  text: string;
  href: string;
  icon: React.ReactNode;
}

const Navigation: React.FC = () => {
  const navItems: NavigationItem[] = [
    { text: 'דף הבית', href: '/', icon: <FaHome className="text-xl" /> },
    { text: 'המקרר שלי', href: '/inventory', icon: <FaListAlt className="text-xl" /> },
    { text: 'רשימת קניות', href: '/shopping-list', icon: <FaShoppingCart className="text-xl" /> },
    { text: 'מתכונים', href: '/recipes', icon: <FaUtensils className="text-xl" /> },
    { text: 'סטטיסטיקות', href: '/stats', icon: <FaChartBar className="text-xl" /> },
  ];

  return (
    <nav className="bg-white shadow-md fixed bottom-0 w-full md:w-auto md:h-screen md:fixed md:top-0 md:end-0 z-10">
      <div className="flex md:flex-col justify-around items-center p-3 md:p-4 md:space-y-8">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-s-2 px-2 py-1 md:py-3 rounded-lg hover:bg-primary hover:bg-opacity-10 transition-all"
          >
            {item.icon}
            <span className="text-xs md:text-base">{item.text}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation; 
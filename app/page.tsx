'use client';

import React from 'react';
import AppLayout from './components/AppLayout';
import Link from 'next/link';
import { FaListAlt, FaShoppingCart, FaUtensils, FaChartBar, FaRegBell, FaRegClock, FaArrowLeft } from 'react-icons/fa';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

interface AlertCardProps {
  type: 'warning' | 'info';
  title: string;
  description: string;
  action?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, href, color }) => {
  return (
    <Link href={href} className="block group">
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center">
          <div className={`bg-${color}-50 p-3.5 rounded-xl group-hover:bg-${color}-100 transition-colors`}>
            {React.cloneElement(icon as React.ReactElement, {
              className: `text-${color}-600 text-xl`
            })}
          </div>
          <div className="me-4 flex-1">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 mt-1 text-sm leading-relaxed">{description}</p>
          </div>
          <FaArrowLeft className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
};

const AlertCard: React.FC<AlertCardProps> = ({ type, title, description, action }) => {
  return (
    <div className={`p-4 rounded-lg mb-4 ${
      type === 'warning' ? 'bg-warning bg-opacity-10' : 'bg-info bg-opacity-10'
    }`}>
      <div className="flex items-center mb-2">
        <FaRegBell className={type === 'warning' ? 'text-warning' : 'text-info'} />
        <span className="font-bold me-2">{title}</span>
      </div>
      <p className="text-gray-700 text-sm mb-2">{description}</p>
      {action && (
        <button className={`text-sm font-medium ${
          type === 'warning' ? 'text-warning' : 'text-info'
        }`}>
          {action}
        </button>
      )}
    </div>
  );
};

export default function Home() {
  const features = [
    {
      title: 'מעקב אחר מלאי המזון',
      description: 'צפייה וניהול המוצרים במקרר, במקפיא ובמזווה',
      icon: <FaListAlt />,
      href: '/inventory',
      color: 'blue',
    },
    {
      title: 'רשימת קניות חכמה',
      description: 'ניהול רשימת קניות והמלצות מבוססות על הרגלי צריכה',
      icon: <FaShoppingCart />,
      href: '/shopping-list',
      color: 'green',
    },
    {
      title: 'המלצות מתכונים',
      description: 'הצעות למתכונים המבוססים על המוצרים הקיימים במקרר',
      icon: <FaUtensils />,
      href: '/recipes',
      color: 'orange',
    },
    {
      title: 'סטטיסטיקות וניתוח נתונים',
      description: 'מעקב אחר דפוסי צריכת המזון והוצאות חודשיות',
      icon: <FaChartBar />,
      href: '/stats',
      color: 'purple',
    },
  ];

  return (
    <AppLayout title="דף הבית">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-primary/5 to-transparent p-8 -mx-6 -mt-6 mb-12 rounded-3xl overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">ברוכים הבאים למקרר החכם</h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              נהל את המקרר שלך בחכמה, חסוך כסף ומנע בזבוז מזון עם הכלים החכמים שלנו
            </p>
          </div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stats cards with consistent height */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-500">מוצרים במלאי</div>
              <div className="bg-green-50 p-2.5 rounded-xl group-hover:bg-green-100 transition-colors">
                <FaListAlt className="text-green-600 text-lg" />
              </div>
            </div>
            <div className="text-3xl font-semibold text-gray-900 mb-2">24</div>
            <div className="flex items-center text-xs text-green-600">
              <span className="flex items-center"><FaArrowLeft className="transform rotate-45 me-1" /> +3</span>
              <span className="ms-1 text-gray-500">מאתמול</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-500">פריטים ברשימת קניות</div>
              <div className="bg-orange-50 p-2.5 rounded-xl group-hover:bg-orange-100 transition-colors">
                <FaShoppingCart className="text-orange-600 text-lg" />
              </div>
            </div>
            <div className="text-3xl font-semibold text-gray-900 mb-2">8</div>
            <div className="text-xs text-orange-600">
              <span>2 דחופים</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-500">מתכונים אפשריים</div>
              <div className="bg-blue-50 p-2.5 rounded-xl group-hover:bg-blue-100 transition-colors">
                <FaUtensils className="text-blue-600 text-lg" />
              </div>
            </div>
            <div className="text-3xl font-semibold text-gray-900 mb-2">15</div>
            <div className="text-xs text-blue-600">
              <span>3 חדשים</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-gray-500">חיסכון החודש</div>
              <div className="bg-purple-50 p-2.5 rounded-xl group-hover:bg-purple-100 transition-colors">
                <FaChartBar className="text-purple-600 text-lg" />
              </div>
            </div>
            <div className="text-3xl font-semibold text-gray-900 mb-2">₪120</div>
            <div className="flex items-center text-xs text-purple-600">
              <span className="flex items-center"><FaArrowLeft className="transform rotate-45 me-1" /> 15%</span>
              <span className="ms-1 text-gray-500">מהחודש שעבר</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Alerts Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-red-50 p-3 rounded-xl">
                    <FaRegBell className="text-red-600 text-xl" />
                  </div>
                  <h2 className="text-xl font-semibold me-3 text-gray-900">התראות</h2>
                </div>
                <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  הצג הכל
                </button>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-red-50 to-red-50/50 hover:from-red-100 hover:to-red-50 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 me-2"></div>
                      <span className="font-medium text-gray-900">מוצרים שעומדים לפוג</span>
                    </div>
                    <span className="text-xs text-red-600 font-medium">לפני 10 דקות</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">2 מוצרי חלב יפוגו בעוד 3 ימים</p>
                  <button className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
                    צפה במוצרים
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-50/50 hover:from-blue-100 hover:to-blue-50 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 me-2"></div>
                      <span className="font-medium text-gray-900">מוצרים שעומדים להיגמר</span>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">לפני שעה</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">החלב והביצים עומדים להיגמר בקרוב</p>
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    הוסף לרשימת קניות
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <FaRegClock className="text-gray-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold me-3 text-gray-900">פעילות אחרונה</h2>
              </div>
              <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                הצג הכל
              </button>
            </div>
            <div className="space-y-6">
              <div className="group cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-start">
                  <div className="bg-green-50 p-2.5 rounded-xl group-hover:bg-green-100 transition-colors">
                    <FaShoppingCart className="text-green-600 text-lg" />
                  </div>
                  <div className="me-3 flex-1">
                    <div className="font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                      הוספת מוצרים מקבלה
                    </div>
                    <div className="text-sm text-gray-500 mt-1">לפני שעתיים</div>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-start">
                  <div className="bg-orange-50 p-2.5 rounded-xl group-hover:bg-orange-100 transition-colors">
                    <FaUtensils className="text-orange-600 text-lg" />
                  </div>
                  <div className="me-3 flex-1">
                    <div className="font-medium text-gray-900 group-hover:text-orange-700 transition-colors">
                      הכנת מתכון שקשוקה
                    </div>
                    <div className="text-sm text-gray-500 mt-1">היום בבוקר</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} href={feature.href} color={feature.color} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
} 
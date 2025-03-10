import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title={title} />
      <main className="flex-1 container mx-auto px-4 py-6 mb-16 md:mb-0 md:me-16">
        {children}
      </main>
      <Navigation />
    </div>
  );
};

export default AppLayout; 
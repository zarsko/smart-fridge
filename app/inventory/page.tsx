'use client';

import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { FaSearch, FaFilter, FaRegClock, FaThermometerHalf, FaSnowflake, FaBoxOpen } from 'react-icons/fa';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  quantity: number;
  expiryDate: string;
  category: string;
  location: 'fridge' | 'freezer' | 'pantry';
  image?: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'חלב תנובה 3%',
    quantity: 2,
    expiryDate: '2024-03-15',
    category: 'מוצרי חלב',
    location: 'fridge',
    image: 'https://images.openfoodfacts.org/images/products/729/000/006/6318/front_en.7.400.jpg',
  },
  {
    id: '2',
    name: 'גבינה צהובה עמק',
    quantity: 1,
    expiryDate: '2024-04-01',
    category: 'מוצרי חלב',
    location: 'fridge',
    image: 'https://images.openfoodfacts.org/images/products/729/000/006/6325/front_en.7.400.jpg',
  },
  {
    id: '3',
    name: 'שניצל תירס טבעול',
    quantity: 1,
    expiryDate: '2024-06-15',
    category: 'מוצרי קפואים',
    location: 'freezer',
    image: 'https://images.openfoodfacts.org/images/products/729/000/006/6332/front_en.7.400.jpg',
  },
  {
    id: '4',
    name: 'אורז בסמטי',
    quantity: 1,
    expiryDate: '2024-12-31',
    category: 'מזווה',
    location: 'pantry',
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          כמות: {product.quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          תאריך תפוגה: {product.expiryDate}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

const LocationSection: React.FC<{
  title: string;
  icon: React.ReactNode;
  products: Product[];
}> = ({ title, icon, products }) => (
  <Container>
    <Typography variant="h4" component="div" gutterBottom>
      {icon} {title}
    </Typography>
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const fridgeProducts = mockProducts.filter(p => p.location === 'fridge');
  const freezerProducts = mockProducts.filter(p => p.location === 'freezer');
  const pantryProducts = mockProducts.filter(p => p.location === 'pantry');

  return (
    <AppLayout title="המקרר שלי">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Smart Fridge Inventory</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {/* Search and Filter Bar */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-s-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="חיפוש מוצרים..."
                className="w-full px-6 py-3 pe-12 rounded-xl border-0 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button className="px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all flex items-center justify-center">
              <FaFilter className="ms-2" />
              <span>סינון</span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="text-sm font-medium text-gray-500 mb-2">סה"כ פריטים</div>
            <div className="text-3xl font-semibold text-gray-900">{mockProducts.length}</div>
            <div className="text-xs text-green-600 mt-2">+2 מאתמול</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="text-sm font-medium text-gray-500 mb-2">פגי תוקף בקרוב</div>
            <div className="text-3xl font-semibold text-red-600">2</div>
            <div className="text-xs text-red-600 mt-2">דורש טיפול</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="text-sm font-medium text-gray-500 mb-2">נוספו השבוע</div>
            <div className="text-3xl font-semibold text-blue-600">5</div>
            <div className="text-xs text-blue-600 mt-2">מתוך 12 פריטים</div>
          </div>
        </div>

        {/* Inventory Sections */}
        <LocationSection
          title="מקרר"
          icon={<FaThermometerHalf />}
          products={fridgeProducts}
        />
        
        <LocationSection
          title="מקפיא"
          icon={<FaSnowflake />}
          products={freezerProducts}
        />
        
        <LocationSection
          title="מזווה"
          icon={<FaBoxOpen />}
          products={pantryProducts}
        />
      </Container>
    </AppLayout>
  );
} 
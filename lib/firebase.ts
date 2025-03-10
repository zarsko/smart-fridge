/// <reference types="firebase/app" />
/// <reference types="firebase/firestore" />
/// <reference types="firebase/analytics" />

'use client';

import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH-yozktL76Nqj0BzifyW6yO2XsqhfRDg",
  authDomain: "dog-park-28.firebaseapp.com",
  projectId: "dog-park-28",
  storageBucket: "dog-park-28.firebasestorage.app",
  messagingSenderId: "869104764321",
  appId: "1:869104764321:web:8f7e369a6509b9ebccb7e0",
  measurementId: "G-YPW7NK1E81"
};

// Initialize Firebase
let app;
let db;
let analytics = null;

try {
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  
  db = getFirestore(app);

  // Only initialize analytics in the browser
  if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
    analytics = getAnalytics(app);
  }
} catch (error) {
  console.error('Firebase initialization error:', error);
}

if (!db) {
  throw new Error('Firebase Firestore not initialized');
}

export { db, analytics }; 
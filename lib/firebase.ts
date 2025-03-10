/// <reference types="firebase/app" />
/// <reference types="firebase/firestore" />
/// <reference types="firebase/analytics" />

'use client';

import { initializeApp } from 'firebase/app';
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
let firebaseApp;
let db;
let analytics = null;

// Only initialize Firebase if it hasn't been initialized and we're in the browser
if (typeof window !== 'undefined') {
  // Check if Firebase app already initialized
  try {
    const apps = require('firebase/app').getApps();
    if (apps.length === 0) {
      firebaseApp = initializeApp(firebaseConfig);
    } else {
      firebaseApp = apps[0];
    }
    
    db = getFirestore(firebaseApp);
    
    // Only initialize analytics in the browser
    if (firebaseConfig.measurementId) {
      analytics = getAnalytics(firebaseApp);
    }
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

export { db, analytics }; 
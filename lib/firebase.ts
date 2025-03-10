'use client';

import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// TODO: Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH-yozktL76Nqj0BzifyW6yO2XsqhfRDg",
  authDomain: "dog-park-28.firebaseapp.com",
  projectId: "dog-park-28",
  storageBucket: "dog-park-28.firebasestorage.app",
  messagingSenderId: "869104764321",
  appId: "1:869104764321:web:8f7e369a6509b9ebccb7e0",
  measurementId: "G-YPW7NK1E81"
};

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize analytics only in the browser
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

const db = getFirestore(app);

export { db, analytics }; 
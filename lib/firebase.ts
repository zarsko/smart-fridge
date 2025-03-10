/// <reference types="firebase/app" />
/// <reference types="firebase/firestore" />
/// <reference types="firebase/analytics" />

'use client';

import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { Analytics, getAnalytics } from 'firebase/analytics';

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

// Initialize Firebase only if it hasn't been initialized
const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db: Firestore = getFirestore(app);

let analytics: Analytics | null = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { db, analytics }; 
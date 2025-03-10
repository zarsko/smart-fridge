// Type definitions for Firebase modules
import * as firebase from 'firebase/app';

// Extend the NodeJS namespace to avoid errors with global functions
declare global {
  // Add global types if needed
}

// Explicitly declare modules to help TypeScript recognize these imports
declare module 'firebase/app' {
  export * from 'firebase/app';
}

declare module 'firebase/firestore' {
  export * from 'firebase/firestore';
}

declare module 'firebase/analytics' {
  export * from 'firebase/analytics';
}

// Export as namespace to make types available globally
export as namespace firebase;
export = firebase; 
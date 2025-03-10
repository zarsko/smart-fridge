// Global type declarations
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// Declare Firebase modules to ensure they're recognized
declare module 'firebase/app';
declare module 'firebase/firestore';
declare module 'firebase/analytics'; 
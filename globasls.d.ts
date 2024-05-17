// global.d.ts
declare global {
    interface Window {
      lintrk: (event: string, data: Record<string, any>) => void;
      gtag: (event: string, action: string, params: Record<string, any>) => void;
    }
  }
  
  export {};
  
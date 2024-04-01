import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.notedclothings.app',
  appName: 'Noted Clothing',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;

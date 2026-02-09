import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './testAssets/tests',
  
  globalSetup: './testAssets/api/globalSetup.js',

  timeout: 30 * 1000,
  
  expect: {
    timeout: 5000
  },

  reporter: [
    ['list'],
    ['monocart-reporter', {  
        name: "ReqRes API Test Report",
        outputFile: './testAssets/artifacts/monocart-report/index.html',
    }],
    ['html', { 
        outputFolder: 'testAssets/artifacts/playwright-report', 
        open: 'never' 
    }]
  ],

  use: {
    baseURL: 'https://reqres.in',
    
    extraHTTPHeaders: {
      'x-api-key': (process.env.REQRES_TOKEN || '').trim(),
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },

    trace: 'on',
  },
});
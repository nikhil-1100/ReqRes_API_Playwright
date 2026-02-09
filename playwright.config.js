import { defineConfig } from '@playwright/test';
import { BASE_URL, REQRES_TOKEN } from './testAssets/utils/env.js';

export default defineConfig({
  testDir: './testAssets/tests',
  
  // Point to your global setup for directory cleaning
  globalSetup: './testAssets/api/globalSetup.js',

  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  /* Reporter Configuration */
  reporter: [
    ['list'], // Terminal output
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
    baseURL: BASE_URL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // Also apply sanitization here for the global 'request' fixture
      ...(REQRES_TOKEN.replace(/[\n\r\s\t]/g, '') && { 'x-api-key': REQRES_TOKEN.replace(/[\n\r\s\t]/g, '') })
    },
    // Trace is essential for debugging CI failures
    trace: 'on', 
  },
});
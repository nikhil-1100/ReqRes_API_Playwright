import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './testAssets/tests',
  globalSetup: './testAssets/api/globalSetup.js', 
  
  reporter: [
    ['list'],
    ['monocart-reporter', {  
        name: "ReqRes API Report",
        outputFile: './testAssets/artifacts/monocart-report/index.html',
    }]
  ],
  use: {
    baseURL: 'https://reqres.in',
    trace: 'on',
  },
});
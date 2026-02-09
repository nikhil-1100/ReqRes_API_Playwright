import { request } from '@playwright/test';
import { BASE_URL, REQRES_TOKEN } from './env.js';

export async function getApiContext() {
  return await request.newContext({
    baseURL: BASE_URL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      ...(REQRES_TOKEN && { 'x-api-key': REQRES_TOKEN })
    }
  });
}

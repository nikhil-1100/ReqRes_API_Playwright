import { request } from '@playwright/test';
import { BASE_URL, REQRES_TOKEN } from './env.js';

export async function getApiContext() {
  // Sanitize the token
  const cleanToken = (REQRES_TOKEN || '').replace(/[\n\r\s\t]/g, '');

  return await request.newContext({
    baseURL: BASE_URL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(cleanToken && { 'x-api-key': cleanToken })
    }
  });
}
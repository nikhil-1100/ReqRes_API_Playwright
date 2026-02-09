import { request } from '@playwright/test';
import { BASE_URL } from './env.js'; 

export async function getApiContext() {
  const token = process.env.REQRES_TOKEN || '';
  const cleanToken = token.replace(/[\n\r\s\t]/g, '');

  return await request.newContext({
    baseURL: BASE_URL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(cleanToken && { 'x-api-key': cleanToken })
    }
  });
}
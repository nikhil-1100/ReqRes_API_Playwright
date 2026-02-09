import { request } from '@playwright/test';
import { BASE_URL, REQRES_TOKEN } from './env.js';

/**
 * Creates a fresh API Request Context.
 * Sanitizes tokens to prevent "Invalid Character" errors in CI/CD.
 */
export async function getApiContext() {
  // Deep sanitize: remove all newlines, tabs, and spaces
  const sanitizedToken = (REQRES_TOKEN || '').replace(/[\n\r\s\t]/g, '');

  return await request.newContext({
    baseURL: BASE_URL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // The header is ONLY added if the token is valid and not empty
      ...(sanitizedToken && { 'x-api-key': sanitizedToken })
    }
  });
}
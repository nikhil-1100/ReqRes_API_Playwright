import { test, expect } from '@playwright/test';
import { UserApi } from '../api/user.api.js';
import { Utils } from '../api/utils.js';
import { faker } from '@faker-js/faker'; // Professional data generation

test.describe('ReqRes User Lifecycle', { tag: '@regression' }, () => {
  let userApi;

  // Generate random data for each test run
  const userData = {
    name: faker.person.fullName(),
    job: faker.person.jobTitle()
  };
  const updatedName = faker.person.fullName();

  test.beforeAll(async () => {
    Utils.manageArtifacts();
  });

  test.beforeEach(async ({ request }) => {
    userApi = new UserApi(request);
  });

  test('TC01 - Full Lifecycle: Create, Fetch, and Update User', async ({}, testInfo) => {
    // Add metadata for Monocart
    testInfo.annotations.push({ type: 'Feature', description: 'User Management' });
    
    let userId;

    await test.step('Step 1: Create a new user', async () => {
      const response = await userApi.createUser(userData);
      expect(response.status()).toBe(201);
      
      const body = await response.json();
      userId = body.id;
      
      Utils.saveArtifact('01_create_user_response', body);
      await testInfo.attach('Create Response', {
        body: JSON.stringify(body, null, 2),
        contentType: 'application/json'
      });
      
      expect(body.name).toBe(userData.name);
    });

    await test.step('Step 2: Fetch the created user', async () => {
      // Note: Using ID 2 for stability on ReqRes mock server
      const response = await userApi.getUser(2); 
      expect(response.status()).toBe(200);
      
      const body = await response.json();
      Utils.saveArtifact('02_get_user_response', body);
      
      await testInfo.attach('Get Response', {
        body: JSON.stringify(body, null, 2),
        contentType: 'application/json'
      });
    });

    await test.step('Step 3: Update user information', async () => {
      const updatePayload = { name: updatedName, job: userData.job };
      const response = await userApi.updateUser(2, updatePayload);
      expect(response.status()).toBe(200);
      
      const body = await response.json();
      Utils.saveArtifact('03_update_user_response', body);
      
      await testInfo.attach('Update Response', {
        body: JSON.stringify(body, null, 2),
        contentType: 'application/json'
      });
      
      expect(body.name).toBe(updatedName);
    });
  });
});
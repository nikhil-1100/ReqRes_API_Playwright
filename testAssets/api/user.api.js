import { getApiContext } from '../utils/apiClient.js';

export class UserApi {
  constructor() {
    this.api = null;
  }

  async init() {
    if (!this.api) {
      this.api = await getApiContext();
    }
  }

  async createUser(payload) {
    await this.init();
    return this.api.post('/api/users', { data: payload });
  }

  async getUser(userId) {
    await this.init();
    return this.api.get(`/api/users/${userId}`);
  }

  async updateUser(userId, payload) {
    await this.init();
    return this.api.put(`/api/users/${userId}`, { data: payload });
  }
}
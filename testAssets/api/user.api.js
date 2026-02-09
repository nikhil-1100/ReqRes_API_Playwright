import { getApiContext } from '../utils/apiClient.js';

export class UserApi {

  async createUser(payload) {
    const api = await getApiContext();
    return api.post('/api/users', { data: payload });
  }

  async getUser(userId) {
    const api = await getApiContext();
    return api.get(`/api/users/${userId}`);
  }

  async updateUser(userId, payload) {
    const api = await getApiContext();
    return api.put(`/api/users/${userId}`, { data: payload });
  }
}

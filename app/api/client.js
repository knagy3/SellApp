import { create } from "apisauce";

import cache from "../utility/cache";
import authStorage from '../auth/storage';
import settings from '../config/settings';

const apiClient = create({
  baseURL: settings.apiUrl,
});

// Calling protected API endpoint
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
// Redefineing apiClient.get
apiClient.get = async (url, params, axiosConfig) => {
  // Before get()
  const response = await get(url, params, axiosConfig);
  // After get()
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  } else {
    
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;

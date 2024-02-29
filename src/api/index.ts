import { authApi } from "./auth";
import { DealApi } from "./deal";

const api = {
  auth: authApi,
  deal: DealApi,
};

export default api;

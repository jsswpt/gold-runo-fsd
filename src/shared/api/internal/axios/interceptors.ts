import { getLocalStorage } from "@/shared/utils";
import { APIinstance } from "./axios";

APIinstance.interceptors.request.use((config) => {
  const token = getLocalStorage("token");
  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

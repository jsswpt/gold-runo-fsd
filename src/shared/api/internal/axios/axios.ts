import axios from "axios";

export const APIinstance = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

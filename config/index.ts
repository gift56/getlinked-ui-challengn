import axios from "axios";
export const baseUrl = axios.create({
  baseURL: "https://backend.getlinked.ai",
  headers: {
    "Content-Type": "application/json",
  },
});

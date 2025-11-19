import axios from "axios";

// Always use same-domain Vercel API routes
// No need for VITE_API_URL anymore
const API_BASE = "/api";

export default axios.create({
  baseURL: API_BASE,
});

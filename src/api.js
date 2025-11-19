import axios from "axios";

// If running locally → use localhost
// If live on Vercel → use Vercel URL
const API_BASE = import.meta.env.VITE_API_URL || window.location.origin;

export default axios.create({
  baseURL: API_BASE,
});

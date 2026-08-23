import axios from "axios";

export default axios.create({
  // Use the local Express server while developing, and Vercel serverless
  // functions after deployment.
  baseURL: import.meta.env.DEV ? "http://localhost:5000" : "",
});

import axios from "axios";
import isLocalStorageAvailable from "utils/Storage/isLocalStorageAvailable";
// client.js api
const baseURL =
  process.env.REACT_APP_SERVER_URL ||
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart";
export { baseURL };

const client = axios.create({
  baseURL,
});

export default client;

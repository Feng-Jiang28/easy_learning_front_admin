import axios from 'axios'

// Set config defaults when creating the instance
const eduInstance = axios.create({
  baseURL: 'http://localhost:8082/'
});

export default eduInstance;
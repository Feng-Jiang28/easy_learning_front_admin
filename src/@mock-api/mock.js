import axios from 'axios'

const MockAdapter = require('axios-mock-adapter');

const instance = axios.create({
  baseURL:'http://localhost:3000'
});
const mock = new MockAdapter(instance, { delayResponse: 0 });
export default mock;

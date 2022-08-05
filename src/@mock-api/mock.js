import axios from 'axios'

const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios, { delayResponse: 0 });
export default mock;

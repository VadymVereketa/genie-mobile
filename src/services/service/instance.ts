import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ytmmhc8r3u.us-east-1.awsapprunner.com/api/v1/',
});

export default instance;

import axios from 'axios';



//preconfigured Axios clint
const client = axios.create({
  baseURL: 'http://localhost:8080/api/v1' ,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default client;
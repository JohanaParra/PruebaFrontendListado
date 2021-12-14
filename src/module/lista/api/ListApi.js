
import axios from 'axios';

export const ListApi = () => {
  

  var config = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos/',
    headers: { 'Content-Type': 'application/json'},
  };
  
  return axios(config);
  
}

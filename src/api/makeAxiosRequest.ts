import axios from './axios';

function makeAxiosRequest(url: string, method: string, body?: {} | null) {
  return axios({
    method: method,
    url: url,
    data: body,
  });
}

export default makeAxiosRequest;

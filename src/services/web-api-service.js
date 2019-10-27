import axios from 'axios';
import { URL } from '../constants/index';

export const getApiCall = (endpoint) => {
  const url = `${URL}${endpoint}`;
  return axios.get(url);
}
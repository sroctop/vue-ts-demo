import axios from 'axios';

export const post = (name = '', data = {}) => {
  const url = `${name}`;

  return axios({
      method: 'POST',
      url,
      data,
  });
};

export const get = (name = '') => {
  const url = `${name}`;

  return axios({
      method: 'GET',
      url,
  });
};

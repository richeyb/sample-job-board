import axios from 'axios';

const fetchJobBoards = (token) => {
  return axios
    .get(`https://jben.dev/v1/boards/${token}/jobs?content=true`);
};

export { fetchJobBoards };

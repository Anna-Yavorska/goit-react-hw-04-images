import axios from 'axios';

const KEY = '39789519-bfdb30523b7afb905fe29e8a0';
const perPage = 12;
export const loadImages = async (search, page) => {
  const url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  const response = await axios(url);
  return response.data;
};

//CONSTS
const API_KEY = '24154374-c1e84db869e410d68acac2009';
const BASE_URL = 'https://pixabay.com/api';

export function fetchImage(imageName, page, perPage) {
  return fetch(
    `${BASE_URL}/?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Nothing found. Try enother query'));
  });
}

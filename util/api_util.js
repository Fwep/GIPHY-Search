import API_KEY from './api_key';

export const fetchSearchGiphys = (searchTerm) => {
  var xhr = $.ajax({
    method: 'GET',
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=5`
  });
  return xhr;
}


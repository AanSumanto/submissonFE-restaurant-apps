const API_ENDPOINT = {
  LIST_RESTAURANT: `${process.env.BASE_URL}/list`,
  DETAIL_RESTAURANT: (id) => `${process.env.BASE_URL}/detail/${id}`,
  SEARCH_RESTAURANT: (keyword) => `${process.end.BASE_URL}/search?q=${keyword}`,
};

export default API_ENDPOINT;
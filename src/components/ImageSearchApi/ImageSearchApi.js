import axios from "axios";

const fetchPicturesWithQuery = (searchQuery, page = 1) => {
	return axios
		.get(
			`https://pixabay.com/api/?key=26861804-fd8fe5ae5bc78c824a9c872d4&q=${searchQuery}&image_type=photo&per_page=15&page=${page}`
		)
		.then((response) => response.data.hits);
};

export default {
	fetchPicturesWithQuery
};


// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';

// export const getImages = async (query, page = 1, parPage = 15) => {
//   const response = await axios.get(
//     `/?q=${query}&page=${page}&key=26861804-fd8fe5ae5bc78c824a9c872d4&image_type=photo&orientation=horizontal&per_page=${parPage}`
//   );
//   return response.data;
// };

// export default getImages;
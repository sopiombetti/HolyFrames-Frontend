import axios from 'axios'

const API = "http://localhost:3000"

export const getPosters = async () => await axios.get(`${API}/poster`);

export const getPoster = async (id) => await axios.get(`${API}/poster/${id}`);

export const addPoster = async (poster) => await axios.post(`${API}/poster`, poster);

// export const addImage = async (id, images) => await axios.post(`${API}/posters/images/${id}`, 
//     images,
//     {headers: { 
//         "Content-Type": "multipart/form-data",
//     }},
//   );

export const deletePoster = async (id) => await axios.delete(`${API}/posters/${id}`);

export const updatePoster = async (id, poster) => await axios.put(`${API}/posters/${id}`, poster);

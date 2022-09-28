import axios from 'axios';

const clientId = "0826b23d7a8b49e08b9841d300963f2a";
// console.log(window.location.href);
const redirectUri = "https://melodious-bienenstitch-64fdf5.netlify.app";
const authEndpoint = "https://accounts.spotify.com/authorize?";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`; 

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    })
};

export default apiClient;
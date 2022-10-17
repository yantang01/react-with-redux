import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID VR4yK4TARzXaVlNSa-DzAQQVAVIMaWI-NaJAbrZoJX4`,
  },
});

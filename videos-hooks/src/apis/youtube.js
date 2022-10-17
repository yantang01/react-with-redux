import axios from "axios";

const KEY = "AIzaSyCB7SIjoltLbb4mYc-S9Ykp_xy6eibZGW0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

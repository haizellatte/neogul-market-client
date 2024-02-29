import axios from "axios";

const accessToken =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

const instance = axios.create({
  baseURL:
    typeof window !== "undefined"
      ? window.location.hostname === "localhost"
        ? "http://localhost:5050"
        : "http://localhost:5050"
      : "http://localhost:5050",
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
  },
});

export default instance;

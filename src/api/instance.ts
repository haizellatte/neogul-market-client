import axios from "axios";

const accessToken =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

const instance = axios.create({
  baseURL:
    "https://port-0-time-attack-fullstack-server-17xco2lltdolaae.sel5.cloudtype.app",
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
  },
});

export default instance;

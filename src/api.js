import axios from "axios";
import { baseUrl } from "./constants";

export const getAllCalls = () =>
  axios.get(`${baseUrl}activities`).then((res) => {
    return res.data;
  });

export const updateCallStatus = (id, payload) =>
  axios.patch(`${baseUrl}activities/${id}`, payload);

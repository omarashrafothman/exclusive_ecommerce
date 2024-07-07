import axios from "axios";
import vars from "../utilites/variables";

export default axios.create({
  baseURL: vars.baseURL,
  Headers: { Accept: "application/json", "Content-Type": "application/json" },
});

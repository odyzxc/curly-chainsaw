import axios from "axios";
import { User } from "./types";

export const getUsers = async () => {
  // fail once in a while to see some red ;)
  const goodUrl = "https://jsonplaceholder.typicode.com/users";
  const badUrl = "https://jsonplaceholder.typicode.com/losUserosDeLaFail";
  const isItTimeToFail = Math.random() * 3 < 1;
  return await axios.get<User[]>(isItTimeToFail ? badUrl : goodUrl);
};

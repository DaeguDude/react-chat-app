import axios from "axios";
import { useQuery } from "react-query";
import { UserResponse } from "../types/type";

const getUserList = async () => {
  const response = await axios.get<UserResponse[]>(`/users`);
  return response.data;
};

export const useUserList = () => {
  return useQuery(["users"], () => getUserList());
};

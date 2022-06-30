import axios from "axios";
import { useQuery } from "react-query";
import { UserResponse } from "../types/type";

interface GetUserReq {
  userId: number;
}

const getUser = async ({ userId }: GetUserReq) => {
  const response = await axios.get<UserResponse>(`/users/${userId}`);
  return response.data;
};

export const useUser = ({ userId }: GetUserReq) => {
  return useQuery(["user", userId], () => getUser({ userId }));
};

import axios from "axios";
import { useQuery } from "react-query";
import { ChatListResponse } from "../types/type";

interface ChatsRequest {
  userId: number;
}

const getChats = async ({ userId }: ChatsRequest) => {
  const response = await axios.get<ChatListResponse[]>(`/chats/${userId}`);
  return response.data;
};

export const useChats = ({ userId }: ChatsRequest) => {
  return useQuery(["users", userId], () => getChats({ userId }));
};

import axios from "axios";
import { useQuery } from "react-query";
import { ChatMessage } from "../types/type";

interface GetMessagesReq {
  chatRoomId: number;
}

const getMessages = async ({ chatRoomId }: GetMessagesReq) => {
  const response = await axios.get<ChatMessage[]>(`/chatMessage/${chatRoomId}`);
  return response.data;
};

export const useChatMessages = ({ chatRoomId }: GetMessagesReq) => {
  return useQuery(["messages", chatRoomId], () => getMessages({ chatRoomId }));
};

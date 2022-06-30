import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

interface AddMessageReq {
  /**
   * 메세지 내용
   */
  content: string;

  /**
   * 보낸 이
   */
  senderId: number;

  /**
   * 대화방
   */
  chatRoomId: number;
}

const addMessage = (params: AddMessageReq) => {
  return axios.post(`/chatMessage`, params);
};

export const useAddMessage = () => {
  const queryClient = useQueryClient();

  return useMutation(addMessage, {
    onSuccess: () => queryClient.invalidateQueries(["messages"]),
  });
};

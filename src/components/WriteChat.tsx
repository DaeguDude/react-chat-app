import React, { useState } from "react";
import { useAddMessage } from "../hooks/useAddMessage";

interface IWriteChat {
  selectedChatRoomId: number;
  currentUserId: number;
}

export function WriteChat({ currentUserId, selectedChatRoomId }: IWriteChat) {
  const [message, setMessage] = useState("");

  const addMessage = useAddMessage();

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    addMessage.mutate(
      {
        chatRoomId: selectedChatRoomId,
        senderId: currentUserId,
        content: message,
      },
      {
        onSuccess: () => {
          setMessage("");
        },
      }
    );
  };

  return (
    <div className="p-xl flex flex-col">
      <div className="border border-grey/20">
        <div>
          <textarea
            onChange={handleMessageChange}
            value={message}
            className="resize-none w-full p-sm outline-none bg-grey/20 text-black h-[40px] text-sm"
            placeholder="내용을 작성해 주세요."
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            disabled={message.length === 0}
            className="h-[30px] rounded-md bg-purple/90 hover:bg-purple disabled:bg-grey text-white text-sm px-sm flex items-center"
            onClick={handleSendMessage}
          >
            보내기
          </button>
        </div>
      </div>
    </div>
  );
}

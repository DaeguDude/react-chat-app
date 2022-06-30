import { useAppInfoDispatch } from "../contexts/AppContext";
import { ChatListResponse } from "../types/type";
import { ChatRoomRow } from "./ChatRoomRow";

interface IChats {
  filterText: string;
  chatList: ChatListResponse[];
}

export function Chats({ chatList, filterText }: IChats) {
  const visibleChatList: ChatListResponse[] = [];
  const appInfoDispatch = useAppInfoDispatch();

  const handleChatRoomChange = (chatRoomId: number) => {
    appInfoDispatch({
      type: "changed_chatRoom",
      chatRoomId,
    });
  };

  chatList.forEach((chatRoom) => {
    if (
      chatRoom.recipientName.toLowerCase().indexOf(filterText.toLowerCase()) ===
      -1
    ) {
      return;
    }

    visibleChatList.push(chatRoom);
  });

  return (
    <div className="min-w-[88px] lg:min-w-[359px] h-[calc(100%-66px)] overflow-y-scroll">
      {visibleChatList.map((chatInfo) => (
        <ChatRoomRow
          key={chatInfo.recipientName}
          lastMessage={chatInfo.lastMessage}
          lastMessageDate={chatInfo.lastMessageDate}
          recipientName={chatInfo.recipientName}
          recipientChatRoomRowImgSrc={chatInfo.recipientChatRoomRowImgSrc}
          id={chatInfo.id}
          onChatRoomChange={handleChatRoomChange}
        />
      ))}
    </div>
  );
}

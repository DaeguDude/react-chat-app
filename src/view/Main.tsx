import { ChatReceiver, ChatReceiverLayout } from "../components/ChatReceiver";
import { Chat, ChatLayout } from "../components/Chat";
import { WriteChat } from "../components/WriteChat";
import { useAppInfo } from "../contexts/AppContext";
import { useChatMessages } from "../hooks/useChatMessages";
import { useUser } from "../hooks/useUser";

export function Main() {
  const { selectedChatRoomId, currentUserId } = useAppInfo();

  const messagesQuery = useChatMessages({ chatRoomId: selectedChatRoomId });
  const userQuery = useUser({ userId: currentUserId });

  return (
    <div className="min-h-screen max-h-screen grow">
      {userQuery.data ? (
        <ChatReceiver userInfo={userQuery.data} />
      ) : userQuery.isLoading ? (
        <ChatReceiverLayout>로딩중입니다</ChatReceiverLayout>
      ) : (
        <ChatReceiverLayout>
          유저정보를 불러오는데 실패하였습니다
        </ChatReceiverLayout>
      )}

      {messagesQuery.data ? (
        <Chat messages={messagesQuery.data} />
      ) : messagesQuery.isLoading ? (
        <ChatLayout>로딩중입니다</ChatLayout>
      ) : (
        <ChatLayout>메세지를 불러오는데 실패하였습니다</ChatLayout>
      )}

      <WriteChat
        currentUserId={currentUserId}
        selectedChatRoomId={selectedChatRoomId}
      />
    </div>
  );
}

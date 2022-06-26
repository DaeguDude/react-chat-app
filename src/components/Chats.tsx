import { useChats } from "../hooks/useChats";
import { Profile } from "./Profile";

export function Chats() {
  const chatsQuery = useChats({ userId: 1 });

  if (chatsQuery.data) {
    return (
      <div>
        {chatsQuery.data.map((chatInfo) => (
          <Profile
            key={chatInfo.name}
            lastMessage={chatInfo.lastMessage}
            lastMessageTime={chatInfo.lastMessageTime}
            name={chatInfo.name}
            profileImgSrc={chatInfo.profileImgSrc}
          />
        ))}
      </div>
    );
  }

  if (chatsQuery.isError) {
    return <div>데이터를 불러오는데 실패하였습니다.</div>;
  }

  return <div>데이터를 불러오고 있습니다.</div>;
}

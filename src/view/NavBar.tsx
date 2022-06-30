import React, { useState } from "react";
import { Chats } from "../components/Chats";
import { ChatSearchBar } from "../components/ChatSearchBar";
import { NavTop } from "../components/NavTop";
import { useAppInfo } from "../contexts/AppContext";
import { useChats } from "../hooks/useChats";

export function NavBar() {
  const { currentUserId } = useAppInfo();

  const [filterText, setFilterText] = useState("");
  const chatsQuery = useChats({ userId: currentUserId });

  const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  return (
    <div className="w-[100px] lg:w-[360px] min-h-screen max-h-screen  border-grey/50">
      <NavTop />
      <div className="h-[100%] border-r border-grey/50">
        <ChatSearchBar
          filterText={filterText}
          onFilterTextChange={handleFilterTextChange}
        />

        {chatsQuery.data ? (
          <Chats chatList={chatsQuery.data} filterText={filterText} />
        ) : chatsQuery.isLoading ? (
          <div>로딩중</div>
        ) : (
          <div>채팅데이터를 불러오는데 실패하였습니다.</div>
        )}
      </div>
    </div>
  );
}

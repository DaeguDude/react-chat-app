import { Chats } from "../components/Chats";
import { ChatSearchBar } from "../components/ChatSearchBar";
import { NavTop } from "../components/NavTop";

export function NavBar() {
  return (
    <div className="min-h-screen w-1/3 border border-black">
      <NavTop />
      <ChatSearchBar />
      <Chats />
    </div>
  );
}

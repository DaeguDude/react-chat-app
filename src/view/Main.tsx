import { ChatReceiver } from "../components/ChatReceiver";
import { Conversation } from "../components/Conversation";
import { WriteChat } from "../components/WriteChat";

export function Main() {
  return (
    <div className="min-h-screen w-2/3 border border-black">
      <ChatReceiver />
      <Conversation />
      <WriteChat />
    </div>
  );
}

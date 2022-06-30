import { ChatMessage } from "../types/type";
import { SenderMessage } from "./SenderMessage";

interface IChat {
  messages: ChatMessage[];
}

export function Chat({ messages }: IChat) {
  return (
    <div className="px-xl h-[calc(100%-220px)] overflow-y-scroll">
      {messages.map((message) => (
        <div key={message.id}>
          <SenderMessage key={message.id} message={message.content} />
          <div className="h-[8px]" />
        </div>
      ))}
    </div>
  );
}

interface IChatLayout {
  children: React.ReactNode;
}
export function ChatLayout({ children }: IChatLayout) {
  return (
    <div className="px-xl h-[calc(100%-220px)] overflow-y-scroll">
      {children}
    </div>
  );
}

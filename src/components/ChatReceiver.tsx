import { UserResponse } from "../types/type";

interface IChatReceiver {
  userInfo: UserResponse;
}

export function ChatReceiver({ userInfo }: IChatReceiver) {
  return (
    <ChatReceiverLayout>
      <div className="text-xl">{userInfo.name}</div>
      <div className="text-md text-purple">{userInfo.occupation}</div>
    </ChatReceiverLayout>
  );
}

interface IChatReceiverLayout {
  children: React.ReactNode;
}
export function ChatReceiverLayout({ children }: IChatReceiverLayout) {
  return (
    <div className="h-[100px] flex flex-col justify-center px-xl border-b border-grey/50">
      {children}
    </div>
  );
}

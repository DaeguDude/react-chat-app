import {
  ChatSearchBar,
  ChatSearchBarWithoutSearch,
} from "../components/ChatSearchBar";
import {
  Profile,
  ProfileHovered,
  ProfileSelected,
} from "../components/Profile";
import { ReceiverMessage } from "../components/ReceiverMessage";
import { SenderMessage } from "../components/SenderMessage";

export const Components = () => {
  return (
    <div>
      <h1 className="text-[40px]">컴포넌트</h1>
      <div className="flex flex-wrap">
        <div className="w-[330px] border-2 border-black">
          <h2 className="text-[20px]">Profile</h2>
          <Profile />
          <ProfileHovered />
          <ProfileSelected />
        </div>

        <div className="m-[50px] w-[700px] border-2 border-black">
          <h2 className="text-[20px]">Mesasges</h2>
          <ReceiverMessage message="안녕하세요 서류지원 합격한 최예슬 입니다. 우선 좋은소식 감사드립니다." />
          <div className="my-xs"></div>
          <SenderMessage message="안녕하세요 서류지원 합격한 최예슬 입니다. 우선 좋은소식 감사드립니다." />
        </div>

        <div className="m-[50px] w-[700px] border-2 border-black">
          <h2 className="text-[20px]">ChatSearchBar</h2>
          <ChatSearchBar />
          <div className="my-xs"></div>
          <ChatSearchBarWithoutSearch />
        </div>

        <div className="m-[50px] w-[150px] border-2 border-black">
          <h2 className="text-[20px]">Button</h2>
          <button className="w-full rounded-md bg-purple/90 hover:bg-purple text-white py-sm px-md">
            보내기
          </button>
        </div>
      </div>
    </div>
  );
};

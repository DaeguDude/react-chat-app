import { ChatListResponse } from "../types/type";

interface IProfile extends ChatListResponse {}

export function Profile({
  lastMessage,
  lastMessageTime,
  name,
  profileImgSrc,
}: IProfile) {
  return (
    <div className="">
      <div className="px-sm">
        <div className="flex p-sm cursor-pointer hover:bg-grey/10 rounded-sm ">
          <div className="min-w-[25%] pr-md">
            <img
              alt="Christoph Pehofer"
              className="w-[56px] h-[56px] rounded-full"
              src={profileImgSrc}
            />
          </div>
          <div className="w-3/4 flex flex-col justify-center">
            <div className="flex items-center ">
              <span className="text-lg pr-md text-black">{name}</span>
              <span className="text-sm text-grey">{lastMessageTime}</span>
            </div>
            <p className="text-sm text-grey overflow-hidden whitespace-nowrap text-ellipsis">
              {lastMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProfileForDisplay() {
  return (
    <div className="">
      <div className="px-sm">
        <div className="flex p-sm cursor-pointer hover:bg-grey/10 rounded-sm ">
          <div className="min-w-[25%] pr-md">
            <img
              alt="Christoph Pehofer"
              className="w-[56px] h-[56px] rounded-full"
              src="https://video-ssn1-1.xx.fbcdn.net/v/t1.6435-1/141309624_10214618459213808_4896948802002001683_n.jpg?stp=dst-jpg_p100x100&amp;_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=bC77HAx72_4AX8rc8T0&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=video-ssn1-1.xx&amp;oh=00_AT9alt49S821Zk4msXI6eymoDhIr_JSKA3m240GBeaoTRQ&amp;oe=62DB1017"
            />
          </div>
          <div className="w-3/4 flex flex-col justify-center">
            <div className="flex items-center ">
              <span className="text-lg pr-md text-black">최예슬</span>
              <span className="text-sm text-grey">2016.12.13</span>
            </div>
            <p className="text-sm text-grey overflow-hidden whitespace-nowrap text-ellipsis">
              안녕하세요 서류지원 합격한 최예슬입니다. 안녕하세요 서류지원
              합격한 최예슬입니다. 안녕하세요 서류지원 합격한 최예슬입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProfileHovered() {
  return (
    <div className="">
      <div className="px-sm">
        <div className="flex p-sm cursor-pointer bg-grey/10 rounded-sm ">
          <div className="min-w-[25%] pr-md">
            <img
              alt="Christoph Pehofer"
              className="w-[56px] h-[56px] rounded-full"
              src="https://video-ssn1-1.xx.fbcdn.net/v/t1.6435-1/141309624_10214618459213808_4896948802002001683_n.jpg?stp=dst-jpg_p100x100&amp;_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=bC77HAx72_4AX8rc8T0&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=video-ssn1-1.xx&amp;oh=00_AT9alt49S821Zk4msXI6eymoDhIr_JSKA3m240GBeaoTRQ&amp;oe=62DB1017"
            />
          </div>
          <div className="w-3/4 flex flex-col justify-center">
            <div className="flex items-center ">
              <span className="text-lg pr-md text-black">최예슬</span>
              <span className="text-sm text-grey">2016.12.13</span>
            </div>
            <p className="text-sm text-grey overflow-hidden whitespace-nowrap text-ellipsis">
              안녕하세요 서류지원 합격한 최예슬입니다. 안녕하세요 서류지원
              합격한 최예슬입니다. 안녕하세요 서류지원 합격한 최예슬입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProfileSelected() {
  return (
    <div className="">
      <div className="px-sm">
        <div className="flex p-sm cursor-pointer bg-purple/10 rounded-sm ">
          <div className="min-w-[25%] pr-md">
            <img
              alt="Christoph Pehofer"
              className="w-[56px] h-[56px] rounded-full"
              src="https://video-ssn1-1.xx.fbcdn.net/v/t1.6435-1/141309624_10214618459213808_4896948802002001683_n.jpg?stp=dst-jpg_p100x100&amp;_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=bC77HAx72_4AX8rc8T0&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=video-ssn1-1.xx&amp;oh=00_AT9alt49S821Zk4msXI6eymoDhIr_JSKA3m240GBeaoTRQ&amp;oe=62DB1017"
            />
          </div>
          <div className="w-3/4 flex flex-col justify-center">
            <div className="flex items-center ">
              <span className="text-lg pr-md text-black">최예슬</span>
              <span className="text-sm text-grey">2016.12.13</span>
            </div>
            <p className="text-sm text-grey overflow-hidden whitespace-nowrap text-ellipsis">
              안녕하세요 서류지원 합격한 최예슬입니다. 안녕하세요 서류지원
              합격한 최예슬입니다. 안녕하세요 서류지원 합격한 최예슬입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

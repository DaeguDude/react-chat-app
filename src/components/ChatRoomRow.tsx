import React from "react";
import classNames from "classnames";
import { useAppInfo } from "../contexts/AppContext";
import { ChatListResponse } from "../types/type";

export interface IChatRoomRow extends ChatListResponse {
  onChatRoomChange: (chatRoomId: number) => void;
}

export function ChatRoomRow({
  lastMessage,
  lastMessageDate,
  recipientName,
  id,
  recipientChatRoomRowImgSrc,
  onChatRoomChange,
}: IChatRoomRow) {
  const { selectedChatRoomId } = useAppInfo();

  const handleChatRoomChange = () => {
    onChatRoomChange(id);
  };

  const isSelctedChatRoom = selectedChatRoomId === id;

  return (
    <div onClick={handleChatRoomChange}>
      <div className="px-sm">
        <div
          className={classNames(
            "flex justify-center p-sm cursor-pointer rounded-sm",
            {
              "hover:bg-grey/10": !isSelctedChatRoom,
              "bg-purple/10": isSelctedChatRoom,
            }
          )}
        >
          <div className="w-[56px] h-[56px] lg:mr-md">
            <img
              alt="Christoph Pehofer"
              className="w-[100%] h-[100%] rounded-full"
              src={recipientChatRoomRowImgSrc}
            />
          </div>

          <div className="hidden w-3/4 lg:flex lg:flex-col lg:justify-center">
            <div className="flex items-center ">
              <span className="text-lg pr-md text-black">{recipientName}</span>
              <span className="text-sm text-grey">{lastMessageDate}</span>
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

export function ChatRoomRowForDisplay() {
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
              <span className="text-lg pr-md text-black">?????????</span>
              <span className="text-sm text-grey">2016.12.13</span>
            </div>
            <p className="text-sm text-grey overflow-hidden whitespace-nowrap text-ellipsis">
              ??????????????? ???????????? ????????? ??????????????????. ??????????????? ????????????
              ????????? ??????????????????. ??????????????? ???????????? ????????? ??????????????????.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChatRoomRowHovered() {
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
              <span className="text-lg pr-md text-black">?????????</span>
              <span className="text-sm text-grey">2016.12.13</span>
            </div>
            <p className="text-sm text-grey overflow-hidden whitespace-nowrap text-ellipsis">
              ??????????????? ???????????? ????????? ??????????????????. ??????????????? ????????????
              ????????? ??????????????????. ??????????????? ???????????? ????????? ??????????????????.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChatRoomRowSelected() {
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
              <span className="text-lg pr-md text-black">?????????</span>
              <span className="text-sm text-grey">2016.12.13</span>
            </div>
            <p className="text-sm text-grey overflow-hidden whitespace-nowrap text-ellipsis">
              ??????????????? ???????????? ????????? ??????????????????. ??????????????? ????????????
              ????????? ??????????????????. ??????????????? ???????????? ????????? ??????????????????.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { render, screen } from "@testing-library/react";
import { Chats } from "../Chats";
import { ChatListResponse } from "../../types/type";

const chatList: ChatListResponse[] = [
  {
    id: 1,
    recipientChatRoomRowImgSrc:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/88.jpg",
    recipientName: "최예슬",
    lastMessageDate: "2021.06.29",
    lastMessage: "안녕하세요. 서류지원 합격한 최예슬입니다. ",
  },
  {
    id: 2,
    recipientChatRoomRowImgSrc:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/88.jpg",
    recipientName: "신예지",
    lastMessageDate: "2021.06.30",
    lastMessage: "안녕하세요. 서류지원 합격한 신예지입니다. ",
  },
  {
    id: 3,
    recipientChatRoomRowImgSrc:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/88.jpg",
    recipientName: "김펀치",
    lastMessageDate: "2021.06.31",
    lastMessage: "안녕하세요. 서류지원 합격한 김펀치입니다. ",
  },
];

describe("채팅방 리스트 - Chats", () => {
  test("채팅방 리스트를 제대로 출력하여 줍니다", () => {
    render(<Chats chatList={chatList} filterText={""} />);

    expect(screen.getByText("최예슬")).toBeInTheDocument();
    expect(
      screen.getByText(/서류지원 합격한 최예슬입니다/)
    ).toBeInTheDocument();

    expect(screen.getByText("신예지")).toBeInTheDocument();
    expect(
      screen.getByText(/서류지원 합격한 신예지입니다/)
    ).toBeInTheDocument();

    expect(screen.getByText("김펀치")).toBeInTheDocument();
    expect(
      screen.getByText(/서류지원 합격한 김펀치입니다/)
    ).toBeInTheDocument();
  });

  test("필터링 텍스트에 따라 채팅방 리스트를 필터링 하여줍니다.", () => {
    render(<Chats chatList={chatList} filterText={"최예"} />);

    expect(screen.getByText("최예슬")).toBeInTheDocument();
    expect(
      screen.getByText(/서류지원 합격한 최예슬입니다/)
    ).toBeInTheDocument();

    expect(screen.queryByText("신예지")).not.toBeInTheDocument();
    expect(screen.queryByText("김펀치")).not.toBeInTheDocument();
  });
});

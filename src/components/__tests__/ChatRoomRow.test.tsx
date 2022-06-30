import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChatRoomRow, IChatRoomRow } from "../ChatRoomRow";

describe("ChatRoomRow", () => {
  test("데이터를 제대로 렌더링 하여줍니다.", () => {
    const props: IChatRoomRow = {
      lastMessage: "안녕하세요. 서류지원 합격한 최예슬입니다.",
      lastMessageDate: "2022.06.30",
      recipientName: "최예슬",
      recipientChatRoomRowImgSrc:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/88.jpg",
      id: 1,
      onChatRoomChange: (chatRoomId: number) => {},
    };

    render(<ChatRoomRow {...props} />);

    expect(
      screen.getByText(/서류지원 합격한 최예슬입니다/)
    ).toBeInTheDocument();
    expect(screen.getByText("2022.06.30")).toBeInTheDocument();
    expect(screen.getByText("최예슬")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      props.recipientChatRoomRowImgSrc
    );
  });

  test("채팅방을 바꾸어주는 콜백 함수를 클릭시 제대로 호출합니다.", () => {
    const props: IChatRoomRow = {
      lastMessage: "안녕하세요. 서류지원 합격한 최예슬입니다.",
      lastMessageDate: "2022.06.30",
      recipientName: "최예슬",
      recipientChatRoomRowImgSrc:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/88.jpg",
      id: 1,
      onChatRoomChange: jest.fn((chatRoomId: number) => {}),
    };

    render(<ChatRoomRow {...props} />);

    expect((props.onChatRoomChange as jest.Mock).mock.calls.length).toBe(0);
    userEvent.click(screen.getByRole("img"));
    expect((props.onChatRoomChange as jest.Mock).mock.calls.length).toBe(1);
  });
});

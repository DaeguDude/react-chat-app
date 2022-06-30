import { render, screen } from "@testing-library/react";
import { UserResponse } from "../../types/type";
import { ChatReceiver } from "../ChatReceiver";

describe("채팅방 상대 정보 - ChatReceiver", () => {
  test("채팅방 상대의 정보를 제대로 렌더링 하여줍니다.", () => {
    const userInfo: UserResponse = {
      id: 1,
      name: "최예슬",
      occupation: "웹앱 UX 디자이너",
      ChatRoomRowImgSrc:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/845.jpg",
    };

    render(<ChatReceiver userInfo={userInfo} />);

    expect(screen.getByText("최예슬")).toBeInTheDocument();
    expect(screen.getByText("웹앱 UX 디자이너")).toBeInTheDocument();
  });
});

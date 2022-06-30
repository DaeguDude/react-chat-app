import { render, screen } from "@testing-library/react";
import { ChatMessage } from "../../types/type";
import { Chat } from "../Chat";

describe("대화방 - Chat", () => {
  const messages: ChatMessage[] = [
    {
      id: 1,
      content: "안녕하세요. 서류지원 합격한 최예슬입니다.",
      timeCreated: "2021.06.29",
      senderId: 1,
    },
    {
      id: 2,
      content: "네. 안녕하세요, 반갑습니다. 화상면접 시간이 언제 되시는지요?",
      timeCreated: "2021.06.29",
      senderId: 2,
    },
    {
      id: 3,
      content: "저는 내일 가능할 것 같습니다.",
      timeCreated: "2021.06.29",
      senderId: 1,
    },
    {
      id: 4,
      content: "네. 그러면 내일 뵙겠습니다.",
      timeCreated: "2021.06.29",
      senderId: 2,
    },
    {
      id: 5,
      content: "네. 알겠습니다.",
      timeCreated: "2021.06.29",
      senderId: 1,
    },
  ];

  test("채팅방의  리스트를 제대로 출력하여 줍니다", () => {
    render(<Chat messages={messages} />);

    expect(screen.getByText(/서류지원/)).toBeInTheDocument();
    expect(screen.getByText(/화상면접/)).toBeInTheDocument();
    expect(screen.getByText(/가능/)).toBeInTheDocument();
    expect(screen.getByText(/내일 뵙겠습니다/)).toBeInTheDocument();
    expect(screen.getByText(/알겠습니다/)).toBeInTheDocument();
  });
});

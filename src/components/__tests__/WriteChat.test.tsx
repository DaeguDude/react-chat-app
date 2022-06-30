import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WriteChat } from "../WriteChat";
import { renderWithClient } from "../utils";

describe("메세지 보내는 컴포넌트 - WriteChat", () => {
  test("채팅방 리스트를 제대로 출력하여 줍니다", () => {
    renderWithClient(<WriteChat selectedChatRoomId={1} currentUserId={1} />);

    const textarea = screen.getByRole("textbox");
    userEvent.type(textarea, "몇 시쯤 뵈면 될까요?");

    expect(textarea).toHaveValue("몇 시쯤 뵈면 될까요?");
  });
});

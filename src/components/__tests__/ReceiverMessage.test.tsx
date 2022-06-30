import { render, screen } from "@testing-library/react";
import { ReceiverMessage } from "../ReceiverMessage";

describe("메세지 - ReceiverMessage", () => {
  test("메세지를 제대로 렌더링 하여줍니다.", () => {
    render(
      <ReceiverMessage message={"안녕하세요. 서류지원 합격한 최예슬입니다."} />
    );

    expect(
      screen.getByText("안녕하세요. 서류지원 합격한 최예슬입니다.")
    ).toBeInTheDocument();
  });
});

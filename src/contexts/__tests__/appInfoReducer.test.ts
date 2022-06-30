import { AppInfoAction, appInfoReducer, AppInfoState } from "../AppContext";

describe("글로벌 스토어 - appInfoReducer", () => {
  test("userId를 제대로 변경하여 줍니다.", () => {
    const state: AppInfoState = {
      currentUserId: 0,
      selectedChatRoomId: 0,
    };

    const action: AppInfoAction = {
      type: "changed_user",
      userId: 5,
    };

    const result = { currentUserId: 5, selectedChatRoomId: 0 };

    expect(appInfoReducer(state, action)).toEqual(result);
  });

  test("chatRoomId를 제대로 변경하여 줍니다.", () => {
    const state: AppInfoState = {
      currentUserId: 0,
      selectedChatRoomId: 10,
    };

    const action: AppInfoAction = {
      type: "changed_chatRoom",
      chatRoomId: 10,
    };

    const result = { currentUserId: 0, selectedChatRoomId: 10 };

    expect(appInfoReducer(state, action)).toEqual(result);
  });
});

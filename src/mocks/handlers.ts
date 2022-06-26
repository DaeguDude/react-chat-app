import { rest } from "msw";
import { ChatListResponse, UserResponse } from "../types/type";

const users: UserResponse[] = [
  {
    id: 1,
    name: "최예슬",
    occupation: "웹앱 UX 디자이너",
    profileImgSrc: "none",
  },
  {
    id: 2,
    name: "신예지",
    occupation: "프론트엔드 개발자",
    profileImgSrc: "none",
  },
  { id: 3, name: "김펀치", occupation: "백엔드 개발자", profileImgSrc: "none" },
];

const chats: ChatListResponse[] = [
  {
    profileImgSrc:
      "https://media.istockphoto.com/photos/headshot-of-44-year-old-mixed-race-man-in-casual-polo-shirt-picture-id1264106963?b=1&k=20&m=1264106963&s=170667a&w=0&h=dLQliHpFkaweGQhiRfkNGkwsAPoKCEy9UWWk-m2iCCk=",
    name: "최예슬",
    lastMessageTime: "2016.12.13",
    lastMessage:
      "안녕하세요 서류지원 합격한 최예슬입니다. 좋은 기회가 된 것 같습니다.",
  },
  {
    profileImgSrc:
      "https://media.istockphoto.com/photos/headshot-of-44-year-old-mixed-race-man-in-casual-polo-shirt-picture-id1264106963?b=1&k=20&m=1264106963&s=170667a&w=0&h=dLQliHpFkaweGQhiRfkNGkwsAPoKCEy9UWWk-m2iCCk=",
    name: "신예지",
    lastMessageTime: "2016.12.13",
    lastMessage:
      "안녕하세요 서류지원 합격한 최예슬입니다. 좋은 기회가 된 것 같습니다.",
  },
  {
    profileImgSrc:
      "https://media.istockphoto.com/photos/headshot-of-44-year-old-mixed-race-man-in-casual-polo-shirt-picture-id1264106963?b=1&k=20&m=1264106963&s=170667a&w=0&h=dLQliHpFkaweGQhiRfkNGkwsAPoKCEy9UWWk-m2iCCk=",
    name: "김펀치",
    lastMessageTime: "2016.12.13",
    lastMessage:
      "안녕하세요 서류지원 합격한 최예슬입니다. 좋은 기회가 된 것 같습니다.",
  },
  {
    profileImgSrc:
      "https://media.istockphoto.com/photos/headshot-of-44-year-old-mixed-race-man-in-casual-polo-shirt-picture-id1264106963?b=1&k=20&m=1264106963&s=170667a&w=0&h=dLQliHpFkaweGQhiRfkNGkwsAPoKCEy9UWWk-m2iCCk=",
    name: "이윤호",
    lastMessageTime: "2016.12.13",
    lastMessage:
      "안녕하세요 서류지원 합격한 최예슬입니다. 좋은 기회가 된 것 같습니다.",
  },
];

export const handlers = [
  // 챗방 생성하기 - POST chats
  // 챗방에 메세지 작성하기 - POST chatMessage

  // 챗방 리스트 불러오기 - GET Chats/:userId
  rest.get("/chats/:userId", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<ChatListResponse[]>(chats));
  }),

  // 유저리스트 불러오기 - GET Users
  rest.get("/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<UserResponse[]>(users));
  }),
  // 유저 정보 불러오기 - GET User/:userId
  // 메세지 불러오기 - GET chatMessage/:chatRoomId
];

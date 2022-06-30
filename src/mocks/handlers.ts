import { rest } from "msw";
import { ChatListResponse, ChatMessage, UserResponse } from "../types/type";
import { secondDB } from "./db";

export const handlers = [
  rest.get("/chats/:userId", (req, res, ctx) => {
    const chats = secondDB.chat.getAll();

    return res(ctx.status(200), ctx.json<ChatListResponse[]>(chats));
  }),

  rest.get("/users", (req, res, ctx) => {
    const users = secondDB.user.getAll();

    return res(ctx.status(200), ctx.json<UserResponse[]>(users));
  }),

  rest.get("/users/:userId", (req, res, ctx) => {
    const { userId } = req.params;

    const user = secondDB.user.findFirst({
      where: {
        id: {
          equals: Number(userId),
        },
      },
    });

    return res(ctx.status(200), ctx.json(user));
  }),

  rest.get("chatMessage/:chatRoomId", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<ChatMessage[]>(secondDB.message.getAll())
    );
  }),

  rest.post("/chatMessage", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

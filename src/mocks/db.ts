import { factory, manyOf, oneOf, primaryKey } from "@mswjs/data";

// @ts-ignore
import { faker } from "@faker-js/faker";
export const secondDB = factory({
  chat: {
    id: primaryKey(Number),
    recipientChatRoomRowImgSrc: String,
    recipientName: String,
    lastMessageDate: String,
    lastMessage: String,
  },

  message: {
    id: primaryKey(Number),
    content: String,
    timeCreated: String,
    senderId: Number,
  },

  user: {
    id: primaryKey(Number),
    name: String,
    occupation: String,
    ChatRoomRowImgSrc: String,
  },
});

const NUM_CHATS = 100;
export function createChats(numChats: number) {
  const result = [];
  for (let i = 0; i < numChats; i++) {
    const chat = secondDB.chat.create({
      id: i + 1,
      recipientChatRoomRowImgSrc: faker.image.avatar(),
      recipientName: faker.name.findName(),
      lastMessageDate: faker.date
        .between("2021-01-01T00:00:00.000Z", "2022-06-30T00:00:00.000Z")
        .toDateString(),
      lastMessage: faker.lorem.text(),
    });
    result.push(chat);
  }

  return result;
}
export const chats = createChats(NUM_CHATS);

export function createMessages(numMessages: number) {
  const result = [];

  let isEven = false;
  for (let i = 0; i < numMessages; i++) {
    const message = secondDB.message.create({
      id: i + 1,
      content: faker.lorem.text(),
      senderId: isEven ? 1 : 2,
      timeCreated: faker.date
        .between("2022-06-30T00:00:00.000Z", "2022-06-30T23:59:00.000Z")
        .toDateString(),
    });

    result.push(message);

    isEven = !isEven;
  }

  return result;
}

const NUM_MESSAGES = 100;
export const messages = createMessages(NUM_MESSAGES);

export function createUsers(numUsers: number) {
  const result = [];

  for (let i = 0; i < numUsers; i++) {
    const user = secondDB.user.create({
      id: i + 1,
      name: faker.name.findName(),
      occupation: faker.name.jobTitle(),
      ChatRoomRowImgSrc: faker.image.avatar(),
    });

    result.push(user);
  }

  return result;
}

const NUM_USERS = 100;
export const users = createUsers(NUM_USERS);

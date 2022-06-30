export interface UserResponse {
  id: number;
  name: string;
  occupation: string;
  ChatRoomRowImgSrc: string;
}

export interface ChatListResponse {
  id: number;
  recipientChatRoomRowImgSrc: string;
  recipientName: string;
  lastMessageDate: string;
  lastMessage: string;
}

export interface ChatMessage {
  id: number;
  content: string;
  timeCreated: string;
  senderId: number;
}

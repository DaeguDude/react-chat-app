export interface UserResponse {
  id: number;
  name: string;
  occupation: string;
  profileImgSrc: string;
}

export interface ChatListResponse {
  name: string;
  profileImgSrc: string;
  lastMessage: string;
  lastMessageTime: string;
}

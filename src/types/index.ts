// 공통 타입 정의
export interface User {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  profileImage: string;
  bio?: string;
  interests?: string[];
  location?: string;
}

export interface Match {
  id: string;
  userId: string;
  matchedUserId: string;
  matchedAt: Date;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

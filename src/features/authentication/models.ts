export interface UserResponse {
  id: number;
  name: string;
  username: string;
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface CreateUserRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface UserResponse {
  id: string;          
  fullName: string;
  email: string;
  createdAt: string;   
}
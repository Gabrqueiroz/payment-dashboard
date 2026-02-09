import { api } from "./api";

export interface CreateUserRequest {
  fullName: string; // ✅ tem que existir
  email: string;
  password: string;
}

export interface UserResponse {
  id: string;        // UUID
  fullName: string;
  email: string;
  createdAt: string;
}

export const createUser = async (
  data: CreateUserRequest
): Promise<UserResponse> => {
  const response = await api.post("/user", data);
  return response.data;
};

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  id: string; // UUID vem como string
  fullName: string;
  email: string;
  createdAt: string;
}

export const login = async ({ email, password }: LoginRequest): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("api/auth/login", {
    email,
    password,
  });

  return response.data;
};

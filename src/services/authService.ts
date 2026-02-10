import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  userId: string;      // ✅ nome certo agora
  fullName: string;
  email: string;
  token: string | null;
  createdAt: string;
}

export const login = async ({ email, password }: LoginRequest): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("api/auth/login", {
    email,
    password,
  });

  return response.data;
};

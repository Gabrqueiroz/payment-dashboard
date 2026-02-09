import { api } from "./api";

export type AccountType = "CHECKING" | "SAVINGS";

export interface CreateAccountRequest {
  userId: string;          // UUID
  agency: string;          // ✅ obrigatório
  accountType: AccountType; // ✅ obrigatório
  initialDeposit?: number;
}

export interface AccountResponse {
  accountId: string;
  numberAccount: string;
  agency: string;
  balance: number;
  createdAt: string;
  userId: string;
}

export const createAccount = async (
  data: CreateAccountRequest
): Promise<AccountResponse> => {
  const response = await api.post("/account", data);
  return response.data;
};

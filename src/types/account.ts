export type AccountType = "CHECKING" | "SAVINGS";

export interface CreateAccountRequest {
  userId: string;          
  agency: string;
  accountType: AccountType;
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

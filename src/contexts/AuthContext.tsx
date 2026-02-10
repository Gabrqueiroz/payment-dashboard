import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import type { AuthResponse } from "../services/authService";

interface AuthContextData {
  user: AuthResponse | null;
  signIn: (userData: AuthResponse) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthResponse | null>(() => {
    const storedUser = localStorage.getItem("@App:user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const signIn = (userData: AuthResponse) => {
    localStorage.setItem("@App:user", JSON.stringify(userData));
    setUser(userData);
  };

  const signOut = () => {
    localStorage.removeItem("@App:user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

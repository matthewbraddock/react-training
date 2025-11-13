import React, { useState, type ReactNode } from "react";
import { UserContext } from "./context";
import type { User, UpdateUser } from "../types";

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
  });

  const updateUser: UpdateUser = (updates) => {
    setUser((prev) => ({ ...prev, ...updates }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

import { createContext } from "react";
import type { User, UpdateUser } from "../types";

export interface UserContextType {
  user: User;
  updateUser: UpdateUser;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

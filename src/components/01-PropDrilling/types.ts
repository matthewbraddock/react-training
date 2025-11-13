export interface User {
  name: string;
  email: string;
  role: string;
}

export type UpdateUser = (updates: Partial<User>) => void;

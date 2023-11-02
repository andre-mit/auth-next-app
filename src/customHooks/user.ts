import { create } from "zustand";

export type User = {
  id: string;
  name: string;
  email: string;
  balance: number;
  roles: string[];
};

export const useUser = create<User>((set) => ({
  id: "",
  name: "",
  email: "",
  balance: 0,
  roles: [],
}));

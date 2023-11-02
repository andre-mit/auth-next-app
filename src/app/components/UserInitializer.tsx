"use client";

import { useRef } from "react";
import { User, useUser } from "@/customHooks/user";

export default function UserInitializer({ user }: { user: User }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useUser.setState(user);
    initialized.current = true;
  }
  return null;
}

"use client";

import { useUser } from "@/customHooks/user";

export default function Balance() {
  const { balance } = useUser();

  function increment() {
    useUser.setState((state) => ({ balance: state.balance + 1 }));
  }

  function decrement() {
    useUser.setState((state) => ({ balance: state.balance - 1 }));
  }
  return (
    <>
      <span>
        Balance <button onClick={decrement}>-</button> {balance}{" "}
        <button onClick={increment}>+</button>
      </span>
    </>
  );
}

"use client";
import { useState } from "react";

type User = {
  name: string;
  age: number;
};
const BStateHooks = () => {
  const [user, setUser] = useState<User | null>(null);

  const name = user?.name;
  const age = user?.age;

  return <div>BStateHooks</div>;
};

export default BStateHooks;

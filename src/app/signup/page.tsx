"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const login = () => {};
  return (
    <div className="flex justify-center align-center flex-col min-h-screen py-2">
      <h1>Signup</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        name="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        value={user.username}
      />
      <label htmlFor="username">email</label>
      <input
        type="text"
        id="email"
        placeholder="email"
        name="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        value={user.email}
      />
      <label htmlFor="username">Password</label>
      <input
        type="text"
        id="password"
        placeholder="Password"
        name="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={user.password}
      />
      <button onClick={login}>Login</button>
      <Link href="/signup" className="btn btn-success">
        Signup
      </Link>
    </div>
  );
}

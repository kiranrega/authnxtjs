"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const signUp = () => {};

  return (
    <div className="flex justify-center align-center flex-col min-h-screen py-2">
      <h1>Signup</h1>

      <label htmlFor="username">email</label>
      <input
        type="email"
        id="email"
        placeholder="email"
        name="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        value={user.email}
      />
      <label htmlFor="username">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        name="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={user.password}
      />
      <button onClick={signUp}>Sign up here</button>
      <Link href="/login" className="btn btn-success">
        Login
      </Link>
    </div>
  );
}

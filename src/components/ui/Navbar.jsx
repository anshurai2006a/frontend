"use client";
import { useAuth } from "@/context/AuthContext";
import Button from "./Button";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <span className="font-bold">AI Construction Co-Pilot</span>
      {user && (
        <div className="flex items-center gap-4">
          <span>{user.name}</span>
          <Button variant="secondary" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </nav>
  );
}
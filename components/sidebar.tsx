"use client";
import { useState } from "react";
import { Menu } from "lucide-react"; // Lucide icon for collapse toggle
import { Button } from "@/components/ui/button"; // Assuming you're using ShadCN for buttons

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      <div
        className={`transition-width duration-300 ${
          collapsed ? "w-16" : "w-64"
        } bg-gray-200 dark:bg-gray-800 h-full flex flex-col justify-between`}
      >
        <div>
          {/* Collapse Button */}
          <Button
            variant="ghost"
            className="m-2"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Menu />
          </Button>

          {/* Sidebar Content */}
          <nav className={`${collapsed ? "hidden" : "block"} mt-4`}>
            <ul>
              <li className="p-2">
                <a href="/" className="text-gray-700 dark:text-gray-200">
                  Home
                </a>
              </li>
              <li className="p-2">
                <a href="/about" className="text-gray-700 dark:text-gray-200">
                  About
                </a>
              </li>
              {/* Add more items here */}
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
        {/* Main content area */}
      </div>
    </div>
  );
}

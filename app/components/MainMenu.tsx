// app/components/MainMenu.tsx
"use client";

import { NAV, NavItem } from "./nav-data";
import { useState, useRef } from "react";

export default function MainMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenIndex(null);
    }, 500); // 0.5s delay for smoother transition
  };

  return (
    <nav className="relative bg-white text-black">
      <ul className="flex gap-8 px-6 py-4 text-sm font-medium">
        {NAV.map((item, index) => (
          <li
            key={index}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer hover:text-green-600">
              {item.label}
            </span>

            {item.children &&
              item.children.length > 0 &&
              openIndex === index && (
                <ul className="absolute left-0 mt-8 w-56 bg-white shadow-lg border z-50">
                  {item.children.map((child, i) => (
                    <DropdownItem key={i} item={child} />
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <li
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
        <span>{item.label}</span>
        {item.children && item.children.length > 0 && (
          <span className="text-gray-500">›</span>
        )}
      </div>

      {item.children && item.children.length > 0 && open && (
        <ul className="absolute ml-1 left-full top-0 w-56 bg-white shadow-lg   z-50">
          {item.children.map((sub, i) => (
            <li key={i} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {sub.label}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

"use client";

import Link from "next/link";
import React from "react";
import type { NavItem } from "./nav-data";
import { NAV } from "./nav-data";

/* Tiny icons */
const CaretDown: React.FC<{ className?: string }> = ({ className = "w-3 h-3" }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.16l-4.24 3.35a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18z" />
  </svg>
);
const CaretRight: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
    <path d="M7.21 5.23a.75.75 0 0 1 1.06-.02l3.94 4.24a.75.75 0 0 1 0 1.06l-3.94 4.24a.75.75 0 1 1-1.08-1.04L10.67 10 7.19 6.27a.75.75 0 0 1 .02-1.04z" />
  </svg>
);

type DesktopMenuProps = {
  items?: NavItem[];
  showSeparators?: boolean;
  className?: string;
};

export const DesktopMenu: React.FC<DesktopMenuProps> = ({
  items = NAV,
  showSeparators = true,
  className = "",
}) => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);
  const [openSubIdx, setOpenSubIdx] = React.useState<number | null>(null);

  const open = (i: number) => setOpenIdx(i);
  const closeAll = () => { setOpenIdx(null); setOpenSubIdx(null); };

  return (
    <nav className={`hidden md:flex items-center justify-center ${className}`}>
      <ul className="flex items-center gap-1">
        {items.map((item, i) => {
          const hasChildren = !!item.children?.length;
          const active = openIdx === i;

          return (
            <li
              key={item.label}
              className="relative px-2"
              onMouseEnter={() => open(i)}
              onMouseLeave={closeAll}
              onFocus={() => open(i)}
              onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node) && closeAll()}
            >
              <Link
                href={item.href ?? "#"}
                className="flex items-center gap-1.5 px-2 py-2 text-[13px] tracking-[.02em] font-semibold uppercase text-[#222] hover:text-[#7AC143] focus:outline-none"
                aria-haspopup={hasChildren}
                aria-expanded={active}
              >
                {item.label}
                {hasChildren && <CaretDown className="w-3 h-3 text-gray-500" />}
              </Link>

              {/* dot separator like the reference */}
              {showSeparators && i < items.length - 1 && (
                <span aria-hidden className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 select-none">•</span>
              )}

              {/* level-1 dropdown */}
              {hasChildren && active && (
                <div
                  className="absolute left-0 mt-2 w-72 z-[200] rounded-xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden"
                  role="menu"
                >
                  {/* hover bridge to prevent flicker */}
                  <div className="absolute -top-2 left-0 right-0 h-3" />

                  <ul className="py-2">
                    {item.children!.map((child, j) => {
                      const hasSub = !!child.children?.length;
                      const subOpen = openSubIdx === j;

                      return (
                        <li
                          key={child.label}
                          className="relative"
                          onMouseEnter={() => hasSub && setOpenSubIdx(j)}
                          onMouseLeave={() => hasSub && setOpenSubIdx(null)}
                        >
                          <Link
                            href={child.href ?? "#"}
                            className="flex items-center justify-between px-4 py-2.5 text-[14px] hover:bg-gray-50"
                            role="menuitem"
                          >
                            <span>{child.label}</span>
                            {hasSub && <CaretRight className="w-3.5 h-3.5 text-gray-500" />}
                          </Link>

                          {/* level-2 submenu */}
                          {hasSub && subOpen && (
                            <div className="absolute top-0 left-full ml-2 w-64 z-[210] rounded-xl bg-white shadow-2xl ring-1 ring-black/5">
                              <div className="absolute -left-2 top-0 h-full w-3" />
                              <ul className="py-2">
                                {child.children!.map((g) => (
                                  <li key={g.label}>
                                    <Link
                                      href={g.href ?? "#"}
                                      className="block px-4 py-2.5 text-[14px] hover:bg-gray-50"
                                      role="menuitem"
                                    >
                                      {g.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

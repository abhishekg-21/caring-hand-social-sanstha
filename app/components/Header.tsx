"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { DesktopMenu } from "./MainMenu";

const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" aria-hidden="true">
    <circle cx="11" cy="11" r="7" strokeWidth="2" />
    <path d="M20 20l-3.5-3.5" strokeWidth="2" />
  </svg>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-[100]">
      <div className="mx-auto max-w-[1260px] px-4 md:px-6 mt-2">
        <div className="bg-white/95 backdrop-blur rounded-2xl border border-black/5 shadow-[0_8px_24px_rgba(0,0,0,.08)]">
          <div className="h-20 flex items-center">
            {/* Logo (left) */}
            <Link href="/" className="pl-4 md:pl-6 pr-4 shrink-0">
              <Image
                src="/images/logo-smile.png"
                alt="Smile Foundation"
                width={160}
                height={48}
                priority
                className="h-12 w-auto"
              />
            </Link>

            {/* Center: main menu */}
            <DesktopMenu className="flex-1" />

            {/* Right: donate pill, badge, search */}
            <div className="pr-4 md:pr-6 flex items-center gap-3">
              <Link
                href="/donate"
                className="hidden md:inline-block rounded-full bg-[#7AC143] text-white text-sm font-bold px-5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,.08)] hover:brightness-95"
              >
                SUPPORT A CAUSE
              </Link>

              <Image
                src="/images/badge-gptw.png"
                alt="Great Place to Work"
                width={44}
                height={84}
                className="hidden xl:block h-20 w-auto"
              />

              <Link href="/search" aria-label="Search" className="hidden lg:inline-flex p-2 rounded-full hover:bg-gray-100">
                <SearchIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

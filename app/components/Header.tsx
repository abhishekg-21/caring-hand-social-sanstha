"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import DesktopMenu from "./MainMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] bg-white shadow">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="py-3">
          <Image
            src="/images/logo-smile.png"
            alt="Smile Foundation"
            width={150}
            height={50}
            className="h-[50px] w-auto"
            priority
          />
        </Link>

        {/* Menu */}
        <DesktopMenu />

        {/* Right: Support button & badge */}
        <div className="flex items-center gap-4">
          <Link
            href="/donate"
            className="rounded-md bg-[#7AC143] px-5 py-2 text-white font-semibold hover:bg-[#6EB13C] transition"
          >
            SUPPORT A CAUSE
          </Link>
          <Image
            src="/images/badge-gptw.png"
            alt="Great Place to Work"
            width={50}
            height={90}
            className="h-[80px] w-auto hidden lg:block"
          />
        </div>
      </div>
    </header>
  );
}

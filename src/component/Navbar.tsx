"use client";

import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { hindSiliguri } from "@/app/font";

const navLinks = [
  { label: "হোম", href: "#home" },
  { label: "ফিচারসমূহ", href: "#features" },
  { label: "প্রাইসিং", href: "#pricing" },
  { label: "প্রশ্ন ও উত্তর", href: "#quation&ans" },
];


import logo from "@/assets/images/logo.svg"
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      aria-label="মেইন নেভিগেশন"
      className={`fixed z-[999] left-1/2 top-8  flex w-[calc(100%-32px)] max-w-[34rem] -translate-x-1/2 items-center justify-between rounded-2xl bg-black/90 p-2 shadow-lg backdrop-blur-md ${hindSiliguri.className}`}
    >
      {/* Left: Logo Button */}
      <Link
        href="https://titaswebs.vercel.app/"
        target="_blank"
        title="Projoss Studio Home"
        aria-label="Projoss Studio Home"
        className="flex md:h-11 h-10 md:w-11 w-10 bg-white shrink-0 items-center justify-center rounded-xl  text-white transition-transform duration-300 hover:scale-105"
      >
        {/* <Star size={22} fill="currentColor" /> */}
        <Image src={logo} alt="logo" width={30} height={30}/>
      </Link>

      {/* Center: Navigation Links */}
      <ul className="items-center md:gap-6 gap-2 flex">
        {navLinks.map((link, index) => (
          <li key={link.href}>
            <Link
              href={link.href}
               
              className={`block text-[15px] font-medium transition-all duration-300 ${
                index === 0 ? "text-white" : "text-white/80  hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right: Demo Button */}
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        title="লাইভ স্টোরফ্রন্ট ডেমো"
        aria-label="লাইভ স্টোরফ্রন্ট ডেমো"
        className="flex md:h-11 h-10 md:w-11 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-black transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:text-white"
      >
        <ArrowUpRight size={19} strokeWidth={2.5} />
      </Link>
    </nav>
  );
}

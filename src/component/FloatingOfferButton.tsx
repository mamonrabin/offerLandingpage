"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { hindSiliguri } from "@/app/font";

export default function FloatingOfferButton() {
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowOffer(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showOffer) return null;

  return (
    <div
      className={`visible fixed md:-bottom-8 -bottom-5 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 ${hindSiliguri.className}`}
      aria-label="সীমিত সময়ের অফার"
    >
      {/* Floating urgent tag */}
      <Link
        href="#pricing"
        aria-label="১৫ জনের জন্য অফার"
        className="group relative left-8 top-2 z-50 flex w-fit items-center justify-center gap-1 rounded-full border border-red-200 bg-white px-2 py-1 text-[10px] font-semibold text-red-600 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
        </span>

        <span>মাত্র ১৫ জনের জন্য অফার চলছে</span>
      </Link>

      {/* Main offer button */}
      <Link
        href="#pricing"
        aria-label="অফারটি নিন মাত্র ৳২,৩৯৯"
      >
        <div className="relative">
          <div className="flex min-w-[280px]">
            <span
              className="
                mt-0.5 flex flex-wrap items-center gap-1.5
                rounded-xl
                border border-neutral-200
                bg-[#262626]
                px-4 py-2
                text-sm font-bold text-white
                shadow-[0_4px_15px_rgba(0,0,0,0.25)]
              "
            >
              <span>অফারটি নিন</span>

              <span className="text-xs font-medium text-neutral-500 line-through decoration-primary decoration-2">
                ৳১৫,০০০
              </span>

              <strong className="text-base font-extrabold text-white sm:text-lg">
                ৳২,৩৯৯
              </strong>

              <span className="rounded-full border border-[#2B748A] bg-[#2B748A]/10 px-1 text-[8px] font-bold text-[#2B748A]">
                ৮৪% ছাড়
              </span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
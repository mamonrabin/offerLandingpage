"use client";

import Image from "next/image";
import Link from "next/link";

import { Plus } from "lucide-react";

import { hindSiliguri } from "@/app/font";
import fireGig from "@/assets/images/fire-transparent-opt.gif";
import { useEffect, useRef } from "react";
import FanGallery from "./FanGallery";

export default function Hero() {
  const eyeBoxRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeBoxRef.current) return;

      const pupils =
        eyeBoxRef.current.querySelectorAll<HTMLElement>(".eye-pupil");

      pupils.forEach((pupil) => {
        const socket = pupil.parentElement;

        if (!socket) return;

        const rect = socket.getBoundingClientRect();

        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);

        const distance = Math.min(
          4,
          Math.hypot(e.clientX - eyeX, e.clientY - eyeY) / 50,
        );

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        pupil.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="scroll-mt-24 relative overflow-hidden z-50 bg-[#F9F9FB] px-4 md:pt-35 pt-30">
      {/* Background glow */}
      {/* Hero Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main warm background */}
        <div className="absolute inset-0" />

        {/* Top orange glow */}
        <div
          className="
      absolute
      -left-32
      -top-40
      h-[500px]
      w-[500px]
      rounded-full
      
      blur-[100px]
    "
        />

        {/* Center orange glow */}
        <div
          className="
      absolute
      left-1/2
      top-0
      h-[400px]
      w-[700px]
      -translate-x-1/2
      rounded-full
      
      blur-[120px]
    "
        />

        {/* Right glow */}
        <div
          className="
      absolute
      -right-40
      top-20
      h-[450px]
      w-[450px]
      rounded-full
     
      blur-[100px]
    "
        />

        {/* Bottom subtle glow */}
        <div
          className="
      absolute
      bottom-[-250px]
      left-1/2
      h-[500px]
      w-[800px]
      -translate-x-1/2
      rounded-full
      blur-[120px]
    "
        />

        {/* Subtle grid */}
        <div
          className="
      absolute
      inset-0
      opacity-[0.035]
      [background-image:linear-gradient(#111_1px,transparent_1px),linear-gradient(90deg,#111_1px,transparent_1px)]
      [background-size:40px_40px]
    "
        />
      </div>

      <div className="relative z-10 ">
        {/* Badge */}
        <div className="md:mb-6 mb-4 flex justify-center mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#262626]/20  bg-white px-4 py-2 text-xs font-semibold text-[#262626] sm:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00B67A] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00B67A]" />
            </span>
            100+ Stores Designed with this Script
          </div>
        </div>

        {/* Content */}
        <div
          className={`mx-auto max-w-5xl text-center flex items-center justify-center flex-col ${hindSiliguri.className}`}
        >
          {/* Heading */}
          <h1 className="md:text-5xl md:w-[720px] text-4xl font-extrabold md:leading-14 leading-11 md:tracking-tight text-neutral-950">
            আপনার ই-কমার্স{" "}
            <span className="inline-flex translate-y-1 items-center">
              <Image
                src={fireGig}
                alt="Fire animation"
                width={46}
                height={46}
                priority
                unoptimized
                className="h-10 w-10 sm:h-12 sm:w-12 hover:scale-140 cursor-pointer duration-300"
              />
            </span>{" "}
            ব্যবসাকে দিন  <span className="text-primary">সুপারফাস্ট</span>
            {/* Laravel Badge */}
            <span
              className="mx-4 inline-flex translate-y-1 animate-float items-center justify-center"
              title="Laravel 11"
              aria-label="Laravel"
            >
              <svg
                viewBox="0 0 128 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-12 h-8 md:w-12 w-8"
              >
                <path
                  fill="#087096"
                  d="M26.027.137C25.824.215 20.085 3.484 13.281 7.395 5.035 12.136.801 14.633.574 14.867c-.18.203-.383.555-.446.777-.171.574-.183 84.703-.011 85.309.062.234.265.578.449.769.445.469 49.672 28.774 50.269 28.91.278.067.59.055.899-.031.672-.168 49.769-28.41 50.207-28.871.18-.199.383-.543.449-.777.086-.278.117-4.676.117-13.938V73.48l11.969-6.875c11.285-6.488 11.977-6.894 12.266-7.34l.297-.48V44.207c0-15.872.031-14.977-.598-15.551-.168-.149-5.918-3.504-12.789-7.461l-12.481-7.18h-1.386l-12.211 7.012c-6.723 3.867-12.438 7.172-12.715 7.351-.277.184-.609.524-.746.77l-.246.426-.055 13.734-.051 13.739-10.082 5.809c-5.547 3.187-10.164 5.828-10.262 5.851-.18.051-.191-1.258-.191-26.504V15.633l-.266-.457c-.332-.555 1.16.332-13.824-8.281C26.57-.332 26.871-.18 26.027.137ZM37.578 10.656c5.258 3.016 9.559 5.512 9.559 5.543 0 .031-4.609 2.695-10.242 5.933l-10.25 5.883-10.231-5.883c-5.621-3.238-10.227-5.902-10.227-5.933 0-.031 4.598-2.695 10.219-5.926l10.207-5.871.703.383c.394.215 5.016 2.855 10.262 5.871ZM110.73 24.191c5.535 3.188 10.113 5.821 10.156 5.864.117.105-20.183 11.773-20.461 11.761-.277-.008-20.328-11.57-20.32-11.711.012-.16 20.184-11.766 20.387-11.734.093.023 4.703 2.644 10.238 5.82ZM14.828 25.875l9.758 5.617.055 27.812.051 27.817.238.375c.125.199.36.468.531.593.16.118 5.59 3.211 12.063 6.864l11.758 6.64v11.766c0 6.457-.043 11.754-.098 11.754-.043 0-10.207-5.817-22.582-12.938L4.105 99.238l-.031-39.773-.02-39.762.5.277c.289.153 4.906 2.805 10.274 5.895ZM49.281 45.453v25.629l-.395.257c-.535.34-20.074 11.571-20.14 11.571-.032 0-.055-11.571-.055-25.715l.012-25.703 10.207-5.871c5.613-3.231 10.242-5.852 10.297-5.832.039.023.074 11.574.074 25.664ZM88.222 39.558l10.231 5.883v11.66c0 11.063-.012 11.656-.18 11.594-.109-.043-4.738-2.695-10.293-5.895l-10.113-5.808V45.336c0-6.418.031-11.66.062-11.66.043 0 4.672 2.644 10.293 5.882ZM123.094 45.262c0 6.383-.044 11.648-.087 11.699-.074.117-20.308 11.777-20.437 11.777-.032 0-.063-5.242-.063-11.66V45.422l10.207-5.875c5.621-3.227 10.25-5.871 10.293-5.871.055.054.087 5.265.087 11.586ZM86.23 66.469c8.605 4.953 10.09 5.84 9.941 5.957-.097.063-3.359 1.938-7.242 4.156-3.883 2.215-13.941 7.949-22.359 12.746l-15.297 8.727-.488-.266c-2.922-1.598-19.875-11.242-19.875-11.316-.008-.16 44.855-25.941 45.035-25.875.086.031 4.715 2.672 10.285 5.871ZM98.434 87.559l-.035 11.679-22.485 12.938c-12.371 7.121-22.539 12.937-22.59 12.937-.055 0-.098-4.754-.098-11.754v-11.766l22.539-12.851c12.383-7.067 22.559-12.852 22.613-12.864.043 0 .063 5.254.056 11.681Z"
                />
              </svg>
            </span>
            <span className="text-neutral-950">গতি ও স্কেলিং</span>
          </h1>

          {/* Description */}
          <p
            className={`mx-auto mt-6 max-w-3xl text-md text-neutral-600 ${hindSiliguri.className}`}
          >
            নিয়ে নিন Laravel ও React দিয়ে তৈরি সুপারফাস্ট ই-কমার্স ওয়েবসাইট!
            <br className="hidden sm:block" />
            ওয়ান-টাইম পেমেন্টে ফ্রড চেকার, ফেক অর্ডার ব্লকার, সার্ভার-সাইড
            ট্র্যাকিং, অটোমেশন সহ আজীবন লাইসেন্স এবং আনলিমিটেড ডোমেন ব্যবহারের
            পূর্ণ স্বাধীনতা।
          </p>

          {/* Buttons */}
          <div className="mt-8 flex  items-center justify-center md:gap-3 gap-2 ">
            <Link
              href="#pricing"
              className="group inline-flex h-12 items-center md:gap-3 gap-2 rounded-xl bg-primary px-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl"
            >
              <span>সোর্স কোড কিনুন</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 transition-transform duration-300 group-hover:rotate-90">
                <Plus size={15} strokeWidth={3} />
              </span>
            </Link>

            <Link
              href="#demo-credentials"
              className="group inline-flex h-12 items-center md:gap-4 gap-2 rounded-xl border border-neutral-300 bg-[#18181B] md:px-4 px-3 md:text-base text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span>লাইভ ডেমো দেখুন</span>

              <span
                ref={eyeBoxRef}
                className="eye-follow-box flex items-center gap-1 bg-white/10 px-1 py-1 rounded-lg"
                aria-hidden="true"
              >
                {/* Left Eye */}
                <span className="eye-socket">
                  <span className="eye-pupil">
                    <span className="eye-glint" />
                  </span>
                </span>

                {/* Right Eye */}
                <span className="eye-socket">
                  <span className="eye-pupil">
                    <span className="eye-glint" />
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Fan Gallery */}
        <FanGallery />
      </div>
    </section>
  );
}

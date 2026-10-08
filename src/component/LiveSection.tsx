import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import { hindSiliguri } from "@/app/font";

import thumble from "@/assets/images/youtube-walkthrough-thumb.webp"

export default function LiveSection() {
  return (
    <section className={`px-4 pb-16 ${hindSiliguri.className}`}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-9 text-center">
          <div className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            লাইভ ভিডিও ওয়াকথ্রু
          </div>

          <h2 className="mx-auto max-w-3xl text-[32px] sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-neutral-950 ">
            চোখের পলকে দেখুন{" "}
            <span className="text-primary">পুরো সিস্টেম</span>{" "}
            কীভাবে কাজ করে
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
            কীভাবে মাত্র ৫ সেকেন্ডে গ্রাহক অর্ডার সম্পন্ন করে এবং অ্যাডমিন
            প্যানেল থেকে এক ক্লিকে স্টিডফাস্ট ও পাঠাও কুরিয়ারে পার্সেল বুকিং
            হয় তা সরাসরি দেখুন।
          </p>
        </div>

        {/* Video */}
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#262626] p-1.5 shadow-sm sm:rounded-3xl sm:p-2">
          <div
            className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-neutral-900 sm:rounded-2xl"
            role="button"
            tabIndex={0}
            aria-label="Projoss Video Demonstration Walkthrough চালু করুন"
          >
            <Image
              src={thumble}
              alt="Projoss Video Demonstration Walkthrough"
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/20">
            <div className="relative flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
  {/* Flash ring */}
  <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />

  {/* Button */}
  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-xl sm:h-20 sm:w-20">
    <Play
      size={28}
      fill="currentColor"
      strokeWidth={0}
      className="ml-1 sm:h-8 sm:w-8"
    />
  </div>
</div>
            </div>
          </div>
        </div>

        {/* Setup Guide */}
        <div className="mt-7 flex justify-center">
          <Link
            href="https://youtu.be/tr6TX4G7bsA?si=pPtALbIOLWH8lDGx&t=697"
            target="_blank"
            rel="noopener noreferrer"
            title="কীভাবে ওয়েবসাইটটি নিজের ডোমেন হোস্টিং এ সেটআপ করবেন"
            className="group inline-flex max-w-full items-center md:gap-3 gap-2 rounded-xl border border-neutral-200 bg-[#262626] md:px-4 px-2 md:py-3 py-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md sm:gap-4 sm:px-5"
          >
            {/* YouTube Icon */}
            <span className="flex md:h-9 h-6 md:w-9 w-6 shrink-0 items-center justify-center rounded-lg bg-primaty/10 text-primary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </span>

            {/* Text */}
            <span className="md:text-base text-xs font-semibold text-white ">
              কীভাবে ওয়েবসাইটটি নিজের ডোমেন হোস্টিং এ সেটআপ করবেন
            </span>

            {/* Badge */}
            <span className="hidden shrink-0 rounded-full bg-[#2B748A]/10 px-3 py-2 text-[10px] border font-semibold text-primary sm:inline-flex">
              ভিডিও গাইড
            </span>

            {/* Arrow */}
            <span className="flex shrink-0 items-center text-neutral-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
              <ArrowRight size={17} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
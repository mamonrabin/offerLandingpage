"use client";
import { useState } from "react";
import {
  Zap,
  Mail,
  Send,
  LayoutDashboard,
  Truck,
  ChevronDown,
} from "lucide-react";

const killerFeatures = [
  {
    icon: Zap,
    badge: "অর্ডার ডিফেন্স",
    title: "ফেক অর্ডার গার্ড ও ফ্রড প্রিভেনশন",
    description:
      "সন্দেহজনক আইপি, ডিভাইস হ্যাশ ও ফোন নম্বর ব্লকলিস্ট এবং কুরিয়ার হিস্ট্রি অ্যানালাইসিস দিয়ে ক্যাশ অন ডেলিভারি রিটার্ন রোধ করুন।",
  },
  {
    icon: Mail,
    badge: "হারানো সেলস রিকভারি",
    title: "অ্যাবান্ডনড কার্ট রিকভারি সিআরএম",
    description:
      "ড্রপআউট কাস্টমার অটো-ক্যাপচার, ১-ক্লিকে অর্ডার কনভার্ট এবং হোয়াটসঅ্যাপ ডিসকাউন্ট অফার টেমপ্লেট দিয়ে হারানো সেলস ফিরিয়ে আনুন।",
  },
  {
    icon: LayoutDashboard,
    badge: "অ্যাড-ব্লকার বাইপাস",
    title: "Meta CAPI ও মাল্টি-চ্যানেল ট্র্যাকিং",
    description:
      "অ্যাড-ব্লকার ও iOS বাইপাস করে ১০০% অ্যাকুরেট ডেটার জন্য Meta Conversions API (CAPI) সার্ভার-সাইড ট্র্যাকিং, GTM, GA4 ও TikTok Pixel রেডি।",
  },
  {
    icon: Truck,
    badge: "লাইভ কাস্টমার সাপোর্ট",
    title: "ফ্লোটিং চ্যাট ও হেল্পলাইন উইজেট",
    description:
      "কোনো প্লাগইন ছাড়াই স্টোরের নিচে WhatsApp চ্যাট, ডিরেক্ট ফোন কল ও মেসেঞ্জার ফ্লোটিং সাপোর্ট উইজেট দিয়ে গ্রাহকের সাথে সরাসরি কানেক্ট থাকুন।",
  },
  {
    icon: Truck,
    badge: "ডিসকাউন্ট প্রমোশন",
    title: "প্রমোশনাল পপআপ ও নোটিফিকেশন ইঞ্জিন",
    description:
      "কাস্টম ব্যানার, টাইমার ও ফ্রিকোয়েন্সি কন্ট্রোল সহ আকর্ষণীয় ডিসকাউন্ট পপআপ দিয়ে স্টোরে আসার সাথে সাথে কাস্টমারকে স্পেশাল অফার দিন।",
  },
  {
    icon: Truck,
    badge: "স্মার্ট ইনভয়েস",
    title: "বাল্ক ও থার্মাল পিওএস ইনভয়েস প্রিন্ট",
    description:
      "অ্যাডমিন থেকে মাত্র ১-ক্লিকে একাধিক অর্ডারের বাল্ক ইনভয়েস এবং কুরিয়ারের জন্য বারকোড সহ স্ট্যান্ডার্ড A4 অথবা থার্মাল POS স্লিপ প্রিন্ট করুন।",
  },
];

export default function KillerFeatures() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.6fr_1fr]">
        {/* ================= BOX 01 ================= */}
        <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="flex items-center justify-center">
            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              {/* Icon */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Zap size={21} strokeWidth={2.2} />
              </div>

              {/* Badges */}
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-primary/10 bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
                  হাই-কনভার্সন চেকআউট
                </span>

                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[10px] font-semibold text-neutral-500">
                  জিরো পেজ রিলোড
                </span>
              </div>

              {/* Title */}
              <h3 className="max-w-xl text-xl font-bold leading-snug text-neutral-950 sm:text-2xl lg:text-3xl">
                ১-ক্লিক COD কুইক অর্ডার মোডাল
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
                জিরো পেজ রিলোডে ইনস্ট্যান্ট পপআপ চেকআউট, লাইভ প্রাইস ক্যালকুলেশন
                ও অটো-ভ্যালিডেশন সহ মাত্র ৫ সেকেন্ডে দ্রুততম অর্ডার প্লেসমেন্ট।
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOX 02 ================= */}
        <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
          <div className="flex h-full flex-col">
            {/* Icon */}
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail size={21} strokeWidth={2.2} />
            </div>

            {/* Badges */}
            <div className="mb-2 flex flex-wrap gap-2">
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
                ডায়নামিক ইঞ্জিন
              </span>

              <span className="rounded-full border border-[#FF4D00]/20 bg-[#FF4D00]/10 px-3 py-1 text-[10px] font-semibold text-[#FF4D00]">
                টেলিগ্রাম অ্যালার্ট
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold leading-snug text-neutral-950">
              ডায়নামিক ইমেইল এসএমটিপি ও নোটিফিকেশন
            </h3>

            {/* Description */}
            <p className="mt-1 text-sm leading-6 text-neutral-500">
              কোনো .env কোডিং ছাড়াই সরাসরি অ্যাডমিন প্যানেল থেকে যেকোনো SMTP
              কনফিগারেশন, ১-ক্লিক টেস্ট সেন্ডার ও স্বয়ংক্রিয় কাস্টমার ইনভয়েস
              ডেলিভারি।
            </p>

            {/* Telegram */}
            <div className="mt-auto pt-2">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0088CC] text-white">
                    <Send size={15} />
                  </div>

                  <span className="text-xs font-bold text-sky-700">
                    Telegram App Order Notification
                  </span>

                  <span
                    className="ml-auto h-2.5 w-2.5 animate-pulse rounded-full bg-green-500"
                    title="ইনস্ট্যান্ট নোটিফিকেশন"
                  />
                </div>

                <p className="mt-2 text-xs leading-6 text-neutral-600">
                  কেউ ওয়েবসাইট থেকে অর্ডার করলে সাথে সাথেই আপনি টেলিগ্রাম অ্যাপে
                  ইনস্ট্যান্ট সাউন্ড অ্যালার্ট ও সম্পূর্ণ অর্ডার নোটিফিকেশন পেয়ে
                  যাবেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.6fr]">
        {/* ================= BOX 01 ================= */}
        <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="flex items-center justify-center">
            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              {/* Icon */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <LayoutDashboard size={21} strokeWidth={2.2} />
              </div>

              {/* Badges */}
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[10px] font-semibold text-orange-600">
                  ফানেল বিল্ডার
                </span>

                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[10px] font-semibold text-neutral-500">
                  Unlimited Create
                </span>
              </div>

              {/* Title */}
              <h3 className="max-w-xl text-xl font-bold leading-snug text-neutral-950">
                আনলিমিটেড ল্যান্ডিং পেজ তৈরি করা
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-xl text-sm  text-neutral-500">
                যেকোনো প্রোডাক্টের জন্য Unlimited Landing Page Create করার পূর্ণ
                স্বাধীনতা। ৩টি প্রি-বিল্ট রেডিমেড ল্যান্ডিং পেজ ডিজাইন —
                Campaign Pro (কাউন্টডাউন ও ভিডিও হিরো), Projoss X1 (গ্যাজেট ও
                কিডস) এবং Projoss X2 (ফ্যাশন ও সাইজ গাইড)—১-ক্লিকে রেডি
                হাই-কনভার্টিং ফানেল।
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOX 02 ================= */}
        <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
          <div className="flex h-full flex-col">
            {/* Icon */}
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Truck size={21} strokeWidth={2.2} />
            </div>

            {/* Badges */}
            <div className="mb-2 flex flex-wrap gap-2">
              <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[10px] font-semibold text-orange-600">
                বিডি লজিস্টিকস এপিআই
              </span>

              <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[10px] font-semibold text-sky-600">
                লাইভ ওয়েবহুক সিঙ্ক
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl mt-2 font-bold leading-snug text-neutral-950">
              ৩টি অটোমেটেড কুরিয়ার ইন্টিগ্রেশন ও ওয়েবহুক
            </h3>

            {/* Description */}
            <p className="mt-1 text-sm leading-6 text-neutral-500">
              Steadfast, Pathao ও RedX-এ ১-ক্লিকে বাল্ক পার্সেল বুকিং, ট্র্যাকিং
              কোড জেনারেশন এবং লাইভ ওয়েবহুকের মাধ্যমে স্বয়ংক্রিয় ডেলিভারি
              স্ট্যাটাস আপডেট।
            </p>
          </div>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 gap-4 overflow-hidden transition-all duration-700 ease-in-out md:grid-cols-3 ${
          showMore ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {killerFeatures.map((feature, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-3xl border border-neutral-200 hover:border-primary/40 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
          >
            <div className="flex h-full flex-col">
              {/* Icon */}
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon size={21} strokeWidth={2.2} />
              </div>

              {/* Badges */}
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
                  {feature.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-md mt-2 font-bold leading-snug text-neutral-950">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-sm leading-6 text-neutral-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= VIEW MORE BUTTON ================= */}
      <div className={`flex justify-center   ${showMore ? "-mt-1" : "-mt-4"}`}>
        <button
          type="button"
          onClick={() => setShowMore((prev) => !prev)}
          className={`group text-sm font-bold bg-white inline-flex 
          items-center gap-2 rounded-full px-6 py-3 text-[#262626] hover:text-primary 
          cursor-pointer transition-all duration-300 border hover:shadow-md
          border-neutral-200 hover:border-primary ${showMore ? "text-primary border-primary " : ""}`}
        >
          <span>
            {showMore ? "ফিচারসমূহ সংক্ষেপ করুন" : "আরও ৭টি কিলার ফিচার দেখুন"}
          </span>

          <span
            className={`transition-transform p-1 rounded-full bg-primary/10 text-primary duration-300 ${
              showMore ? "rotate-180" : ""
            }`}
          >
            <ChevronDown size={14} />
          </span>
        </button>
      </div>
    </div>
  );
}

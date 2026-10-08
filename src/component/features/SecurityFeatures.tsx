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
    badge: "হাই-স্পিড ইউএক্স",
    title: "ব্লেজিং ফাস্ট SPA আর্কিটেকচার",
    description:
      "Inertia.js + React 19 দিয়ে নির্মিত, পেজ রিলোড ছাড়াই মোবাইল অ্যাপের মতো মসৃণ ও সুপারফাস্ট শপিং অভিজ্ঞতা।",
  },
  {
    icon: Zap,
    badge: "মোবাইল-ফার্স্ট ডিজাইন",
    title: "মোবাইল-ফার্স্ট ডিজাইন ও টাচ অপ্টিমাইজড",
    description:
      "রেসপনসিভ বটম শিট, স্মুথ টাচ জেসচার, ফ্লুইড বটম নেভিগেশন ও iOS টাইপিং অপ্টিমাইজড ভিউ সহ গ্রাহকদের জন্য নিখুঁত লেআউট।",
  },
  {
    icon: Zap,
    badge: "স্মার্ট ফাইন্ডিং",
    title: "প্রোডাক্ট ফিল্টারিং ও লাইভ সার্চ",
    description:
      "ক্যাটাগরি, ব্র্যান্ড, প্রাইস রেঞ্জ স্লাইডার এবং নির্দিষ্ট অ্যাট্রিবিউট অনুযায়ী ইনস্ট্যান্ট মিলিসেকেন্ড ফিল্টারিং।",
  },
  {
    icon: Zap,
    badge: "সোশ্যাল প্রুফ",
    title: "ব্র্যান্ডস মারকুই স্লাইডার",
    description:
      "হোমপেজে বিশ্বস্ত পার্টনার ও ব্র্যান্ড লোগোগুলোর আই-ক্যাচিং অটো-স্ক্রলিং ইনফিনিট অ্যানিমেশন যা কাস্টমার ট্রাস্ট বাড়ায়।",
  },
  {
    icon: Zap,
    badge: "টপ অ্যানাউন্সমেন্ট",
    title: "টপ হেডার প্রমোশনাল বার",
    description:
      "সাইটের একদম উপরে ফ্রি ডেলিভারি বা আকর্ষণীয় অফার নোটিশ লিংক সহকারে প্রদর্শনের ব্যবস্থা।",
  },
  {
    icon: Zap,
    badge: "কনভার্সন অপ্টিমাইজার",
    title: "ডেলিভারি এস্টিমেশন ব্যাজ (ETA)",
    description:
      "প্রোডাক্ট পেজে গ্রাহকের জন্য সরাসরি সম্ভাব্য ডেলিভারির সময় (যেমন: ২-৩ দিনের মধ্যে ডেলিভারি) ডিসপ্লে।",
  },
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

export default function SecurityFeatures() {
  const [showMore, setShowMore] = useState(false);

  const visibleFeatures = showMore
    ? killerFeatures
    : killerFeatures.slice(0, 6);

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {visibleFeatures.map((feature, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2B748A]/40 hover:shadow-xl sm:p-8"
          >
            <div className="flex h-full flex-col">
              {/* Icon */}
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon size={21} strokeWidth={2.2} />
              </div>

              {/* Badge */}
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
                  {feature.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-2 text-md font-bold leading-snug text-neutral-950">
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

      {/* View More Button */}
      <div
        className={`flex justify-center ${
          showMore ? "-mt-1" : "-mt-2"
        }`}
      >
        <button
          type="button"
          onClick={() => setShowMore((prev) => !prev)}
          className={`group inline-flex cursor-pointer items-center gap-2 rounded-full border bg-white px-6 py-3 text-sm font-bold transition-all duration-300 hover:shadow-md ${
            showMore
              ? "border-primary text-primary"
              : "border-neutral-200 text-[#262626] hover:border-primary hover:text-primary"
          }`}
        >
          <span>
            {showMore
              ? "ফিচারসমূহ সংক্ষেপ করুন"
              : "আরও ৬টি কিলার ফিচার দেখুন"}
          </span>

          <span
            className={`rounded-full bg-primary/10 p-1 text-primary transition-transform duration-300 ${
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

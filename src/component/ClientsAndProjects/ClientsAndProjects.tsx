"use client";

import { hindSiliguri } from "@/app/font";
import {
  ArrowUpRight,
  BarChart3,
  FileText,
  Monitor,
  Shield,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import DemoLink from "./DemoLink";
import DemoProject from "./DemoProject";



const projects = [
  {
    icon: Monitor,
    title: "ওয়েবসাইট ডিজাইন ডেমো প্রিভিউ ১",
    badge: "Tech & Gadgets Edition",
    type: "লাইভ ডেমো ইন্টারফেস",
    image: "/assets/images/storefront-demo-preview-1.webp",
    alt: "ওয়েবসাইট ডিজাইন ডেমো প্রিভিউ - টেক ও গ্যাজেট এডিশন",
    layout: "equal",
  },
  {
    icon: Sparkles,
    title: "ওয়েবসাইট ডিজাইন ডেমো প্রিভিউ ২",
    badge: "Organic & Honey Edition",
    type: "মাল্টি-ক্যাটাগরি শপিং",
    image: "/assets/images/storefront-demo-preview-2.webp",
    alt: "ওয়েবসাইট ডিজাইন ডেমো প্রিভিউ - অর্গানিক ও লাইফস্টাইল এডিশন",
    layout: "equal",
  },
  {
    icon: Shield,
    title: "কুরিয়ার হিস্ট্রি ও ফ্রড শিল্ড",
    badge: "Fake Order Guard",
    type: "Steadfast ও Pathao হিস্ট্রি",
    image: "/assets/images/fake-order-guard-courier-history.webp",
    alt: "কুরিয়ার ডেলিভারি হিস্ট্রি চেকার ও ফেক অর্ডার গার্ড",
    layout: "wide",
  },
  {
    icon: Zap,
    title: "১-ক্লিক সিওডি ফর্ম",
    badge: "",
    type: "৮ সেকেন্ডে কনভার্সন",
    image: "/assets/images/storefront-quick-order.webp",
    alt: "1-Click COD Quick Order Form",
    layout: "narrow",
  },
  {
    icon: BarChart3,
    title: "অ্যাডমিন অ্যানালিটিক্স",
    badge: "লাইভ রেভিনিউ ও অর্ডার ইনসাইট",
    type: "রিয়েল-টাইম ড্যাশবোর্ড",
    image: "/assets/images/admin-analytics-clean.webp",
    alt: "Real-time Revenue and Order Analytics - Full Admin Dashboard",
    layout: "wide",
  },
  {
    icon: Target,
    title: "পিক্সেল ও মার্কেটিং ট্র্যাকিং",
    badge: "Meta CAPI • GA4 • TikTok",
    type: "Facebook, Google ও TikTok পিক্সেল",
    image: "/assets/images/marketing-pixel-tracking.webp",
    alt: "পিক্সেল ও মার্কেটিং ট্র্যাকিং কনফিগারেশন ড্যাশবোর্ড",
    layout: "narrow",
  },
  {
    icon: FileText,
    title: "অর্ডার ও শিপিং স্লিপ",
    badge: "স্মার্ট ফ্রড চেকার",
    type: "বাল্ক বুকিং ও অটো স্লিপ প্রিন্ট",
    image: "/assets/images/admin-orders.webp",
    alt: "Automated Shipping Slips Management",
    layout: "equal",
  },
  {
    icon: Monitor,
    title: "মডার্ন স্টোরফ্রন্ট হোমপেজ",
    badge: "Laravel 11 + React 19",
    type: "ডি২সি ব্র্যান্ড শপিং ইন্টারফেস",
    image: "/assets/images/storefront-home.webp",
    alt: "মডার্ন ডি২সি ইকমার্স স্টোরফ্রন্ট হোমপেজ ডিজাইন",
    layout: "equal",
  },
];



export default function ClientsAndProjects() {
  return (
    <section className={`${hindSiliguri.className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="grid items-end md:gap-8 gap-3 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
              ক্লায়েন্টস ও পার্টনার্স
            </div>

            <h2 className="md:text-5xl text-3xl font-black leading-tight tracking-tight text-neutral-950">
              বাংলাদেশের সেরা ব্র্যান্ডসমূহের
              <br />
              আস্থার প্রতীক{" "}
              <span className="text-primary">প্রোজস ই-কমার্স</span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
              দেশজুড়ে ১৫০+ এর বেশি উদ্যোক্তা সফলভাবে প্রতিদিন হাজার হাজার
              অর্ডার প্রসেস করছেন আমাদের এই আধুনিক সোর্স কোড ও সিস্টেমে।
            </p>
          </div>
        </div>

        {/* ================= CLIENTS ================= */}
        <DemoLink/>

        {/* ================= PROJECTS ================= */}
        <DemoProject />
      </div>
    </section>
  );
}
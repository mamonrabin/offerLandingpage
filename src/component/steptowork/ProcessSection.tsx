"use client";

import { hindSiliguri } from "@/app/font";
import {
  Check,
  Cloud,
  Database,
  Download,
  Globe,
  HardDrive,
  Play,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingCart,
  UserCheck,
  Zap,
  DollarSign,
} from "lucide-react";

const processSteps = [
  {
    step: "ধাপ ০১",
    title: "ইনস্ট্যান্ট ড্রাইভ ডাউনলোড",
    description:
      "পারচেজ সম্পন্ন করার সাথে সাথেই পাবেন ফুল সোর্স কোডের গুগল ড্রাইভ সুরক্ষিত লিংক। ফাইলটি ডাউনলোড করে সম্পূর্ণ ক্লিন আনক্রিপ্টেড কোডবেস নিজের নিয়ন্ত্রণে নিন।",
    items: [
      {
        icon: Download,
        text: "গুগল ড্রাইভ ফুল সোর্স কোড (ZIP)",
      },
      {
        icon: Play,
        text: "স্টেপ-বাই-স্টেপ ভিডিও সেটআপ গাইড",
      },
      {
        icon: Database,
        text: "রেডি ডাটাবেস স্কিমা ও ডেমো সিডার",
      },
      {
        icon: Zap,
        text: "১০০% আনক্রিপ্টেড ফুল কোডের",
        live: true,
      },
    ],
  },

  {
    step: "ধাপ ০২",
    title: "ডোমেইন ও হোস্টিংয়ে সেটআপ",
    description:
      "আপনার নিজস্ব cPanel শেয়ার্ড হোস্টিং বা যেকোনো ক্লাউড VPS-এ মাত্র ৫ মিনিটে কোড আপলোড করে কাস্টম ডোমেইন ও ফ্রি SSL-এ স্টোর লাইভ করুন।",
    items: [
      {
        icon: Globe,
        text: "কাস্টম ডোমেইন ও ফ্রি SSL কানেক্ট",
      },
      {
        icon: Server,
        text: "cPanel / LiteSpeed / VPS রেডি",
      },
      {
        icon: ShoppingCart,
        text: "কুরিয়ার ও পেমেন্ট নম্বর ১-ক্লিক",
      },
      {
        icon: Zap,
        text: "৫ মিনিটে নিজস্ব হোস্টিংয়ে সাইট",
        live: true,
      },
    ],
  },

  {
    step: "ধাপ ০৩",
    title: "আজীবন ব্যবহার ও সেলস",
    description:
      "কোনো মাসিক সাবস্ক্রিপশন বা অতিরিক্ত চার্জ ছাড়াই আপনার হোস্টিংয়ে আজীবন স্টোর চালান এবং প্রথম দিন থেকেই আনলিমিটেড সেলস শুরু করুন।",
    items: [
      {
        icon: ShieldCheck,
        text: "নো মান্থলি ফি — আজীবন লাইসেন্স",
      },
      {
        icon: UserCheck,
        text: "আনলিমিটেড প্রোডাক্ট ও ট্রাফিক",
      },
      {
        icon: DollarSign,
        text: "১০০% লাভ আপনার নিজের পকেটে",
      },
      {
        icon: Zap,
        text: "স্টোর লাইভ এবং সেলস শুরু!",
        live: true,
      },
    ],
  },
];

export default function ProcessSection() {
  return (
    <section className={`mt-4 ${hindSiliguri.className}`}>
      <div className="">
        {/* Grid */}
        <div className="grid items-start gap-3 lg:grid-cols-3">
          {processSteps.map((process) => (
            <div
              key={process.step}
              className="h-fit self-start overflow-hidden"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                {/* Top */}
                <div>
                  {/* Step */}
                  <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">
                    {process.step}
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
                    {process.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-neutral-500">
                    {process.description}
                  </p>
                </div>

                {/* Illustration */}
                <div className="mt-7 rounded-2xl border border-neutral-200 bg-[#F8F9FA] p-3 sm:p-4">
                  <div className="space-y-2">
                    {process.items.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={index}
                          className={`flex border  items-center gap-3 rounded-xl  p-3 cursor-pointer ${
                            item.live
                              ? "border-primary/50 bg-primary/5 text-primary text-sm"
                              : "border-neutral-200 hover:border-primary bg-white  text-[#262626] text-xs"
                          }`}
                        >
                          {/* Icon */}
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded ${
                              item.live
                                ? "text-primary"
                                : "text-primary bg-primary/10 "
                            }`}
                          >
                            <Icon size={14} strokeWidth={2.4} />
                          </span>

                          {/* Text */}
                          <span
                            className={`flex-1 leading-5 font-bold ${
                              item.live
                                ? ""
                                : ""
                            }`}
                          >
                            {item.text}
                          </span>

                          {/* Right */}
                          {item.live ? (
                            <span className="relative flex h-2.5 w-2.5 shrink-0">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                            </span>
                          ) : (
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Check size={13} strokeWidth={3} />
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
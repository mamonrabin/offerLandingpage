"use client";

import { useState } from "react";
import {
  Zap,
  Smartphone,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { hindSiliguri } from "@/app/font";
import KillerFeatures from "./killerFeatures";
import CustomerInterface from "./CustomerInterface";
import AdminFeatures from "./AdminFeatures";
import SecurityFeatures from "./SecurityFeatures";

const tabs = [
  {
    id: "killer",
    label: "শীর্ষ কিলার ফিচার",
    count: "১১টি",
    icon: Zap,
  },
  {
    id: "storefront",
    label: "কাস্টমার ইন্টারফেস",
    count: "১৩টি",
    icon: Smartphone,
  },
  {
    id: "admin",
    label: "অ্যাডমিন ড্যাশবোর্ড",
    count: "১৩টি",
    icon: Settings,
  },
  {
    id: "security",
    label: "এন্টারপ্রাইজ সিকিউরিটি",
    count: "১০টি",
    icon: ShieldCheck,
  },
];

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState("killer");

  return (
    <div className={`md:mx-auto mx-3 mt-10  ${hindSiliguri.className}`}>
     <div
  role="tablist"
  className="mx-auto grid max-w-4xl grid-cols-2 md:gap-2 gap-1 rounded-2xl border border-neutral-200 bg-[#F1F3F5] md:p-2 p-1 sm:flex sm:flex-wrap"
>
  {tabs.map((tab) => {
    const Icon = tab.icon;
    const isActive = activeTab === tab.id;

    return (
      <button
        key={tab.id}
        type="button"
        role="tab"
        aria-selected={isActive}
        onClick={() => setActiveTab(tab.id)}
        className={`group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl md:px-4 px-2 py-3 md:text-sm text-xs font-bold transition-all duration-300 ${
          isActive
            ? "bg-white text-[#262626] shadow-sm ring-1 ring-neutral-200"
            : "text-neutral-700 hover:bg-white hover:text-neutral-900"
        }`}
      >
        <span
          className={`flex items-center justify-center rounded-lg text-primary transition-colors ${
            isActive
              ? "bg-primary/10"
              : "bg-white text-neutral-700 group-hover:text-neutral-700"
          }`}
        >
          <Icon size={18} strokeWidth={2.2} />
        </span>

        <span>{tab.label}</span>

        <span
          className={`rounded-full md:px-2 px-1 py-1 text-[10px] font-bold ${
            isActive
              ? "bg-primary text-white"
              : "bg-neutral-100 text-neutral-700"
          }`}
        >
          {tab.count}
        </span>
      </button>
    );
  })}
</div>
      <div className="mt-8 max-w-6xl mx-auto bg-[#ECECEC] rounded-4xl p-4 border border-neutral-300">
        {activeTab === "killer" && <KillerFeatures />}

        {activeTab === "storefront" && <CustomerInterface/>}

        {activeTab === "admin" && <AdminFeatures />}

        {activeTab === "security" && <SecurityFeatures />}
      </div>
    </div>
  );
}
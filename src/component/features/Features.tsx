import { hindSiliguri } from "@/app/font";
import React from "react";
import FeaturesTabs from "./FeaturesTabs";


const Features = () => {
  return (
    <div id="features" className="scroll-mt-30 pb-20">
      <div
        className={`mx-auto max-w-3xl px-4  text-center ${hindSiliguri.className}`}
      >
        <div className="mb-5 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
          শীর্ষ ফিচারসমূহ ও আর্কিটেকচার
        </div>

        <h2 className="text-[28px] font-bold leading-[1.25] tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
          কনভার্সন ও স্কেলের জন্য তৈরি
          <br />
          আল্ট্রা-পাওয়ারফুল{" "}
          <span className="text-primary">কিলার ফিচার ও আর্কিটেকচার</span>
        </h2>

        <p className="mx-auto mt-5 px-2 max-w-3xl text-sm leading-7 text-neutral-500 sm:text-base">
          বাংলাদেশের লোকাল D2C ব্র্যান্ড, এফ-কমার্স ও ড্রপশিপিং ব্যবসার বাস্তব
          চাহিদা মাথায় রেখে প্রতিটি ফিচার, মডিউল ও সিকিউরিটি লেয়ার নিখুঁতভাবে
          অপ্টিমাইজ করা হয়েছে।
        </p>
      </div>
      <FeaturesTabs/>
     
    </div>
  );
};

export default Features;

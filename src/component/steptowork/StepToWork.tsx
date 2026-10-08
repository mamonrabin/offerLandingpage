import { hindSiliguri } from "@/app/font";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";
import thumble from "@/assets/images/youtube-walkthrough-thumb.webp";
import ProcessSection from "./ProcessSection";
const StepToWork = () => {
  return (
    <div className="bg-[#F4F4F5] md:py-20 py-10">
      <div
        className={`${hindSiliguri.className} mx-auto max-w-7xl lg:px-8 px-4`}
      >
        <div className="grid items-end md:gap-5 gap-2 lg:grid-cols-2">
          <div>
            <div
              className="mb-4 inline-flex rounded-full border border-neutral-200 bg-white px-4 py-1.5
                text-xs font-bold
                text-[#262626]
              "
            >
              সহজ ৩-ধাপের প্রসেস
            </div>

            <h2 className="text-2xl font-black leading-tight tracking-tight text-neutral-950 md:text-4xl">
              একবার পারচেজ করুন, নিজস্ব হোস্টিংয়ে
              <br />
              <span className="text-primary">সেটআপ করে আজীবন</span> ব্যবহার
              করুন
            </h2>
          </div>

          <p
            className="max-w-xl text-sm leading-7 text-neutral-500 sm:text-base
            "
          >
            আপনার ecommerce business-এর জন্য প্রয়োজন অনুযায়ী Business অথবা
            Premium package বেছে নিন। একবার payment করলেই আপনার website
            development শুরু হবে।
          </p>
        </div>
      </div>

      <div className="mt-8 max-w-6xl mx-auto bg-[#ECECEC] rounded-4xl p-4 border border-neutral-300">
       
          <div
            className="group  border border-neutral-200 relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-neutral-900 sm:rounded-2xl"
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
       

        <ProcessSection/>
      </div>
    </div>
  );
};

export default StepToWork;

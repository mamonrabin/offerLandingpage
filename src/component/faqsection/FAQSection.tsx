"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/app/api/faqs";
import { hindSiliguri } from "@/app/font";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="quation&ans"
      className={`px-4 md:py-20 py-12 sm:px-6 lg:px-8 ${hindSiliguri.className}`}
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="">
          <div>
            <div
              className="mb-4 inline-flex rounded-full border border-neutral-200 bg-white px-4 py-1.5
                text-xs font-bold
                text-[#262626]
              "
            >
              সাধারণ জিজ্ঞাসা
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-neutral-950 md:text-5xl">
              সচরাচর জিজ্ঞাসিত
              <br />
              <span className="text-primary">প্রশ্ন ও উত্তর</span>
            </h2>
          </div>

          <p
            className="max-w-xl mt-2 text-sm leading-7 text-neutral-500 sm:text-base
            "
          >
            প্রোজস ই-কমার্স সোর্স কোড কেনা, সার্ভার ডিপ্লয়মেন্ট এবং সেলস
            স্কেলিং সম্পর্কিত আপনার সব প্রশ্নের খোলামেলা উত্তর।
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-4">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border border-neutral-200 bg-[#F4F4F5] py-4 px-6 cursor-pointer rounded"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="cursor-pointer text-left text-sm font-bold md:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 text-[#2B748A]"
                          : "text-neutral-600"
                      }`}
                    >
                      <ChevronDown size={16} strokeWidth={2.5} />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="text-sm py-2 mt-2 text-neutral-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

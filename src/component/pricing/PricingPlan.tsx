import React from "react";
import { ArrowRight, Check, Crown, Rocket } from "lucide-react";
import Link from "next/link";
const plans = [
  {
    id: 1,
    title: "ল্যান্ডিং পেজ",
    subtitle: "শুধুমাত্র ১টি প্রোডাক্টের জন্য",
    description:
      "আপনার ecommerce business পরিচালনার জন্য professional design, advanced features এবং powerful admin dashboard।",
    boxSubTitle: "সম্পূর্ণ রেডি সেটআপ",
    boxText:
      "সোর্স কোডের সকল ফিচার + ৪টি এক্সট্রা ফিচার বা ডিজাইন পরিবর্তন সহ রেডি স্টোর",
    regularPrice: "৳১৪,০০",
    price: "৳১0,০০০",
    save: "৳৫000 সাশ্রয়",
    popular: "",
    icon: Rocket,
    badge: "Most Popular",
    button: "Landing Page নিন",
    featured: true,

    features: [
      "সম্পূর্ণ কাস্টমাইজযোগ্য (Fully Customizable) ও ফুল সোর্স কোড এক্সেস",

      "প্রোডাক্ট রিভিউ ও রেটিং",

      "কুপন ও ডিসকাউন্ট সিস্টেম",

      "ফ্ল্যাশ সেল / ক্যাম্পেইন সিস্টেম",

      "অ্যাডভান্সড অর্ডার ম্যানেজমেন্ট",

      "বিকাশ / নগদ / কার্ড পেমেন্ট ইন্টিগ্রেশন",
    ],

    clickBtn: "সোর্স কোড কিনুন",
  },
  {
    id: 2,
    title: "ব্যবসায়িক ই-কমার্স স্টোর",
    subtitle: "বর্ধনশীল ব্যবসার জন্য",
    description:
      "আপনার ecommerce business পরিচালনার জন্য professional design, advanced features এবং powerful admin dashboard।",

    regularPrice: "৳৪০,০০০",
    price: "৳৩০,০০০",
    save: "৳১০,০০০ সাশ্রয়",
    boxSubTitle: "সম্পূর্ণ রেডি সেটআপ",
    boxText:
      "সোর্স কোডের সকল ফিচার + ৪টি এক্সট্রা ফিচার বা ডিজাইন পরিবর্তন সহ রেডি স্টোর",
    icon: Rocket,
    badge: "Most Popular",
    button: "Business Store নিন",
    featured: true,
    popular: "সর্বাধিক জনপ্রিয়",
    features: [
      "১০০% কাস্টমাইজযোগ্য ও ফুল এক্সেস — আনলিমিটেড ডোমেইন ও কমার্শিয়াল লাইসেন্স",

      "কাস্টম আধুনিক UI/UX ডিজাইন",

      "হোম, শপ, প্রোডাক্ট ও কন্টাক্ট পেজ",

      "অ্যাডভান্সড প্রোডাক্ট ম্যানেজমেন্ট",

      "ক্যাটাগরি ও সাব-ক্যাটাগরি ম্যানেজমেন্ট",

      "ব্র্যান্ড ম্যানেজমেন্ট",

      "প্রোডাক্ট সার্চ ও ফিল্টারিং",

      "শপিং কার্ট",

      "উইশলিস্ট ও কাস্টমার অ্যাকাউন্ট",

      "প্রোডাক্ট রিভিউ ও রেটিং",

      "কুপন ও ডিসকাউন্ট সিস্টেম",

      "ফ্ল্যাশ সেল / ক্যাম্পেইন সিস্টেম",

      "অ্যাডভান্সড অর্ডার ম্যানেজমেন্ট",

      "বিকাশ / নগদ / কার্ড পেমেন্ট ইন্টিগ্রেশন",

      "কুরিয়ার API ইন্টিগ্রেশন",

      "কাস্টমার অর্ডার ট্র্যাকিং",

      "Facebook Pixel / GA4 ইন্টিগ্রেশন",

      "সম্পূর্ণ অ্যাডমিন ড্যাশবোর্ড",
    ],
    clickBtn: "ব্র্যান্ডিং সহ নিন",
  },

  {
    id: 3,
    title: "প্রিমিয়াম ই-কমার্স স্টোর",
    subtitle: "Established brand-এর জন্য",
    description:
      "বড় ecommerce brand-এর জন্য high-performance store, advanced automation এবং আপনার business অনুযায়ী customized features।",

    regularPrice: "৳৭০,০০০",
    price: "৳৫০,০০০",
    save: "৳২০,০০০ সাশ্রয়",

    icon: Crown,
    badge: "Premium Ecommerce",
    button: "Premium Store নিন",
    boxSubTitle: "কাস্টম বিল্ড",
    boxText: "সম্পূর্ণ ইউনিক আর্কিটেকচার ও ডেডিকেটেড ফিচার ডেভেলপমেন্ট",
    featured: false,
    popular: "এন্টারপ্রাইজ সল্যুশন",
    features: [
      "সম্পূর্ণ কাস্টমাইজযোগ্য ও ফুল এক্সেস — আনলিমিটেড ডোমেইন (নিজের ও ক্লায়েন্ট প্রজেক্ট)",

      "সম্পূর্ণ কাস্টমাইজড UI/UX",

      "অ্যাডভান্সড হোমপেজ সেকশন",

      "অ্যাডভান্সড প্রোডাক্ট ফিল্টারিং",

      "প্রোডাক্ট ভ্যারিয়েশন ম্যানেজমেন্ট",

      "অ্যাডভান্সড ক্যাম্পেইন ম্যানেজমেন্ট",

      "ফ্ল্যাশ সেল সিস্টেম",

      "অ্যাডভান্সড কুপন সিস্টেম",

      "একাধিক পেমেন্ট ইন্টিগ্রেশন",

      "অটোমেটেড কুরিয়ার ওয়ার্কফ্লো",

      "অ্যাডভান্সড অর্ডার ওয়ার্কফ্লো",

      "উইশলিস্ট ও রিভিউ সিস্টেম",

      "Facebook Pixel / Conversion Tracking",

      "Google Analytics ইন্টিগ্রেশন",

      "পারফরম্যান্স অপটিমাইজেশন",

      "সিকিউরিটি কনফিগারেশন",

      "প্রোডাকশন ডেপ্লয়মেন্ট",

      "ডেটাবেস অপটিমাইজেশন",
    ],
    clickBtn: "কাস্টম প্রজেক্ট শুরু করুন",
  },
];

const PricingPlan = () => {
  return (
    <div className="bg-[#07080B] mt-10 rounded-3xl md:p-12 p-6">
      <div className="grid items-start lg:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div
            key={plan.id}
            className={`relative text-white h-fit self-start rounded-2xl border p-6
    backdrop-blur-2xl
    transition-all duration-300

    ${
      index === 0
        ? "border-neutral-800 hover:border-neutral-700 hover:-translate-y-1 cursor-pointer bg-blue-500/[0.08] shadow-[0_0_30px_rgba(59,130,246,0.15)] "
        : index === 1
          ? `
            border-neutral-700 hover:border-neutral-700 hover:-translate-y-1 cursor-pointer
            bg-blue-500/[0.08]
            shadow-[0_0_30px_rgba(255,60,30,0.30),0_0_80px_rgba(255,30,10,0.20)]
            
            before:absolute
            before:-inset-2
            before:-z-10
            before:rounded-[28px]
            before:bg-[radial-gradient(ellipse_at_top,rgba(255,50,20,0.30),transparent_65%)]
            before:blur-2xl
          `
          : "border-neutral-800 hover:border-neutral-700 hover:-translate-y-1 cursor-pointer bg-blue-500/[0.08] shadow-[0_0_30px_rgba(59,130,246,0.15)]"
    }`}
          >
            <div className="border-b border-white/5 pb-5">
              {plan.popular && (
                <p
                  className={`absolute -top-3 right-6 text-xs font-bold py-1 px-3 rounded-full
      ${
        index === 0
          ? "bg-red-500 text-white"
          : index === 1
            ? "bg-red-500 text-white"
            : "bg-white text-neutral-600"
      }
    `}
                >
                  {plan.popular}
                </p>
              )}
              <h2 className="text-xl font-bold">{plan.title}</h2>
              <p className="mt-2 text-sm text-neutral-400">{plan.subtitle}</p>
              <p className="mt-2 text-sm text-neutral-300">
                {plan.description}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <p className="line-through text-lg text-neutral-500">
                  {plan.regularPrice}
                </p>
                <p className="text-3xl font-bold text-white">{plan.price}</p>
              </div>

              <p className="mt-4  text-xs font-bold text-[#34D198] bg-[#0e2e2e77] border border-[#103636] inline-flex py-2 px-3 rounded-full">
                {plan.save}
              </p>
            </div>

            {plan.boxText && (
              <div
                className={`mt-6 flex flex-col gap-2 rounded-xl border p-4 ${
                  index === 0
                    ? "bg-[#0e2e2e77] border border-[#103636]"
                    : index === 1
                      ? "border-red-500/20 bg-red-500/10"
                      : "bg-[#0e2e2e77] border border-[#103636]"
                }`}
              >
                <p className="text-xs font-bold">★ {plan.boxSubTitle}</p>

                <p className="text-sm text-neutral-300">{plan.boxText}</p>
              </div>
            )}

            <div className="space-y-3 mt-6">
              {plan.features?.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex ">
                    <Check
                      size={16}
                      className="text-[#34D198]"
                      strokeWidth={3}
                    />
                  </div>

                  <p className="text-sm font-bold text-white leading-5">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div
              className={`rounded-xl mt-6 p-3
    group transition-all duration-300 cursor-pointer
    ${
      index === 0
        ? "bg-white/10 hover:bg-white/20 hover:text-white border border-white/20"
        : index === 1
          ? "bg-red-500/10 hover:bg-red-500/20 border border-red-500/20"
          : "bg-white/10 hover:bg-white/20 hover:text-white border border-white/20"
    }`}
            >
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block "
              >
                <span className="flex items-center justify-center gap-2 text-base font-bold text-white transition-colors duration-300">
                  <span>{plan.clickBtn}</span>

                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="md:mt-10 mt-6  text-center flex  items-center justify-center text-white">
        <p className="flex items-center md:flex-row flex-col md:gap-2 bg-white/10 border border-white/20 px-6 py-2 rounded-full">
          <span className="font-bold bg-primary md:flex hidden rounded-full text-sm py-1 px-4">Notice</span>
          <span className="md:text-sm text-xs text-neutral-300 fonr-bold">এই প্যাকেজের সাথে ডোমেইন ও হোস্টিং অন্তর্ভুক্ত নয়। আপনার যদি ডোমেইন বা হোস্টিং না থাকে</span>
          <span className="md:text-sm text-xs font-bold text-[#2B748A] underline"> নিচের লিংক থেকে নিতে পারেন →</span>
        </p>
      </div>
    </div>
  );
};

export default PricingPlan;

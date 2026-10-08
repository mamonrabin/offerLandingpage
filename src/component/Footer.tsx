import Image from "next/image";
import { ArrowUpRight, MessageCircle, Circle } from "lucide-react";
import { hindSiliguri } from "@/app/font";

export default function Footer() {
  const footerLinks = [
    {
      label: "এজেন্সি হোম",
      href: "https://titaswebs.vercel.app/",
    },
    {
      label: "Our Team",
      href: "https://titaswebs.vercel.app/",
    },
    {
      label: "লাইভ স্টোর ডেমো",
      href: "#",
    },
    {
      label: "অ্যাডমিন ড্যাশবোর্ড",
      href: "#",
    },
    {
      label: "ইউটিউব চ্যানেল",
      href: "#",
    },
    {
      label: "প্রাইভেসি পলিসি",
      href: "https://titaswebs.vercel.app/",
    },
  ];

  const whatsappUrl =
    "#";

  return (
    <footer
      className={`bg-[#EEEDEE] px-4 pt-12 pb-20 sm:px-6 lg:px-20 ${hindSiliguri.className}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-[#111111] text-white shadow-2xl">
          {/* ================= TOP ================= */}
          <div className="grid md:gap-10 gap-4 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-14">
            {/* Left */}
            <div className="flex items-start">
              <h2 className="text-[26px] font-bold md:leading-12 tracking-tight sm:text-4xl lg:text-[42px]">
                আপনার ব্যবসাকে রূপান্তর করুন
                <br />
                <span className="text-primary">শক্তিশালী ই-কমার্সে</span>
              </h2>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center">
              <p className="max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
                কোনো মাসিক ফি নেই, কোনো কমিশন নেই। ১০০% আনএনক্রিপ্টেড সোর্স কোড
                ও লাইফটাইম লাইসেন্স নিয়ে এখনই আপনার আধুনিক ই-কমার্স যাত্রা শুরু
                করুন।
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {/* Order */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center md:justify-between justify-center gap-4 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#262626] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2B748A] hover:text-white"
                >
                  <span>সোর্স কোড অর্ডার করুন</span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="হোয়াটসঅ্যাপে সরাসরি কথা বলুন"
                  aria-label="হোয়াটসঅ্যাপে কথা বলুন"
                  className="group inline-flex items-center justify-between gap-3 rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-green-500 hover:bg-green-500/10"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
                    <MessageCircle size={14} strokeWidth={2.5} />
                  </span>

                  <span>হোয়াটসঅ্যাপে কথা বলুন</span>

                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-6 border-t border-white/10 sm:mx-10 lg:mx-14" />

          {/* ================= BOTTOM ================= */}
          <div className="flex flex-col  px-6 py-7 sm:px-10 lg:px-14">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <Image
                src="/assets/images/projoss-logo.webp"
                alt="Projoss"
                width={1485}
                height={375}
                className="h-6 w-auto object-contain object-left brightness-0 invert"
              />

              <span className="text-xs text-neutral-500 sm:text-sm">
                © ২০২৬ titasweb. সর্বস্বত্ব সংরক্ষিত।
              </span>
            </div>

            {/* Links */}
            <div className="mt-2 flex flex-wrap md:gap-4 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-neutral-400 transition-colors duration-200 hover:text-white sm:text-sm"
                >
                  {link.label}
                </a>
              ))}

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

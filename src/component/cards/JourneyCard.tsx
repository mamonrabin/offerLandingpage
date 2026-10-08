import { Play } from "lucide-react";
import Link from "next/link";

export function JourneyCard() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-primary/10 to-white p-5 pt-12">
      <span className="inline-flex w-fit rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-primary shadow-sm">
        ⚡ সুপারফাস্ট সেটআপ
      </span>

      <div className="mt-12">
        <h3 className="text-2xl font-bold leading-tight text-neutral-900">
          আজই আপনার স্টোর
          <br />
          লঞ্চ করুন!
        </h3>

        <p className="mt-3 text-xs text-neutral-500">
          ১০ মিনিটে ভিডিও ইনস্টলেশন গাইড।
        </p>

        <Link
          href="#video-demo"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-[10px] font-semibold text-white"
        >
          <Play size={11} fill="currentColor" />
          শুরু করুন
        </Link>
      </div>
    </div>
  );
}
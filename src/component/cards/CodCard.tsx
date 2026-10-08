import { Zap } from "lucide-react";

export function CodCard() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-primary/10 to-white p-5 pt-10">
      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-neutral-700 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        <span>১-ক্লিক COD অর্ডার</span>
      </div>

      <div className="mt-10 rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm">
        <div className="mb-5 flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-[10px] font-bold text-primary">
          <Zap size={12} strokeWidth={2.5} />
          <span>ইনস্ট্যান্ট চেকআউট</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
            <span className="text-[10px] text-neutral-400">নাম:</span>
            <span className="text-[10px] font-medium text-neutral-700">
              রিয়াদ আহমেদ
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
            <span className="text-[10px] text-neutral-400">ফোন:</span>
            <span className="text-[10px] font-medium text-neutral-700">
              017XXXXXXXX
            </span>
          </div>
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-xl bg-primary py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-[#e84400] hover:shadow-md"
        >
          অর্ডার প্লেস করুন →
        </button>
      </div>

      <div className="mt-auto flex items-center gap-2 border-t border-neutral-200 pt-4 text-[9px] text-neutral-500">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-200 text-[10px] font-semibold text-neutral-500">
          RA
        </div>

        <span>@shoppers_bd • ভেরিফাইড</span>
      </div>
    </div>
  );
}
import { Check } from "lucide-react";


export function LifetimeCard() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-primary/10 via-white to-primary/10 p-5 pt-12">
      <span className="w-fit rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-orange-600 shadow-sm">
        লাইফটাইম এক্সেস
      </span>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-neutral-900">
          জিরো মান্থলি চার্জ
        </h3>

        <p className="mt-4 text-xs leading-6 text-neutral-500">
          একবার কিনলেই আজীবন ফুল সোর্স কোড ও ডাটাবেসের শতভাগ মালিকানা আপনার।
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-[10px] font-semibold text-white">
          <Check size={12} />
          ফুল ওনারশিপ
        </div>
      </div>
    </div>
  );
}
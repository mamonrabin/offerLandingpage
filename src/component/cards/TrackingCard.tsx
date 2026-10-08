const trackingItems = [
  {
    name: "Meta CAPI",
    status: "১০০% ডেটা সিঙ্ক",
    icon: "f",
    iconClass: "bg-[#1877F2] text-white",
  },
  {
    name: "Google GA4 & GTM",
    status: "সার্ভার কন্টেইনার",
    icon: "G",
    iconClass: "bg-white text-[#4285F4] border border-neutral-200",
  },
  {
    name: "TikTok Pixel",
    status: "লাইভ ইভেন্ট সিঙ্ক",
    icon: "♪",
    iconClass: "bg-black text-white",
  },
];

export function TrackingCard() {
  return (
    <div className="h-full bg-white p-5 pt-12">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-semibold text-primary">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        সার্ভার-সাইড ট্র্যাকিং
      </div>

      <div className="mt-2 text-[9px] text-neutral-400">
        iOS 14+ বাইপাস
      </div>

      <div className="mt-4 space-y-3">
        {trackingItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3"
          >
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold shadow-sm ${item.iconClass}`}
            >
              {item.icon}
            </div>

            <div>
              <p className="text-xs font-semibold text-neutral-800">
                {item.name}
              </p>

              <p className="mt-0.5 text-[9px] text-green-600">
                {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl bg-neutral-900 px-3 py-3 text-center text-[10px] font-medium text-white">
        জিরো ডেটা লস গ্যারান্টি
      </div>
    </div>
  );
}
function PlanPill({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`rounded-full px-2 py-1 text-[8px] font-semibold ${
        active
          ? "bg-primary text-white"
          : "bg-neutral-100 text-neutral-500"
      }`}
    >
      {children}
    </span>
  );
}

const features = [
  {
    label: "১০০% আনএনক্রিপ্টেড সোর্স কোড ও লাইসেন্স",
    className: "bg-pink-50",
    classNamebg: "bg-pink-500",
  },
  {
    label: "১-ক্লিক কুরিয়ার এন্ট্রি (স্টিডফাস্ট ও পাঠাও)",
    className: "bg-purple-50",
    classNamebg: "bg-purple-500",
  },
  {
    label: "স্মার্ট ফেক অর্ডার ব্লকার ও রিটার্ন শিল্ড",
    className: "bg-green-50",
    classNamebg: "bg-green-500",
  },
  {
    label: "সার্ভার-সাইড ট্র্যাকিং (Meta + Google + TikTok)",
    className: "bg-blue-50",
    classNamebg: "bg-blue-500",
  },
];

export function PlanCard() {
  return (
    <div className="h-full bg-white p-5 pt-10">
      <h3 className="text-lg font-bold text-neutral-900">
        আপনার প্যাকেজ বেছে নিন
      </h3>

      <div className="flex gap-1.5 py-2">
        <PlanPill>সোর্স কোড</PlanPill>
        <PlanPill active>কোড + সেটআপ</PlanPill>
        <PlanPill>এন্টারপ্রাইজ</PlanPill>
      </div>

      <div className="rounded-2xl bg-[#212124] px-4 py-2 text-white">
        <span className="text-[10px] font-medium">🔥 অফারে কিনুন</span>

        <div className="flex items-end gap-2">
          <strong className="text-2xl">৳২,৩৯৯</strong>
          <span className="text-[10px]">লাইফটাইম</span>
        </div>

        <div className="mt-2 text-[9px] opacity-90">
          ✓ এককালীন পেমেন্ট • আজীবন লাইসেন্স
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 py-4">
        {features.map((feature) => (
          <div
            key={feature.label}
            className={`rounded-xl p-3 ${feature.className}`}
          >
            <div className={`h-5 w-5 rounded-full ${feature.classNamebg} shadow-sm`} />

            <span className="text-[10px] inline-flex font-medium leading-3 text-neutral-700">
              {feature.label}
            </span>
          </div>
        ))}
      </div>

      <div className="rounded-xl mx-4 bg-[#262626]/10 p-2 border border-[#262626]/10 text-center text-[10px] font-medium text-[#262626]/80">
        সম্পূর্ণ সোর্স কোড ও ডাটাবেস আপনার সার্ভারে
      </div>
    </div>
  );
}
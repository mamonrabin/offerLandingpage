
function Metric({
  value,
  label,
  success = false,
}: {
  value: string;
  label: string;
  success?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
      <strong className={`text-xl ${success ? "text-primary" : "text-neutral-900"}`}>
        {value}
      </strong>
      <p className="mt-1 text-[9px] text-neutral-400">{label}</p>
    </div>
  );
}



export function FraudCard() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-primaty/10 to-white p-5 pt-12">
      <div className="rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-semibold text-primary">
        🛡 স্মার্ট ডিফেন্স
      </div>

      <h3 className="mt-5 text-xl font-bold text-neutral-900">
        ফেক অর্ডার ব্লকার
      </h3>

      <p className="mt-2 text-xs leading-5 text-neutral-500">
        আইপি, ডিভাইস ও ফেক নাম্বার ফিল্টার
      </p>

      <div className="mt-10 grid grid-cols-2 gap-2">
        <Metric value="০%" label="রিটার্ন লস" />
        <Metric value="৯৯.৪%" label="ডেলিভারি রেট" success />
      </div>

      <div className="mt-auto flex items-center justify-between rounded-xl bg-neutral-900 px-3 py-3 text-[10px] text-white">
        <span>২৪/৭</span>
        <span>ফ্রড প্রোটেকশন সিঙ্ক</span>
      </div>
    </div>
  );
}
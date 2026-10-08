function CourierBox({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm">
      <span className="text-[9px] font-bold text-primary">
        {title}
      </span>

      <p className="mt-1 text-[9px] text-neutral-400">
        {description}
      </p>
    </div>
  );
}


export function CourierCard() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-white p-5 pt-12">
      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-semibold text-primary">
        ● ১-ক্লিক কুরিয়ার এন্ট্রি
      </span>

      <p className="mt-6 text-xs text-neutral-600">
        কুরিয়ার:{" "}
        <strong>Steadfast &amp; Pathao API</strong> →
      </p>

      <div className="mt-8 space-y-3">
        <CourierBox
          title="অটো পার্সেল বুকিং"
          description="বাল্ক বুকিং ও লাইভ ট্র্যাকিং"
        />

        <CourierBox
          title="ওয়েবহুক সিঙ্ক"
          description="ডেলিভারি স্ট্যাটাস লাইভ আপডেট"
        />
      </div>

      <div className="mt-auto flex justify-between text-[9px] text-primary">
        <span>ইনভয়েস রেডি</span>
        <span>থার্মাল POS প্রিন্ট</span>
      </div>
    </div>
  );
}
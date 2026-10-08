export function FanCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute h-[400px] w-[260px] origin-bottom rounded-[32px] border-2 border-white/80 hover:border-[#2B748A]/80 bg-white p-2 shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition-all duration-200 cursor-pointer hover:z-[100]  hover:scale-[1.08] ${className}`}
    >
      <div className="relative h-full overflow-hidden rounded-[26px] bg-neutral-50">
        {/* Phone notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black">
          <div className="mx-auto mt-1 h-1.5 w-8 rounded-full bg-neutral-700" />
        </div>

        {children}
      </div>
    </div>
  );
}
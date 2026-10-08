import {
  Copy,
  ExternalLinkIcon,
  Globe,
  KeyRound,
  Lock,
  Mail,
} from "lucide-react";
import { ClientCard } from "../cards/ClientCard";
import { inter } from "@/app/font";

const clients = [
  {
    name: "A1 Mart BD",
    domain: "a1mart.bd",
    url: "https://titaswebs.vercel.app/",
    badge: "Live Store",
  },
  {
    name: "LaravelPro Demo",
    domain: "titaswebs.com",
    url: "https://titaswebs.vercel.app/",
    badge: "Official Demo",
  },
  {
    name: "Max Point BD",
    domain: "maxpointbd.shop",
    url: "https://titaswebs.vercel.app/",
    badge: "Live Store",
  },
  {
    name: "SR One BD",
    domain: "sronebd.com",
    url: "https://titaswebs.vercel.app/",
    badge: "Live Store",
  },
  {
    name: "Ehab Mart",
    domain: "ehabmart.com",
    url: "https://titaswebs.vercel.app/",
    badge: "Live Store",
  },
  {
    name: "Shopner Ghor",
    domain: "shopnerghorbd.com",
    url: "https://titaswebs.vercel.app/",
    badge: "Live Store",
  },
  {
    name: "Urban Carry BD",
    domain: "urbancarrybd.com",
    url: "https://titaswebs.vercel.app/",
    badge: "Live Store",
  },
  {
    name: "Martvee",
    domain: "martvee.top",
    url: "https://titaswebs.vercel.app/",
    badge: "Live Store",
  },
  {
    name: "Nest Theory BD",
    domain: "nesttheory.bd",
    url: "https://titaswebs.vercel.app/",
    badge: "Live Store",
  },
  {
    name: "Apurba Brand",
    domain: "apurbabrand.com",
    url: "https://titaswebs.vercel.app/",
    badge: "Live Store",
  },
];

const DemoLink = () => {
  const copyText = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  const credentials = [
    {
      icon: Globe,
      title: "DEMO Site Link",
      value: "https://titaswebs.vercel.app/",
    },
    {
      icon: Lock,
      title: "Admin Login Link",
      value: "https://titaswebs.vercel.app/",
    },
    {
      icon: Mail,
      title: "Admin Login Email",
      value: "admin@titiswebs.com",
    },
    {
      icon: KeyRound,
      title: "Admin Password",
      value: "admin123456",
    },
  ];

  return (
    <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50/70 p-3 sm:mt-12 sm:rounded-[2rem] sm:p-6 lg:p-8">
      {/* Badge */}
      <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[10px] font-bold text-primary sm:mb-6 sm:text-xs">
        <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary" />

        <span className="truncate">
          আমাদের সোর্স কোডে চলমান কিছু সফল ক্লায়েন্ট স্টোর
        </span>
      </div>

      {/* Client Cards */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
        {clients.map((client) => (
          <ClientCard key={client.name} {...client} />
        ))}
      </div>

      {/* ================= DEMO ACCESS ================= */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white sm:mt-8 sm:rounded-[1.75rem]">
        {/* Header */}
        <div className="flex flex-col gap-5 border-b border-neutral-200 p-4 sm:gap-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            {/* Badge */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-bold text-primary sm:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              লাইভ টেস্ট ড্রাইভ
            </div>

            {/* Title */}
            <h3 className="max-w-2xl text-lg font-black leading-snug text-neutral-950 sm:text-xl">
              কেনার আগে ওয়েবসাইটের{" "}
              <span className="text-primary">
                লাইভ ডেমো ও অ্যাডমিন ড্যাশবোর্ড
              </span>{" "}
              দেখুন
            </h3>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <a
              href="https://titaswebs.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primary/90 sm:w-auto"
            >
              লাইভ স্টোর দেখুন
              <ExternalLinkIcon size={16} />
            </a>

            <a
              href="https://titaswebs.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800 sm:w-auto"
            >
              অ্যাডমিন ড্যাশবোর্ড
              <ExternalLinkIcon size={16} />
            </a>
          </div>
        </div>

        {/* Credentials */}
        <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-7">
          {credentials.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="min-w-0 rounded-2xl border border-neutral-200 bg-neutral-50 p-3.5 sm:p-4"
              >
                {/* Credential title */}
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                    <Icon size={16} />
                  </div>

                  <span className="min-w-0 truncate text-[11px] font-bold text-neutral-700 sm:text-xs">
                    {item.title}
                  </span>
                </div>

                {/* Value + Actions */}
                <div className="flex min-w-0 items-center gap-1.5 rounded-xl border border-neutral-200 bg-white p-1.5 sm:gap-2 sm:p-2">
                  <span
                    className={`min-w-0 flex-1 truncate px-1.5 text-[10px] font-bold sm:px-2 sm:text-xs ${inter.className}`}
                    title={item.value}
                  >
                    {item.value}
                  </span>

                  {/* Copy */}
                  <button
                    type="button"
                    onClick={() => copyText(item.value)}
                    aria-label={`Copy ${item.title}`}
                    className="inline-flex h-8 shrink-0 items-center gap-1 rounded-lg border border-[#E2E8F0] bg-neutral-100 px-2 text-[10px] font-bold text-neutral-700 transition hover:border-[#c9d1db] hover:bg-neutral-200 hover:text-neutral-800 sm:px-3 sm:text-[11px]"
                  >
                    <Copy size={13} />
                    <span className="hidden xs:inline sm:inline">
                      কপি
                    </span>
                  </button>

                  {/* External Link */}
                  {item.title !== "Admin Login Email" && (
                    <a
                      href={item.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${item.title}`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-[#F1F5F9] transition hover:bg-[#FF4A02] hover:text-white"
                    >
                      <ExternalLinkIcon size={15} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DemoLink;
import { ArrowUpRight, ExternalLinkIcon } from "lucide-react";

export function ClientCard({
  name,
  domain,
  url,
  badge,
}: {
  name: string;
  domain: string;
  url: string;
  badge: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-2xl border border-neutral-200  bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
    >
      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold text-primary">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
        {badge}
      </div>

      <div className="md:text-base text-sm font-bold text-neutral-900">
        {name}
      </div>

      <div className="flex items-center gap-1 text-xs text-primary">
        {domain}
        <ArrowUpRight size={12} />
      </div>
    </a>
  );
}

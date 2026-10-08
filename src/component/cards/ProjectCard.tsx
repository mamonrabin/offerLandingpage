"use client";

import { useState } from "react";
import { ArrowUpRight, X, ZoomIn } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";

function ExternalLinkIcon() {
  return <ArrowUpRight size={12} strokeWidth={2.5} />;
}

export function ProjectCard({
  project,
}: {
  project: {
    icon: LucideIcon;
    title: string;
    badge?: string;
    type: string;
    layout?: string;
    image: StaticImageData;
    alt?: string;
  };
}) {
  const [showImage, setShowImage] = useState(false);

  const Icon = project.icon;

  return (
    <>
      <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:h-[400px]">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-neutral-100 p-4 sm:p-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon size={17} />
            </div>

            <div className="min-w-0">
              <div className="truncate text-sm font-bold text-neutral-900">
                {project.title}
              </div>

              {project.badge && (
                <div className="mt-0.5 truncate text-[11px] text-neutral-500">
                  {project.badge}
                </div>
              )}
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <span className="text-[10px] font-semibold text-neutral-500">
              {project.type}
            </span>

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
              <ExternalLinkIcon />
            </div>
          </div>
        </div>

        {/* Image */}
        <button
          type="button"
          onClick={() => setShowImage(true)}
          className="group/image relative flex w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-xl bg-neutral-50 p-4"
          aria-label={`View ${project.title} image`}
        >
          <Image
            src={project.image}
            alt={project.alt || project.title}
            loading="lazy"
            className="h-full w-full rounded-xl object-contain object-center transition-transform duration-500 group-hover/image:scale-[1.02]"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/image:bg-black/20">
            <div className="flex scale-90 items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-neutral-800 opacity-0 shadow-lg transition-all duration-300 group-hover/image:scale-100 group-hover/image:opacity-100">
              <ZoomIn size={15} />
              View Image
            </div>
          </div>
        </button>
      </div>

      {/* Full Image Popup */}
      {showImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setShowImage(false)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setShowImage(false)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow-lg transition hover:bg-white"
            aria-label="Close image"
          >
            <X size={20} />
          </button>

          {/* Full image */}
          <div
            className="relative flex max-h-[92vh] max-w-[95vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={project.image}
              alt={project.alt || project.title}
              className="max-h-[92vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
              sizes="95vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
import React from 'react';
import {
  BarChart3,
  FileText,
  Monitor,
  Shield,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { ProjectCard } from '../cards/ProjectCard';

import project1 from "@/assets/images/img1.webp"
import project2 from "@/assets/images/img2.webp"
import project3 from "@/assets/images/img3.webp"
import project4 from "@/assets/images/img4.webp"
import project5 from "@/assets/images/img5.webp"
import project6 from "@/assets/images/img6.webp"
import project7 from "@/assets/images/img7.webp"
import project8 from "@/assets/images/img8.webp"


const projects = [
  {
    icon: Monitor,
    title: "ওয়েবসাইট ডিজাইন ডেমো প্রিভিউ ১",
    badge: "Tech & Gadgets Edition",
    type: "লাইভ ডেমো ইন্টারফেস",
    image: project1,
    alt: "ওয়েবসাইট ডিজাইন ডেমো প্রিভিউ - টেক ও গ্যাজেট এডিশন",
    layout: "equal",
  },
  {
    icon: Sparkles,
    title: "ওয়েবসাইট ডিজাইন ডেমো প্রিভিউ ২",
    badge: "Organic & Honey Edition",
    type: "মাল্টি-ক্যাটাগরি শপিং",
    image: project2,
    alt: "ওয়েবসাইট ডিজাইন ডেমো প্রিভিউ - অর্গানিক ও লাইফস্টাইল এডিশন",
    layout: "equal",
  },
  {
    icon: Shield,
    title: "কুরিয়ার হিস্ট্রি ও ফ্রড শিল্ড",
    badge: "Fake Order Guard",
    type: "Steadfast ও Pathao হিস্ট্রি",
    image: project3,
    alt: "কুরিয়ার ডেলিভারি হিস্ট্রি চেকার ও ফেক অর্ডার গার্ড",
    layout: "wide",
  },
  {
    icon: Zap,
    title: "১-ক্লিক সিওডি ফর্ম",
    badge: "",
    type: "৮ সেকেন্ডে কনভার্সন",
    image: project4,
    alt: "1-Click COD Quick Order Form",
    layout: "narrow",
  },
  {
    icon: BarChart3,
    title: "অ্যাডমিন অ্যানালিটিক্স",
    badge: "লাইভ রেভিনিউ ও অর্ডার ইনসাইট",
    type: "রিয়েল-টাইম ড্যাশবোর্ড",
    image: project5,
    alt: "Real-time Revenue and Order Analytics - Full Admin Dashboard",
    layout: "wide",
  },
  {
    icon: Target,
    title: "পিক্সেল ও মার্কেটিং ট্র্যাকিং",
    badge: "Meta CAPI • GA4 • TikTok",
    type: "Facebook, Google ও TikTok পিক্সেল",
    image: project6,
    alt: "পিক্সেল ও মার্কেটিং ট্র্যাকিং কনফিগারেশন ড্যাশবোর্ড",
    layout: "narrow",
  },
  {
    icon: FileText,
    title: "অর্ডার ও শিপিং স্লিপ",
    badge: "স্মার্ট ফ্রড চেকার",
    type: "বাল্ক বুকিং ও অটো স্লিপ প্রিন্ট",
    image: project7,
    alt: "Automated Shipping Slips Management",
    layout: "equal",
  },
  {
    icon: Monitor,
    title: "মডার্ন স্টোরফ্রন্ট হোমপেজ",
    badge: "Laravel 11 + React 19",
    type: "ডি২সি ব্র্যান্ড শপিং ইন্টারফেস",
    image: project8,
    alt: "মডার্ন ডি২সি ইকমার্স স্টোরফ্রন্ট হোমপেজ ডিজাইন",
    layout: "equal",
  },
];

const DemoProject = () => {
    return (
         <div className="mt-8 grid grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
    );
};

export default DemoProject;
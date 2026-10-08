import { hindSiliguri } from "@/app/font";
import React from "react";
import PricingPlan from "./PricingPlan";

const Pricing = () => {
  return (
    <div id="pricing" className={`${hindSiliguri.className} mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20`}>
      <div className="grid items-end gap-5 lg:grid-cols-2">
        <div>
          <div
            className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5
                text-xs font-bold
                text-primary
              "
          >
            প্রাইসিং প্যাকেজ
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-neutral-950 md:text-4xl lg:text-5xl">
            স্বচ্ছ ও সাশ্রয়ী মূল্য —
            <br />
            <span className="text-primary">কোনো মাসিক চার্জ নেই</span>
          </h2>
        </div>

        <p
          className="max-w-xl text-sm leading-7 text-neutral-500 sm:text-base
            "
        >
          আপনার ecommerce business-এর জন্য প্রয়োজন অনুযায়ী Business অথবা Premium
          package বেছে নিন। একবার payment করলেই আপনার website development শুরু
          হবে।
        </p>
      </div>

      <PricingPlan/>

      
    </div>
  );
};

export default Pricing;

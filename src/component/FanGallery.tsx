import React from 'react';
import { FanCard } from './cards/FanCard';
import { CodCard } from './cards/CodCard';
import { FraudCard } from './cards/FraudCard';
import { TrackingCard } from './cards/TrackingCard';
import { PlanCard } from './cards/PlanCard';
import { CourierCard } from './cards/CourierCard';
import { JourneyCard } from './cards/JourneyCard';
import { LifetimeCard } from './cards/LifetimeCard';
import { hindSiliguri } from '@/app/font';

const FanGallery = () => {
    return (
        <div
  className={`relative min-h-[650px] bg-gradient-to-b from-transparent from-0% via-transparent via-45% to-white to-100% ${hindSiliguri.className}`}
>
          {/* Background Text */}
          <div className="pointer-events-none absolute inset-x-0 top-20 overflow-hidden whitespace-nowrap opacity-[0.035]">
            <div className="flex w-max animate-[marquee_25s_linear_infinite] items-center gap-8 text-[120px] font-black uppercase tracking-tighter sm:text-[180px]">
              <span>Titaswebs ✦ Titaswebs ✦ Titaswebs ✦</span>
              <span>Titaswebs ✦ Titaswebs ✦ Titaswebs ✦</span>
            </div>
          </div>

          {/* Cards */}
          <div className="relative mx-auto h-[600px] max-w-4xl">
            {/* Card 1 */}
            <FanCard className="left-[3%] top-[100px] z-10  -rotate-[21deg] hover:rotate-[0deg] lg:block">
              <CodCard />
            </FanCard>

            {/* Card 2 */}
            <FanCard className="left-[13%] top-[100px] z-20  -rotate-[14deg] hover:rotate-[0deg] md:block">
              <FraudCard />
            </FanCard>

            {/* Card 3 */}
            <FanCard className="left-[24%] top-[100px] z-30  -rotate-[7deg] hover:rotate-[0deg] md:block">
              <TrackingCard />
            </FanCard>

            {/* Center */}
            <FanCard className="left-1/2 top-[50px] z-50 h-[450px]  -translate-x-1/2">
              <PlanCard />
            </FanCard>

            {/* Card 5 */}
            <FanCard className="right-[24%] top-[100px] z-30  rotate-[7deg] hover:rotate-[0deg] md:block">
              <CourierCard />
            </FanCard>

            {/* Card 6 */}
            <FanCard className="right-[13%] top-[100px] z-20  rotate-[14deg] hover:rotate-[0deg] lg:block">
              <JourneyCard />
            </FanCard>

            {/* Card 7 */}
            <FanCard className="right-[3%] top-[100px] z-10  rotate-[21deg] hover:rotate-[0deg] xl:block">
              <LifetimeCard />
            </FanCard>
          </div>
        </div>
    );
};

export default FanGallery;
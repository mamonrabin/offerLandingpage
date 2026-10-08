import ClientsAndProjects from '@/component/ClientsAndProjects/ClientsAndProjects';
import FAQSection from '@/component/faqsection/FAQSection';
import Features from '@/component/features/Features';
import FloatingOfferButton from '@/component/FloatingOfferButton';
import Footer from '@/component/Footer';
import Hero from '@/component/Hero';

import LiveSection from '@/component/LiveSection';
import Navbar from '@/component/Navbar';
import Pricing from '@/component/pricing/Pricing';
import StepToWork from '@/component/steptowork/StepToWork';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <LiveSection/>
      <Features/>
      <ClientsAndProjects/>
      <Pricing/>
      <StepToWork/>
      <FAQSection/>
      <Footer/>
      <FloatingOfferButton/>
    </div>
  );
};

export default page;
/**
 * IMPORTS
 */
import React from "react"
// components
import { CTA } from "./components/cta/cta";
import { Hero } from "./components/hero/hero";
import { HowItWorks } from "./components/howItworks/howItworks";
import { Testimonials } from "./components/testimonials/testimonials";
import { Features } from "./components/features/features";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

/**
 * EXPORTS
 */
export default App;

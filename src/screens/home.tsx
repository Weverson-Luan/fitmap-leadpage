/**
 * IMPORTS
 */
import React from "react"
import { Hero } from "../components/hero/hero"
import { Features } from "../components/features/features"
import { HowItWorks } from "../components/howItworks/howItworks"
import { Testimonials } from "../components/testimonials/testimonials"
import { CTA } from "../components/cta/cta"
import { Footer } from "../components/footer/footer"

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

/**
 * EXPORTS
 */
export {
  Home
}
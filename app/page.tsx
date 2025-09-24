import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { ServicesPreview } from "@/components/services-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CallToAction } from "@/components/call-to-action"
import Privacidad from "./privacidad/page"
import Terminos from "./terminos/page"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <ServicesPreview />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

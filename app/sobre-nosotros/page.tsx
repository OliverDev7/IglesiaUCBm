import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { ChurchHistory } from "@/components/church-history"
import { MissionVision } from "@/components/mission-vision"
import { TeamSection } from "@/components/team-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <MissionVision />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}

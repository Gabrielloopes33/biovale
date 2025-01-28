"use client"
import { useEffect } from "react";
import styles from "@/styles/style";
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer, } from "@/components"
import ParticlesBackground from "@/components/ParticlesBackground";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden scroll-smooth">
        <ParticlesBackground />
        
        {/* Navbar Section */}
        <div className={`${styles.paddingX} ${styles.flexCenter} relative z-[1] py-2`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Hero Section */}
        <div className={`${styles.flexStart} relative z-[1] pt-2`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        {/* Rest of the content */}
        <div className={`${styles.paddingX} ${styles.flexStart} relative z-[1]`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
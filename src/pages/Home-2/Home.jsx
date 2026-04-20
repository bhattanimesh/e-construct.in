import About from "../../components/About"
import CTASection from "../../components/CTASection"
import FoundersSection from "../../components/FoundersSection"
import Hero from "../../components/Hero"
import VideoGallery from "../../components/VideoGallery"
import NewsAndBlog from "../../components/NewsAndBlog"
import OurBlogs from "../../components/OurBlogs"
import OurGallery from "../../components/OurGallery"
import Services from "../../components/OurServices"
import ProcessSection from "../../components/ProcessSection"
import LatestProjects from "../../components/Projects"
import TrustedPartners from "../../components/TrustedPartners"
import StackedCardSlider from "../../components/StackedCardSlider"
import SchematicDesignSlider from "../../components/SchematicDesignSlider"
import AllProcessSliders from "../../components/ProcessAdditionalSliders"
import { lazy, Suspense } from 'react'

// FlipbookGallery pulls in react-pdf + pdfjs (~1MB) — lazy load it
const FlipbookGallery = lazy(() => import('../../components/FlipbookGallery'))

function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="py-24 bg-white text-center text-gray-400 text-sm">Loading showcase…</div>}>
        <FlipbookGallery />
      </Suspense>
      <VideoGallery />
      <TrustedPartners />
      <About />
      <Services />
      <LatestProjects />
      <CTASection />
      <ProcessSection />
      <AllProcessSliders />
      <FoundersSection />
      <OurGallery />
      <NewsAndBlog />
      <OurBlogs />
    </>
  )
}

export default Home

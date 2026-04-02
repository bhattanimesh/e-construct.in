import About from "../../components/About"
import CTASection from "../../components/CTASection"
import FoundersSection from "../../components/FoundersSection"
import Hero from "../../components/Hero"
import FlipbookGallery from "../../components/FlipbookGallery"
import VideoGallery from "../../components/VideoGallery"
import NewsAndBlog from "../../components/NewsAndBlog"
import OurBlogs from "../../components/OurBlogs"
import OurGallery from "../../components/OurGallery"
import Services from "../../components/OurServices"
import ProcessSection from "../../components/ProcessSection"
import LatestProjects from "../../components/Projects"
import TrustedPartners from "../../components/TrustedPartners"


function Home() {

  return (
    <>
     
<Hero />
<FlipbookGallery />
<VideoGallery />
<TrustedPartners />
<About />
<Services />
<LatestProjects />
<CTASection />
<ProcessSection />
<FoundersSection />
<OurGallery />
<NewsAndBlog />
<OurBlogs />
    </> 
  )
}

export default Home

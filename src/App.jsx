import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home-2/Home'
import Home1 from './pages/Home-1/Home1'
import Layout from './pages/Layout'
import AboutPage from './pages/AboutPage'
import ServiceDetails from './pages/ServiceDetails'
import BimHubGallery from './pages/BimHubGallery'
import BimHubBlog from './pages/BimHubBlog'
import BimHubPBD from './pages/BimHubPBD'
import BimConsultancy from './pages/BimConsultancy'
import CareersPage from './pages/CareersPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServiceDetails />} />
          <Route path="/bim-hub/gallery" element={<BimHubGallery />} />
          <Route path="/bim-hub/blog" element={<BimHubBlog />} />
          <Route path="/bim-hub/pbd" element={<BimHubPBD />} />
          <Route path="/services/bim-consultancy" element={<BimConsultancy />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Route>
        <Route path="/home-1" element={<Home1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
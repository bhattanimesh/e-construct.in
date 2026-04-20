import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './pages/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import NotFoundPage from './pages/NotFoundPage'

// ─── LAZY-LOADED PAGES ────────────────────────────────────────────────────────
// Each page becomes its own JS chunk — only downloaded when the user navigates to it

const Home          = lazy(() => import('./pages/Home-2/Home'))
const Home1         = lazy(() => import('./pages/Home-1/Home1'))
const AboutPage     = lazy(() => import('./pages/AboutPage'))
const ServiceDetails= lazy(() => import('./pages/ServiceDetails'))
const BimHubGallery = lazy(() => import('./pages/BimHubGallery'))
const BimHubBlog    = lazy(() => import('./pages/BimHubBlog'))
const BimHubPBD     = lazy(() => import('./pages/BimHubPBD'))
const BimHubMSB     = lazy(() => import('./pages/BimHubMSB'))
const BimConsultancy= lazy(() => import('./pages/BimConsultancy'))
const StructuralConsultancy = lazy(() => import('./pages/StructuralConsultancy'))
const CareersPage   = lazy(() => import('./pages/CareersPage'))
const ContactPage   = lazy(() => import('./pages/ContactPage'))
const ProjectsPage  = lazy(() => import('./pages/ProjectsPage'))
const AdminPanel    = lazy(() => import('./pages/AdminPanel'))

// Minimal loading fallback — no layout shift, no spinner flash
const PageLoader = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="careers" element={<CareersPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="services" element={<ServiceDetails />} />
              <Route path="bim-hub/gallery" element={<BimHubGallery />} />
              <Route path="bim-hub/blog" element={<BimHubBlog />} />
              <Route path="bim-hub/pbd" element={<BimHubPBD />} />
              <Route path="bim-hub/msb" element={<BimHubMSB />} />
              <Route path="services/bim-consultancy" element={<BimConsultancy />} />
              <Route path="services/structural-consultancy" element={<StructuralConsultancy />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path="/home-1" element={<Home1 />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App

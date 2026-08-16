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
const BimHubMSC     = lazy(() => import('./pages/BimHubMSC'))
const BimHubMSS     = lazy(() => import('./pages/BimHubMSS'))
const BimConsultancy= lazy(() => import('./pages/BimConsultancy'))
const StructuralConsultancy = lazy(() => import('./pages/StructuralConsultancy'))
const CareersPage   = lazy(() => import('./pages/CareersPage'))
const ContactPage   = lazy(() => import('./pages/ContactPage'))
const ProjectsPage  = lazy(() => import('./pages/ProjectsPage'))
const AdminPanel    = lazy(() => import('./pages/AdminPanel'))
const EPMC          = lazy(() => import('./pages/EPMC'))
const LuxuryVilla   = lazy(() => import('./pages/LuxuryVilla'))
const ConstructionServices = lazy(() => import('./pages/ConstructionServices'))
const TotalQualityManagement = lazy(() => import('./pages/TotalQualityManagement'))
const CorporateTraining        = lazy(() => import('./pages/CorporateTraining'))
const WorkshopsSeminars        = lazy(() => import('./pages/WorkshopsSeminars'))
const InteriorDesign           = lazy(() => import('./pages/InteriorDesign'))
const ArchitecturalConsultancy = lazy(() => import('./pages/ArchitecturalConsultancy'))
const BlogDetailPage           = lazy(() => import('./pages/BlogDetailPage'))
const BimHubComposite          = lazy(() => import('./pages/BimHubComposite'))
const BimHubDrawingDrafting    = lazy(() => import('./pages/BimHubDrawingDrafting'))
const BimHubInteriorDesign     = lazy(() => import('./pages/BimHubInteriorDesign'))
const BimHubETABSWorkshop      = lazy(() => import('./pages/BimHubETABSWorkshop'))
const BimHubLifeEngineering    = lazy(() => import('./pages/BimHubLifeEngineering'))
const BimHubOnlineCrashCourses = lazy(() => import('./pages/BimHubOnlineCrashCourses'))
const BimHubBusinessManagement = lazy(() => import('./pages/BimHubBusinessManagement'))
const PrivacyPolicy            = lazy(() => import('./pages/PrivacyPolicy'))
const TermsConditions          = lazy(() => import('./pages/TermsConditions'))
const RefundPolicy             = lazy(() => import('./pages/RefundPolicy'))

// Minimal loading fallback — no layout shift, no spinner flash
const PageLoader = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
  </div>
)

import { AdminProvider } from './context/AdminContext'

function App() {
  return (
    <AdminProvider>
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
              <Route path="pages/gallery" element={<BimHubGallery />} />
              <Route path="pages/blog" element={<BimHubBlog />} />
              <Route path="pages/blog/:slug" element={<BlogDetailPage />} />
              <Route path="pages/pbd" element={<BimHubPBD />} />
              <Route path="pages/pg-diploma-in-project-management-with-bim-technology" element={<BimHubMSB />} />
              <Route path="pg-diploma-in-project-management-with-bim-technology" element={<BimHubMSB />} />
              <Route path="pages/msb" element={<BimHubMSB />} />
              <Route path="on-job-master-study-in-project-management-with-bim-technology" element={<BimHubMSB />} />
              <Route path="pages/pg-diploma-in-entrepreneurship-in-structures-bim-and-project-management" element={<BimHubMSC />} />
              <Route path="pg-diploma-in-entrepreneurship-in-structures-bim-and-project-management" element={<BimHubMSC />} />
              <Route path="pages/msc" element={<BimHubMSC />} />
              <Route path="pages/pg-diploma-in-structural-engineering" element={<BimHubMSS />} />
              <Route path="pg-diploma-in-structural-engineering" element={<BimHubMSS />} />
              <Route path="pages/mss" element={<BimHubMSS />} />
              <Route path="on-job-master-study-in-structural-engineering" element={<BimHubMSS />} />
              <Route path="services/bim-consultancy" element={<BimConsultancy />} />
              <Route path="services/structural-consultancy" element={<StructuralConsultancy />} />
              <Route path="services/epmc" element={<EPMC />} />
              <Route path="services/luxury-villa" element={<LuxuryVilla />} />
              <Route path="services/construction" element={<ConstructionServices />} />
              <Route path="services/tqm" element={<TotalQualityManagement />} />
              <Route path="services/interior-design" element={<InteriorDesign />} />
              <Route path="services/architectural-consultancy" element={<ArchitecturalConsultancy />} />
              <Route path="training/corporate" element={<CorporateTraining />} />
              <Route path="training/workshops" element={<WorkshopsSeminars />} />
              <Route path="training/composite" element={<BimHubComposite />} />
              <Route path="training/bim-certification" element={<BimHubMSB />} />
              <Route path="services/bim-certification" element={<BimHubMSB />} />
              <Route path="bim-certification" element={<BimHubMSB />} />
              <Route path="training/drawing-drafting" element={<BimHubDrawingDrafting />} />
              <Route path="master-study-in-engineering-drawing-drafting-new" element={<BimHubDrawingDrafting />} />
              <Route path="drawing-drafting" element={<BimHubDrawingDrafting />} />
              <Route path="training/interior-design" element={<BimHubInteriorDesign />} />
              <Route path="training/etabs-workshop" element={<BimHubETABSWorkshop />} />
              <Route path="training/life-engineering" element={<BimHubLifeEngineering />} />
              <Route path="training/crash-courses" element={<BimHubOnlineCrashCourses />} />
              <Route path="training/business-management" element={<BimHubBusinessManagement />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="terms-and-conditions" element={<TermsConditions />} />
              <Route path="terms-conditions" element={<TermsConditions />} />
              <Route path="terms" element={<TermsConditions />} />
              <Route path="return-refund-and-cancellation-policy" element={<RefundPolicy />} />
              <Route path="refund-policy" element={<RefundPolicy />} />
              <Route path="return-policy" element={<RefundPolicy />} />
              <Route path="cancellation-policy" element={<RefundPolicy />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path="/home-1" element={<Home1 />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
    </AdminProvider>
  )
}

export default App

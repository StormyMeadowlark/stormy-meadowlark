import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Account from './pages/Account'
import InitialCreationBundles from './pages/InitialCreationBundles'
import BlogHome from './pages/BlogHome'
import FrontendDeveloper from './pages/FrontendDeveloper'
import UxUiDesigner from './pages/UxUiDesigner'
import MarketingSpecialist from './pages/MarketingSpecialist'
import ResumePortal from './components/ResumePortal'
import Careers from './pages/Careers'
import OngoingPackages from './pages/OngoingPackages'
import APIAccess from './pages/APIAccess'
import DigitalMarketing from './pages/DigitalMarketing'
import CustomSolutions from './pages/CustomSolutions'
import Disclaimer from './pages/Disclaimer'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import VerifyAccount from './pages/VerifyAccount' // Import the new verification page
import VerifiedSuccess from './pages/VerifiedSuccess'

const AppRouter = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/account" element={<Account />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route
        path="services/initial-creation-bundles"
        element={<InitialCreationBundles />}
      />
      <Route path="/tech&tranquility" element={<BlogHome />} />
      <Route
        path="/careers/frontend-developer"
        element={<FrontendDeveloper />}
      />
      <Route path="/careers/ux-ui-designer" element={<UxUiDesigner />} />
      <Route
        path="/careers/marketing-specialist"
        element={<MarketingSpecialist />}
      />
      <Route path="/careers/resume-portal" element={<ResumePortal />} />
      <Route path="/careers" element={<Careers />} />
      <Route
        path="/services/ongoing-monthly-packages"
        element={<OngoingPackages />}
      />
      <Route path="/services/api-access" element={<APIAccess />} />
      <Route
        path="/services/digital-marketing-campaigns"
        element={<DigitalMarketing />}
      />
      <Route path="/services/custom-solutions" element={<CustomSolutions />} />
      <Route path="/documents/disclaimer" element={<Disclaimer />} />
      <Route path="/documents/terms-of-service" element={<TermsOfService />} />
      <Route path="/documents/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/verify" element={<VerifyAccount />} /> {/* Add this line */}
      <Route path="/verified-success" element={<VerifiedSuccess />} />
    </Routes>
    <Footer />
  </Router>
)

export default AppRouter


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Account from "./pages/Account";
import WebDevelopment from "./pages/WebDevelopment";
import ContentCreation from "./pages/ContentCreation";
import SocialMediaManagement from "./pages/SocialMediaManagement.jsx";
import ApiDevelopment from "./pages/ApiDevelopment.jsx";
import ConsultingStrategy from "./pages/ConsultingStrategy.jsx"
import GoogleAdsManagement from "./pages/GoogleAdsManagement.jsx";
import BlogHome from "./pages/BlogHome.jsx"
import FrontendDeveloper from "./pages/FrontendDeveloper.jsx"
import UxUiDesigner from "./pages/FrontendDeveloper.jsx"
import MarketingSpecialist from "./pages/MarketingSpecalist.jsx"
import ResumePortal from "./components/ResusmePortal.jsx"


const AppRouter = () => (
  <Router>
    <Header /> {/* Include the Header at the top of your app */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/account" element={<Account />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/content-creation" element={<ContentCreation />} />
      <Route
        path="/social-media-management"
        element={<SocialMediaManagement />}
      />
      <Route path="/api-development" element={<ApiDevelopment />} />
      <Route path="/consulting-strategy" element={<ConsultingStrategy />} />
      <Route path="/google-ads-management" element={<GoogleAdsManagement />} />
      <Route path="/blog" element={<BlogHome />} />
      <Route
        path="/careers/frontend-developer"
        element={<FrontendDeveloper />}
      />
      <Route path="/careers/ux-ui-designer" element={<UxUiDesigner />} />
      <Route
        path="/careers/marketing-specialist"
        element={<MarketingSpecialist />}
      />
      <Route path="/resume-portal" element={<ResumePortal />} />
    </Routes>
    <Footer />
  </Router>
)

export default AppRouter
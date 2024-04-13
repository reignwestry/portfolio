import "./scss/App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import  Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import  Services from "./pages/ServicesPage";
import  Gallery  from "./pages/GalleryPage";
import Contact from "./pages/ContactPage";
import NewProject from "./pages/NewProject";
import PaymentProcessForm from "./pages/PaymentPage";
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/newproject" element={<NewProject />} />
        <Route exact path="/payment" element={<PaymentProcessForm />} />
        <Route exact index path="/*" element={<NotFound />} />
        <Route exact index path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;

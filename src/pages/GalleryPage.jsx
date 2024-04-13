import "./../scss/pages/GalleryPage.scss";

import GallerySection from "../components/sections/GallerySection";
import HeroSection from "./../components/sections/HeroSection";
import Footer from "./../components/sections/Footer";

function GalleryPage() {
  return (
    <div>
      <HeroSection />
      <h1>Gallery Page</h1>
      <GallerySection />
      <Footer />
    </div>
  );
}

export default GalleryPage;

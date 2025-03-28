import React, { useEffect } from "react";
import AboutUsPageComponent from "@/components/AboutUsPageComponent"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUsPage = () => {
  useEffect(() => {}, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutUsPageComponent />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;

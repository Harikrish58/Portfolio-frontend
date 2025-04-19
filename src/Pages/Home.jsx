// Importing all main page components
import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Projects from "../Components/Projects";

// Home component serves as the main page of the portfolio
const Home = () => {
  return (
    <main>
      {/* Navigation bar at the top of the page */}
      <Navbar />

      {/* Hero section with introduction and call to action */}
      <Hero />

      {/* Projects section showcasing portfolio work */}
      <Projects />

      {/* About section including skills and experience */}
      <About />

      {/* Contact form for inquiries or collaboration */}
      <ContactForm />

      {/* Footer with contact info and social links */}
      <Footer />
    </main>
  );
};

export default Home;

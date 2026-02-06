// src/pages/Home.jsx
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Testimonials from "../components/testimonials/Testimonials";
import SectionHeader from "../components/sections/Header";
import Projects from "./Projects";
import Button from "../components/Button";
import ReadyToStart from "../components/ReadyToStart";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data.slice(0, 3))) // featured 3
      .catch(console.error);
  }, []);

  return (
    <div className="home-page">
      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <Services />

      
      {/* FEATURED PROJECTS */}
      <Projects />
      
      <Testimonials />
      {/* CTA */}
      <ReadyToStart />
      
    </div>
  );
};

export default Home;
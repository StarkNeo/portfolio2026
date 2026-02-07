import { useState } from "react";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Testimonials from "../components/testimonials/Testimonials";
import Projects from "./Projects";
import ReadyToStart from "../components/ReadyToStart";
import Chatbot from "../components/chatbot/Chatbot";
import "./home.css";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  /*const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data.slice(0, 3))) // featured 3
      .catch(console.error);
  }, []);*/

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
      {/* CHATBOT */}
      {isOpen && <Chatbot />}
      
      <button className="chatbotToggle" onClick={toggleChatbot}>💬</button>
      
    </div>
  );
};

export default Home;
import './services.css';

export default function Services() {
  const services = [
    {
      title: "AI‑Powered SDLC Automation",
      description:
        "I design intelligent engineering workflows that automate code reviews, testing, documentation, and deployment. Reduce cycle time and ship faster with reliable AI‑driven systems.",
    },
    {
      title: "Backend Architecture & Modular Systems",
      description:
        "I build scalable, production‑grade backend architectures with clean separation of concerns, secure authentication, and robust error handling.",
    },
    {
      title: "Authentication & Security Engineering",
      description:
        "From MFA and OAuth flows to secure session management and auditing, I design authentication systems that are both seamless and enterprise‑grade.",
    },
    {
      title: "Frontend UX for Business Dashboards",
      description:
        "I create modern, intuitive dashboards inspired by top SaaS platforms—clean UI, smooth interactions, and a premium user experience.",
    },
  ];

  return (
    <section className="services">
      <h2 className="heading">What I Do</h2>
      <p className="servicesSubheading">
        I help companies build reliable, scalable, and automated engineering systems.
      </p>

      <div className="grid">
        {services.map((service, index) => (
          <div key={index} className="card">
            <h3 className="servicesCardTitle">{service.title}</h3>
            <p className="servicesCardDescription">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
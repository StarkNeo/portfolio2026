// src/components/ui/Card.jsx
const Card = ({ children }) => {
  return (
    <div className="border border-slate-800 rounded-lg p-5 bg-slate-900/40 hover:border-cyan-500 transition">
      {children}
    </div>
  );
};

export default Card;
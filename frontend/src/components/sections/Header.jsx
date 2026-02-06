// src/components/ui/SectionHeader.jsx
const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      {subtitle && (
        <p className="text-slate-400 text-sm mt-1 max-w-md">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
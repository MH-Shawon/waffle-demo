interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4 text-black font-[var(--font-denk)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-800 max-w-2xl mx-auto font-[var(--font-bai-jamjuree)]">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-[#FAEBD6] mx-auto mt-6"></div>
    </div>
  );
};

export default SectionHeader;

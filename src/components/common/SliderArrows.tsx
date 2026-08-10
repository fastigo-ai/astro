import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function SliderArrows({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onPrev}
        className="p-2 rounded-full bg-white/80 hover:bg-white shadow backdrop-blur text-navy transition-colors"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={onNext}
        className="p-2 rounded-full bg-white/80 hover:bg-white shadow backdrop-blur text-navy transition-colors"
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
}

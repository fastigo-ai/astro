export default function SliderDots({
  count,
  index,
  onChange,
}: {
  count: number;
  index: number;
  onChange: (idx: number) => void;
}) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`h-2 rounded-full transition-all ${
            i === index ? "w-6 bg-navy" : "w-2 bg-navy/30"
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

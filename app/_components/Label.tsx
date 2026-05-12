interface LabelProps {
  num: string;
  text: string;
  light?: boolean;
}

export default function Label({ num, text, light = false }: LabelProps) {
  return (
    <div className="flex items-center gap-3 mb-11">
      <span className="font-mono text-[10px] tracking-[0.14em] text-accent">
        {num}
      </span>
      <div className={`w-4 h-px ${light ? "bg-white/15" : "bg-dim"}`} />
      <span
        className={`font-sans text-[10px] tracking-[0.2em] uppercase ${light ? "text-dim" : "text-ink-mid"}`}
      >
        {text}
      </span>
    </div>
  );
}

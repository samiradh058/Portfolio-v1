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
      <span
        className={`font-sans text-[11px] font-medium tracking-[0.2em] uppercase ${light ? "text-background/60" : "text-foreground/60"}`}
      >
        {text}
      </span>
    </div>
  );
}

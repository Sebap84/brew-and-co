interface EventCardProps {
  emoji: string;
  day: string;
  time: string;
  title: string;
  description: string;
  accentClass: string;
}

export function EventCard({
  emoji,
  day,
  time,
  title,
  description,
  accentClass,
}: EventCardProps) {
  return (
    <article
      className={[
        "relative flex gap-5 p-6 rounded-2xl overflow-hidden",
        "bg-cream border border-espresso/6 shadow-warm-sm",
        "group transition-all duration-300 hover:shadow-warm-md hover:-translate-y-0.5",
      ].join(" ")}
    >
      {/* Colored left accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${accentClass}`}
      />

      {/* Emoji circle */}
      <div className="shrink-0 w-14 h-14 rounded-2xl bg-linen flex items-center justify-center text-2xl">
        {emoji}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-sans text-xs font-bold tracking-widest uppercase text-stone">
            {day}
          </span>
          <span className="font-sans text-xs text-stone/60">·</span>
          <span className="font-mono text-xs font-medium text-stone">{time}</span>
        </div>
        <h3 className="font-display text-xl font-bold text-espresso leading-snug">
          {title}
        </h3>
        <p className="font-sans text-sm text-stone leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}

import { cn } from "@/lib/utils";

interface TimelineItem {
  day: string;
  title: string;
  description: string;
}

interface ItineraryTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function ItineraryTimeline({ items, className }: ItineraryTimelineProps) {
  return (
    <div className={cn("my-10 pl-2", className)}>
      <h3 className="text-2xl font-serif font-bold mb-8">Trip Timeline</h3>
      <div className="relative border-l-2 border-primary/20 ml-3 space-y-10 pb-4">
        {items.map((item, i) => (
          <div key={i} className="relative pl-8">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-primary" />
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
              <span className="font-bold text-primary text-sm uppercase tracking-wide min-w-[80px]">
                {item.day}
              </span>
              <h4 className="font-bold text-lg text-gray-900 font-sans">{item.title}</h4>
            </div>
            <p className="text-gray-600 leading-relaxed text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

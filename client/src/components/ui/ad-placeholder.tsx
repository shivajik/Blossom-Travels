import { cn } from "@/lib/utils";

interface AdPlaceholderProps {
  width?: string;
  height?: string;
  className?: string;
  label?: string;
}

export function AdPlaceholder({ width = "100%", height = "250px", className, label = "Advertisement" }: AdPlaceholderProps) {
  return (
    <div 
      className={cn(
        "bg-gray-100 border border-gray-200 flex flex-col items-center justify-center text-gray-400 text-xs uppercase tracking-widest my-8 mx-auto",
        className
      )}
      style={{ width, height, minHeight: height }}
    >
      <span className="mb-2 font-bold">{label}</span>
      <span className="text-[10px] opacity-50">Ad Space</span>
    </div>
  );
}

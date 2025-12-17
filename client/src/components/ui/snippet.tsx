import { Info } from "lucide-react";

interface SnippetProps {
  children: React.ReactNode;
}

export function Snippet({ children }: SnippetProps) {
  return (
    <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg relative">
      <div className="absolute top-4 right-4 text-primary/20">
        <Info className="w-6 h-6" />
      </div>
      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Quick Answer</p>
      <div className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed font-serif">
        {children}
      </div>
    </div>
  );
}

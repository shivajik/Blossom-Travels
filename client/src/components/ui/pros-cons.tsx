import { CheckCircle2, XCircle } from "lucide-react";

interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-10 p-6 bg-slate-50 rounded-xl border border-slate-100">
      <div>
        <h3 className="flex items-center gap-2 text-lg font-bold text-green-700 mb-4 font-sans">
          <CheckCircle2 className="w-5 h-5" />
          The Good
        </h3>
        <ul className="space-y-3">
          {pros.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="flex items-center gap-2 text-lg font-bold text-red-700 mb-4 font-sans">
          <XCircle className="w-5 h-5" />
          The Bad
        </h3>
        <ul className="space-y-3">
          {cons.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

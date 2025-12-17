import { AUTHOR } from "@/lib/data";

export function AuthorBio() {
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <img 
        src={AUTHOR.image} 
        alt={AUTHOR.name} 
        className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/20"
      />
      <div>
        <p className="text-xs font-bold tracking-wider text-primary uppercase mb-1">Written by</p>
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{AUTHOR.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">{AUTHOR.bio}</p>
        <div className="flex gap-3">
          <span className="text-xs font-medium px-2 py-1 bg-white border rounded-full text-slate-600">Travel Expert</span>
          <span className="text-xs font-medium px-2 py-1 bg-white border rounded-full text-slate-600">10+ Years Exp</span>
        </div>
      </div>
    </div>
  );
}

import { Bell, User, ShieldCheck, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-slate-200/60 bg-white/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="bg-brand-600 p-1.5 rounded-xl shadow-sm shadow-brand-200">
          <ShieldCheck className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-extrabold text-slate-900 tracking-tight">GigShield</span>
      </div>
      
      <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search for policies, claims..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-50 hover:text-brand-600 rounded-xl transition-all relative group">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand-500 rounded-full border-2 border-white group-hover:scale-110 transition-transform"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900 leading-none mb-1">Rahul Sharma</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Zomato Partner</p>
          </div>
          <button className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-700 font-bold border border-brand-100 hover:bg-brand-100 transition-colors">
            RS
          </button>
        </div>
      </div>
    </nav>
  );
}

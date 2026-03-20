import { LucideIcon } from 'lucide-react';

interface WorkerCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export default function WorkerCard({ title, value, icon: Icon, trend, trendUp }: WorkerCardProps) {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all glass group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700 blur-xl"></div>
      <div className="flex items-start justify-between relative">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{title}</p>
          <h3 className="text-3xl font-black text-slate-900 tracking-tighter font-mono">{value}</h3>
          {trend && (
            <div className={`flex items-center gap-1 mt-3 px-2 py-1 rounded-lg w-fit ${trendUp ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-50 text-slate-500 border border-slate-100'}`}>
              <span className="text-[10px] font-black uppercase tracking-wider">
                {trendUp ? '↑' : ''} {trend}
              </span>
            </div>
          )}
        </div>
        <div className="p-4 bg-brand-blue/10 rounded-2xl text-brand-blue border border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

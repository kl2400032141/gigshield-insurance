import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Shield, 
  FileText, 
  Calculator, 
  ShieldAlert,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Shield, label: 'Policy', path: '/policy' },
  { icon: FileText, label: 'Claims', path: '/claims' },
  { icon: Calculator, label: 'Calculator', path: '/calculator' },
  { icon: ShieldAlert, label: 'Admin', path: '/admin' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-200/60 bg-white h-[calc(100vh-64px)] flex flex-col sticky top-16 z-40">
      <div className="flex-1 py-8 px-4 space-y-2">
        <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-4">
          Main Menu
        </p>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
              isActive 
                ? "bg-brand-50 text-brand-700 shadow-sm shadow-brand-100/50" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                "group-hover:text-brand-600"
              )} />
              {item.label}
            </div>
            <ChevronRight className={cn(
              "w-4 h-4 opacity-0 -translate-x-2 transition-all duration-200",
              "group-hover:opacity-40 group-hover:translate-x-0"
            )} />
          </NavLink>
        ))}
      </div>
      
      <div className="p-4 border-t border-slate-100">
        <div className="bg-slate-50 rounded-2xl p-4 mb-4 border border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Support</p>
          <p className="text-xs text-slate-600 font-medium">Need help with a claim?</p>
          <button className="mt-2 text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors">
            Contact Support →
          </button>
        </div>
        
        <NavLink
          to="/login"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all w-full"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </NavLink>
      </div>
    </aside>
  );
}

import { Wallet, ShieldCheck, FileText, ArrowUpRight, X, Zap, Pause, Trash2, CreditCard, ChevronRight, Sparkles, ArrowUpCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import WorkerCard from '../components/WorkerCard';
import WeatherAlert from '../components/WeatherAlert';
import PolicyCard from '../components/PolicyCard';
import ClaimCard from '../components/ClaimCard';

export default function Dashboard() {
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome back, Rahul!</h1>
          <p className="text-slate-500 mt-1">Here's what's happening with your <span className="text-brand-600 font-semibold">GigShield</span> protection today.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/60 shadow-sm glass">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          System Live
        </div>
      </div>

      <WeatherAlert 
        message="Heavy rain predicted tomorrow in Bangalore. Your 'Rain Protection' claim will be automatically triggered if rainfall exceeds 10mm." 
        type="warning"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <WorkerCard 
          title="Weekly Premium" 
          value="₹149" 
          icon={Wallet} 
          trend="Next due in 3 days"
        />
        <WorkerCard 
          title="Coverage Amount" 
          value="₹5,000" 
          icon={ShieldCheck} 
          trend="Full protection active"
          trendUp
        />
        <WorkerCard 
          title="Claims This Month" 
          value="2" 
          icon={FileText} 
          trend="₹1,200 total payout"
          trendUp
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-600" />
              Active Policy
            </h2>
            <button 
              onClick={() => setIsManageModalOpen(true)}
              className="text-brand-600 text-xs font-bold flex items-center gap-1 hover:text-brand-700 transition-colors bg-brand-50 px-3 py-1.5 rounded-lg border border-brand-100"
            >
              Manage <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <PolicyCard 
            coverage="5,000" 
            premium="149" 
            status="Active" 
            expiryDate="24 Mar 2026" 
          />
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-600" />
              Latest Claims
            </h2>
            <button className="text-slate-500 text-xs font-bold flex items-center gap-1 hover:text-slate-900 transition-colors">
              View All <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="space-y-3">
            <ClaimCard 
              event="Heavy Rain Disruption" 
              amount="600" 
              status="Approved" 
              date="12 Mar 2026" 
            />
            <ClaimCard 
              event="Extreme Heat Alert" 
              amount="600" 
              status="Approved" 
              date="08 Mar 2026" 
            />
            <ClaimCard 
              event="Public Holiday Curfew" 
              amount="450" 
              status="Processing" 
              date="18 Mar 2026" 
            />
          </div>
        </section>
      </div>

      {/* Manage Policy Modal */}
      <AnimatePresence>
        {isManageModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsManageModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/40 glass max-h-[90vh] flex flex-col"
            >
              <div className="p-10 border-b border-slate-100/50 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-5">
                  <div className="p-3.5 bg-slate-900 rounded-2xl text-white shadow-xl shadow-slate-900/20">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Manage Policy</h2>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Policy ID: GS-8829-XQ</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsManageModalOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              <div className="p-10 space-y-4 overflow-y-auto">
                <button className="w-full flex items-center justify-between p-5 rounded-3xl border border-slate-100/50 hover:border-brand-500 hover:bg-brand-50/50 transition-all group glass">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-brand-50 rounded-2xl text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm">
                      <ArrowUpCircle className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-black text-slate-900 tracking-tight">Upgrade Plan</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mt-1">Increase coverage to ₹10,000</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 transition-colors" />
                </button>

                <button className="w-full flex items-center justify-between p-5 rounded-3xl border border-slate-100/50 hover:border-brand-500 hover:bg-brand-50/50 transition-all group glass">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-slate-50 rounded-2xl text-slate-600 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-black text-slate-900 tracking-tight">Payment Method</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mt-1">Manage UPI or Card details</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 transition-colors" />
                </button>

                <button className="w-full flex items-center justify-between p-5 rounded-3xl border border-slate-100/50 hover:border-amber-500 hover:bg-amber-50/50 transition-all group glass">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-amber-50 rounded-2xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-sm">
                      <Pause className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-black text-slate-900 tracking-tight">Pause Protection</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mt-1">Temporarily stop for 1 week</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-amber-500 transition-colors" />
                </button>

                <button className="w-full flex items-center justify-between p-5 rounded-3xl border border-slate-100/50 hover:border-red-500 hover:bg-red-50/50 transition-all group glass">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-red-50 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                      <Trash2 className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-black text-red-600 tracking-tight group-hover:text-white">Cancel Policy</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mt-1">Stop all future protections</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-red-500 transition-colors" />
                </button>
              </div>

              <div className="p-10 bg-slate-50/30 border-t border-slate-100/50 shrink-0">
                <button 
                  onClick={() => setIsManageModalOpen(false)}
                  className="w-full bg-slate-900 text-white font-black py-5 rounded-3xl hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/20 uppercase tracking-widest text-xs"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

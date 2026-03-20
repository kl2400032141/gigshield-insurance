import { ShieldCheck, Calendar, IndianRupee, X, CheckCircle2, Info, Download, FileBadge } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { generatePolicyPDF } from '../services/pdfService';

interface PolicyCardProps {
  coverage: string;
  premium: string;
  status: 'Active' | 'Pending' | 'Expired';
  expiryDate: string;
}

export default function PolicyCard({ coverage, premium, status, expiryDate }: PolicyCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    generatePolicyPDF({
      id: 'GS-8829-XQ',
      coverage,
      premium,
      expiryDate,
      status
    });
  };

  return (
    <>
      <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden relative group glass transition-all hover:shadow-2xl hover:shadow-brand-blue/10">
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700 blur-2xl"></div>
        
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-900 rounded-2xl text-white shadow-lg shadow-slate-900/30 group-hover:rotate-12 transition-transform">
                <FileBadge className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-xl tracking-tight">Active Policy</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Standard Plan</p>
              </div>
            </div>
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${
              status === 'Active' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 
              status === 'Pending' ? 'bg-amber-100 text-amber-700 border border-amber-200' : 'bg-slate-100 text-slate-700 border border-slate-200'
            }`}>
              {status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Coverage</p>
              <div className="flex items-center gap-1 text-slate-900 font-black text-2xl font-mono tracking-tighter">
                <IndianRupee className="w-5 h-5 text-brand-blue" />
                {coverage}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Premium</p>
              <div className="flex items-center gap-1 text-slate-900 font-black text-2xl font-mono tracking-tighter">
                <IndianRupee className="w-5 h-5 text-brand-blue" />
                {premium}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
              <Calendar className="w-4 h-4 text-brand-blue" />
              <span className="font-mono">{expiryDate}</span>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-blue transition-all active:scale-95 shadow-lg shadow-slate-900/10"
            >
              Details
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-900 rounded-xl text-white">
                    <FileBadge className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Policy Details</h2>
                    <p className="text-xs text-slate-500">ID: GS-8829-XQ • Standard Plan</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              <div className="p-8 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Coverage</p>
                    <p className="text-2xl font-bold text-slate-900 flex items-center gap-1">
                      <IndianRupee className="w-5 h-5" />
                      {coverage}
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Premium</p>
                    <p className="text-2xl font-bold text-slate-900 flex items-center gap-1">
                      <IndianRupee className="w-5 h-5" />
                      {premium}
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Renewal</p>
                    <p className="text-2xl font-bold text-slate-900">{expiryDate.split(' ')[0]} {expiryDate.split(' ')[1]}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    Coverage Benefits
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Heavy Rainfall (>10mm/day)",
                      "Extreme Heat (>42°C)",
                      "Severe Air Pollution (AQI >400)",
                      "Public Holidays & Curfews",
                      "Platform Technical Outages",
                      "Accidental Injury during work"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg h-fit">
                    <Info className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1 text-sm">AI-Triggered Payouts</h4>
                    <p className="text-xs text-blue-800 opacity-80 leading-relaxed">
                      GigShield uses real-time weather and city data to automatically trigger claims. 
                      You don't need to file a claim manually for weather disruptions. 
                      Payouts are credited to your wallet within 2 hours of the event.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-3">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                >
                  Close Details
                </button>
                <button 
                  onClick={handleDownload}
                  className="flex-1 bg-white text-slate-900 border border-slate-200 font-bold py-3 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-brand-blue" />
                  Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

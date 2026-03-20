import { ShieldCheck, CheckCircle2, Calendar, FileText, Info, X, CreditCard, Wallet, Zap, Download } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { generatePolicyPDF } from '../services/pdfService';

export default function Policy() {
  const [isRenewModalOpen, setIsRenewModalOpen] = useState(false);
  const [isRenewing, setIsRenewing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownload = () => {
    generatePolicyPDF({
      id: 'GS-8829-XQ',
      coverage: '5,000',
      premium: '149',
      expiryDate: '24 Mar 2026',
      status: 'Active'
    });
  };

  const handleRenew = () => {
    setIsRenewing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsRenewing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const closeModals = () => {
    setIsRenewModalOpen(false);
    setIsSuccess(false);
    setIsRenewing(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Your Policy</h1>
        <p className="text-slate-500">Detailed information about your active GigShield protection.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden mb-8 glass">
        <div className="bg-gradient-to-br from-brand-blue to-blue-700 p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>
          
          <div className="relative flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-inner">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight">Standard Protection</h2>
                <p className="text-blue-100/80 font-mono text-sm tracking-widest uppercase">Policy ID: GS-8829-XQ</p>
              </div>
            </div>
            <span className="bg-emerald-400/90 backdrop-blur-md text-emerald-950 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-emerald-900/20 w-fit">
              Active
            </span>
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-1">
              <p className="text-blue-100/60 text-[10px] font-black uppercase tracking-[0.2em]">Coverage Amount</p>
              <p className="text-4xl font-black font-mono tracking-tighter">₹5,000</p>
            </div>
            <div className="space-y-1">
              <p className="text-blue-100/60 text-[10px] font-black uppercase tracking-[0.2em]">Weekly Premium</p>
              <p className="text-4xl font-black font-mono tracking-tighter">₹149</p>
            </div>
            <div className="space-y-1">
              <p className="text-blue-100/60 text-[10px] font-black uppercase tracking-[0.2em]">Next Renewal</p>
              <p className="text-4xl font-black font-mono tracking-tighter">24 Mar</p>
            </div>
          </div>
        </div>

        <div className="p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-brand-blue rounded-full"></div>
            <h3 className="font-black text-slate-900 text-xl tracking-tight">Coverage Benefits</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              { label: "Heavy Rainfall", value: ">10mm/day", icon: Zap },
              { label: "Extreme Heat", value: ">42°C", icon: Zap },
              { label: "Air Pollution", value: "AQI >400", icon: Zap },
              { label: "Public Holidays", value: "Full Coverage", icon: Zap },
              { label: "Platform Outage", value: "Technical", icon: Zap },
              { label: "Accidental Injury", value: "Medical", icon: Zap }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-brand-blue/30 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">{item.label}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 p-8 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative flex gap-6">
              <div className="p-3 bg-brand-blue/20 rounded-2xl h-fit border border-brand-blue/30">
                <Info className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <h4 className="font-black text-white mb-2 text-lg tracking-tight">AI-Triggered Payouts</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  GigShield uses real-time weather and city data to automatically trigger claims. 
                  You don't need to file a claim manually for weather disruptions. 
                  Payouts are credited to your wallet within <span className="text-brand-blue font-bold">2 hours</span> of the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => setIsRenewModalOpen(true)}
          className="flex-[2] bg-brand-blue text-white font-black py-5 rounded-[1.5rem] transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-blue/20 active:scale-[0.98]"
        >
          <Calendar className="w-6 h-6" />
          Renew Protection Plan
        </button>
        <button 
          onClick={handleDownload}
          className="flex-1 bg-white text-slate-900 border border-slate-200 font-black py-5 rounded-[1.5rem] hover:bg-slate-50 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
        >
          <Download className="w-6 h-6 text-brand-blue" />
          Certificate
        </button>
      </div>

      {/* Renew Policy Modal */}
      <AnimatePresence>
        {isRenewModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModals}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {!isSuccess ? (
                <>
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-600 rounded-xl text-white">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">Renew Policy</h2>
                    </div>
                    <button 
                      onClick={closeModals}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-slate-400" />
                    </button>
                  </div>

                  <div className="p-6 space-y-6 overflow-y-auto">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-500 font-medium">Weekly Premium</span>
                        <span className="text-lg font-bold text-slate-900">₹149</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500 font-medium">New Expiry Date</span>
                        <span className="text-sm font-bold text-blue-600">31 Mar 2026</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Select Payment Method</h3>
                      <div className="space-y-3">
                        <button className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-blue-600 bg-blue-50 transition-all">
                          <div className="flex items-center gap-3">
                            <Zap className="w-5 h-5 text-blue-600" />
                            <span className="font-bold text-slate-900">UPI (GPay, PhonePe)</span>
                          </div>
                          <div className="w-5 h-5 rounded-full border-4 border-blue-600"></div>
                        </button>
                        <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-200 transition-all">
                          <div className="flex items-center gap-3">
                            <CreditCard className="w-5 h-5 text-slate-400" />
                            <span className="font-bold text-slate-700">Credit / Debit Card</span>
                          </div>
                          <div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
                        </button>
                        <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-200 transition-all">
                          <div className="flex items-center gap-3">
                            <Wallet className="w-5 h-5 text-slate-400" />
                            <span className="font-bold text-slate-700">GigShield Wallet</span>
                          </div>
                          <div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
                        </button>
                      </div>
                    </div>

                    <button 
                      onClick={handleRenew}
                      disabled={isRenewing}
                      className="w-full bg-brand-blue text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isRenewing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        <>Pay ₹149 & Renew</>
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <div className="p-10 text-center">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Policy Renewed!</h2>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    Your protection has been extended until 31 Mar 2026. 
                    A confirmation has been sent to your phone.
                  </p>
                  <button 
                    onClick={closeModals}
                    className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-slate-800 transition-all"
                  >
                    Back to Policy
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

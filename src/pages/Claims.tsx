import { FileText, Search, Filter, IndianRupee, Clock, CheckCircle2, XCircle, X, Upload, AlertCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ClaimCard from '../components/ClaimCard';

const initialClaims = [
  { id: 1, event: "Heavy Rain Disruption", amount: "600", status: "Approved", date: "12 Mar 2026" },
  { id: 2, event: "Extreme Heat Alert", amount: "600", status: "Approved", date: "08 Mar 2026" },
  { id: 3, event: "Public Holiday Curfew", amount: "450", status: "Processing", date: "18 Mar 2026" },
  { id: 4, event: "Platform Outage (2hrs)", amount: "300", status: "Approved", date: "01 Mar 2026" },
  { id: 5, event: "Accidental Injury", amount: "2,500", status: "Rejected", date: "24 Feb 2026" },
];

export default function Claims() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [claims, setClaims] = useState(initialClaims);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Add new claim to list (mock)
      const newClaim = {
        id: claims.length + 1,
        event: "Manual Claim Submission",
        amount: "1,200",
        status: "Processing",
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
      };
      setClaims([newClaim, ...claims]);
    }, 2000);
  };

  const closeModals = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Claims History</h1>
          <p className="text-slate-500">Track your automatic and manual claim payouts.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200"
        >
          <FileText className="w-5 h-5" />
          File New Claim
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/40 glass relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Total Paid</span>
            </div>
            <p className="text-4xl font-black text-slate-900 flex items-center gap-1 font-mono tracking-tighter">
              <IndianRupee className="w-6 h-6 text-emerald-500" />
              4,450
            </p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/40 glass relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-100 rounded-2xl text-amber-600">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Processing</span>
            </div>
            <p className="text-4xl font-black text-slate-900 flex items-center gap-1 font-mono tracking-tighter">
              <IndianRupee className="w-6 h-6 text-amber-500" />
              450
            </p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/40 glass relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-2xl text-red-600">
                <XCircle className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Rejected</span>
            </div>
            <p className="text-4xl font-black text-slate-900 font-mono tracking-tighter">1</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden glass">
        <div className="p-8 border-b border-slate-100 flex flex-col sm:flex-row gap-6 justify-between items-center bg-slate-50/50">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by event or ID..."
              className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm font-medium transition-all"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-slate-200 text-sm font-black text-slate-600 hover:bg-white hover:shadow-md transition-all uppercase tracking-widest">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="p-8 space-y-4">
          {claims.map((claim) => (
            <ClaimCard 
              key={claim.id}
              event={claim.event}
              amount={claim.amount}
              status={claim.status as any}
              date={claim.date}
            />
          ))}
        </div>
      </div>

      {/* File New Claim Modal */}
      <AnimatePresence>
        {isModalOpen && (
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
                        <FileText className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">File New Claim</h2>
                    </div>
                    <button 
                      onClick={closeModals}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-slate-400" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Claim Reason</label>
                        <select className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-medium">
                          <option>Accidental Injury</option>
                          <option>Vehicle Damage</option>
                          <option>Medical Emergency</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Event Date</label>
                        <input type="date" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-medium" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Estimated Amount (₹)</label>
                      <input type="number" placeholder="e.g. 5000" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-medium" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Description</label>
                      <textarea rows={3} placeholder="Describe what happened..." className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm font-medium resize-none"></textarea>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Evidence (Photos/Docs)</label>
                      <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer bg-slate-50">
                        <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-xs text-slate-500 font-medium">Click to upload or drag and drop files</p>
                        <p className="text-[10px] text-slate-400 mt-1">PNG, JPG, PDF up to 5MB</p>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-xl flex gap-3 border border-amber-100">
                      <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                      <p className="text-xs text-amber-800 leading-relaxed">
                        Manual claims are reviewed by our team within 24-48 hours. 
                        Weather-related claims are automatic and don't need manual filing.
                      </p>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>Submit Claim</>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="p-10 text-center">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Claim Filed!</h2>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    Your claim has been submitted successfully. 
                    You can track its status in the claims history list.
                  </p>
                  <button 
                    onClick={closeModals}
                    className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-slate-800 transition-all"
                  >
                    Back to Claims
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

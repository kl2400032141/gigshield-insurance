import { useState } from 'react';
import { Calculator as CalcIcon, IndianRupee, Zap, ShieldCheck, AlertCircle, Loader2, CloudRain, Activity, TrendingUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Calculator() {
  const [income, setIncome] = useState<string>('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<{
    riskScore: number;
    premium: number;
    coverage: number;
    riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  } | null>(null);

  const calculate = () => {
    const inc = parseFloat(income);
    if (isNaN(inc) || inc <= 0) return;

    setIsCalculating(true);
    setResult(null);

    // Simulate AI calculation
    setTimeout(() => {
      const riskScore = Math.floor(Math.random() * (95 - 65 + 1)) + 65;
      const riskLevel = riskScore > 85 ? 'HIGH' : riskScore > 75 ? 'MEDIUM' : 'LOW';
      
      setResult({
        riskScore,
        premium: Math.round(inc * (riskScore / 2500)), // ~3-4% of income
        coverage: Math.round(inc * 1.5),
        riskLevel
      });
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Premium Calculator</h1>
        <p className="text-slate-500">Find the perfect protection plan based on your average weekly earnings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 h-fit glass relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          
          <div className="relative flex items-center gap-4 mb-10">
            <div className="p-4 bg-slate-900 rounded-2xl text-white shadow-lg shadow-slate-900/30">
              <CalcIcon className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Plan Calculator</h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">AI-Powered Risk Engine</p>
            </div>
          </div>

          <div className="space-y-8 relative">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Weekly Income (Avg)</label>
              <div className="relative group">
                <IndianRupee className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-blue transition-transform group-focus-within:scale-110" />
                <input 
                  type="number" 
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  placeholder="e.g. 5000"
                  className="w-full pl-14 pr-6 py-5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue text-2xl font-black font-mono tracking-tighter transition-all bg-slate-50/50"
                />
              </div>
            </div>

            <button 
              onClick={calculate}
              disabled={isCalculating || !income}
              className="w-full bg-brand-blue text-white font-black py-5 rounded-[1.5rem] hover:bg-blue-700 transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-3 disabled:opacity-70 active:scale-[0.98]"
            >
              {isCalculating ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Analyzing Risk Profile...
                </>
              ) : (
                <>
                  Calculate Premium
                  <Zap className="w-6 h-6" />
                </>
              )}
            </button>

            <div className="flex gap-4 p-6 bg-slate-900 rounded-[1.5rem] border border-slate-800 shadow-inner">
              <AlertCircle className="w-6 h-6 text-brand-blue shrink-0" />
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Premiums are calculated using <span className="text-white font-bold">real-time weather risk</span>, platform volatility, and your income level.
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            {isCalculating ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-brand-blue/5 rounded-[2.5rem] border-2 border-dashed border-brand-blue/20 glass"
              >
                <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 border-4 border-brand-blue/10 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-brand-blue rounded-full border-t-transparent animate-spin"></div>
                  <Sparkles className="absolute inset-0 m-auto w-10 h-10 text-brand-blue animate-pulse" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">AI Risk Engine Active</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">Analyzing historical weather patterns and platform volatility for your specific region...</p>
              </motion.div>
            ) : result ? (
              <motion.div 
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 glass relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue/5 rounded-full -mr-20 -mt-20 blur-2xl"></div>
                  
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Your AI Risk Profile</p>
                  
                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <h3 className="text-6xl font-black text-brand-blue font-mono tracking-tighter">{result.riskScore}%</h3>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Risk Confidence</p>
                    </div>
                    <div className={`w-28 h-28 rounded-full border-[10px] flex items-center justify-center rotate-45 transition-all shadow-lg ${
                      result.riskLevel === 'HIGH' ? 'border-red-50 border-t-red-500 shadow-red-100' : 
                      result.riskLevel === 'MEDIUM' ? 'border-amber-50 border-t-amber-500 shadow-amber-100' : 
                      'border-emerald-50 border-t-emerald-500 shadow-emerald-100'
                    }`}>
                      <span className={`text-sm font-black -rotate-45 uppercase tracking-widest ${
                        result.riskLevel === 'HIGH' ? 'text-red-600' : 
                        result.riskLevel === 'MEDIUM' ? 'text-amber-600' : 
                        'text-emerald-600'
                      }`}>{result.riskLevel}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 group hover:border-brand-blue/30 transition-all">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Weekly Premium</p>
                      <p className="text-3xl font-black text-slate-900 flex items-center gap-1 font-mono tracking-tighter">
                        <IndianRupee className="w-6 h-6 text-brand-blue" />
                        {result.premium}
                      </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 group hover:border-emerald-300/30 transition-all">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Max Coverage</p>
                      <p className="text-3xl font-black text-slate-900 flex items-center gap-1 font-mono tracking-tighter">
                        <IndianRupee className="w-6 h-6 text-emerald-500" />
                        {result.coverage}
                      </p>
                    </div>
                  </div>

                  <button className="w-full mt-8 bg-slate-900 text-white font-black py-5 rounded-[1.5rem] hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/20 active:scale-[0.98]">
                    <ShieldCheck className="w-6 h-6 text-brand-blue" />
                    Get Protected Now
                  </button>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-200/30 glass">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-6 bg-brand-blue rounded-full"></div>
                    <h4 className="font-black text-slate-900 tracking-tight">Calculation Factors</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-sm text-slate-600 flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-brand-blue/10 transition-colors">
                        <CloudRain className="w-5 h-5 text-brand-blue" />
                      </div>
                      <span className="font-medium">{result.riskLevel === 'HIGH' ? 'High' : 'Moderate'} rainfall risk in your region</span>
                    </li>
                    <li className="text-sm text-slate-600 flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-brand-blue/10 transition-colors">
                        <Activity className="w-5 h-5 text-brand-blue" />
                      </div>
                      <span className="font-medium">Platform volatility score: <span className="font-black text-slate-900">{result.riskLevel === 'HIGH' ? 'High' : 'Medium'}</span></span>
                    </li>
                    <li className="text-sm text-slate-600 flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-brand-blue/10 transition-colors">
                        <TrendingUp className="w-5 h-5 text-brand-blue" />
                      </div>
                      <span className="font-medium">Income protection factor: <span className="font-black text-slate-900">1.5x</span></span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-10 bg-slate-100/50 rounded-[2.5rem] border-2 border-dashed border-slate-200 glass"
              >
                <div className="p-6 bg-white rounded-3xl shadow-xl shadow-slate-200/50 mb-6">
                  <CalcIcon className="w-12 h-12 text-brand-blue" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Ready to calculate?</h3>
                <p className="text-sm text-slate-500 font-medium max-w-[250px] mx-auto">Enter your weekly income to see your personalized protection plan.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { AlertCircle, CheckCircle2, Clock, IndianRupee } from 'lucide-react';

interface ClaimCardProps {
  event: string;
  amount: string;
  status: 'Approved' | 'Processing' | 'Rejected';
  date: string;
}

const ClaimCard: React.FC<ClaimCardProps> = ({ event, amount, status, date }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'Approved': return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'Processing': return <Clock className="w-5 h-5 text-amber-500" />;
      case 'Rejected': return <AlertCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'Approved': return 'text-emerald-700 bg-emerald-50';
      case 'Processing': return 'text-amber-700 bg-amber-50';
      case 'Rejected': return 'text-red-700 bg-red-50';
    }
  };

  return (
    <div className="bg-white p-5 rounded-[1.5rem] border border-slate-200 flex items-center justify-between hover:border-brand-blue/30 transition-all hover:shadow-lg hover:shadow-slate-200/50 group">
      <div className="flex items-center gap-5">
        <div className={`p-3 rounded-2xl shadow-sm group-hover:scale-110 transition-transform ${getStatusColor()}`}>
          {getStatusIcon()}
        </div>
        <div>
          <h4 className="font-black text-slate-900 tracking-tight">{event}</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">{date}</p>
        </div>
      </div>
      
      <div className="text-right">
        <div className="flex items-center justify-end gap-1 text-slate-900 font-black text-lg font-mono tracking-tighter">
          <IndianRupee className="w-4 h-4 text-brand-blue" />
          {amount}
        </div>
        <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-sm border ${
          status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
          status === 'Processing' ? 'bg-amber-50 text-amber-700 border-amber-100' : 
          'bg-red-50 text-red-700 border-red-100'
        }`}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default ClaimCard;

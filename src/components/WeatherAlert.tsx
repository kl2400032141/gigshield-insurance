import { CloudRain, AlertTriangle, X } from 'lucide-react';
import { useState } from 'react';

interface WeatherAlertProps {
  message: string;
  type?: 'warning' | 'info';
}

export default function WeatherAlert({ message, type = 'warning' }: WeatherAlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={`p-4 rounded-2xl flex items-center justify-between mb-6 animate-in fade-in slide-in-from-top-4 duration-500 ${
      type === 'warning' ? 'bg-amber-50 border border-amber-200 text-amber-800' : 'bg-blue-50 border border-blue-200 text-blue-800'
    }`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-xl ${type === 'warning' ? 'bg-amber-100' : 'bg-blue-100'}`}>
          {type === 'warning' ? <AlertTriangle className="w-5 h-5" /> : <CloudRain className="w-5 h-5" />}
        </div>
        <div>
          <p className="text-sm font-bold">Weather Alert Prediction</p>
          <p className="text-sm opacity-90">{message}</p>
        </div>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="p-1 hover:bg-black/5 rounded-lg transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

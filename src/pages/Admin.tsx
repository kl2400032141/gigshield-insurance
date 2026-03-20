import { Users, FileText, ShieldAlert, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'Mon', claims: 45, premium: 120 },
  { name: 'Tue', claims: 52, premium: 135 },
  { name: 'Wed', claims: 38, premium: 110 },
  { name: 'Thu', claims: 65, premium: 160 },
  { name: 'Fri', claims: 48, premium: 140 },
  { name: 'Sat', claims: 72, premium: 190 },
  { name: 'Sun', claims: 85, premium: 210 },
];

export default function Admin() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Admin Overview</h1>
        <p className="text-slate-500">System-wide performance and risk monitoring.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Users className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3 mr-1" /> 12%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Total Workers</p>
          <h3 className="text-3xl font-bold text-slate-900">52,840</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <FileText className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3 mr-1" /> 8%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Total Claims</p>
          <h3 className="text-3xl font-bold text-slate-900">1,245</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-red-50 rounded-lg text-red-600">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              <ArrowDownRight className="w-3 h-3 mr-1" /> 4%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Fraud Alerts</p>
          <h3 className="text-3xl font-bold text-slate-900">14</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Claims Distribution (Weekly)
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="claims" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            Premium Collection (Weekly)
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Line type="monotone" dataKey="premium" stroke="#10b981" strokeWidth={3} dot={{fill: '#10b981', r: 4}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-bold text-slate-900">Recent System Alerts</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { msg: "High risk of heavy rain in Mumbai for next 48 hours.", type: "warning", time: "2 mins ago" },
            { msg: "Automatic payout of ₹1.2L processed for 200 workers in Chennai.", type: "success", time: "15 mins ago" },
            { msg: "Anomalous claim pattern detected from 3 users in Delhi.", type: "danger", time: "1 hour ago" }
          ].map((alert, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  alert.type === 'warning' ? 'bg-amber-500' : 
                  alert.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
                }`}></div>
                <p className="text-sm font-medium text-slate-700">{alert.msg}</p>
              </div>
              <span className="text-xs text-slate-400 font-medium">{alert.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

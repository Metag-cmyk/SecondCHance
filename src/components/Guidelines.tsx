import { guidelines } from '../data/guidelines';
import ReactMarkdown from 'react-markdown';

export default function Guidelines() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Diagnostic Guidelines</h2>
        <p className="text-slate-500 mt-1">Current AHA/ACC and ESC guidelines summaries.</p>
      </div>

      <div className="grid gap-6">
        {guidelines.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <div className="text-xs font-semibold tracking-wider text-rose-600 uppercase mb-1">
                {item.category}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            </div>
            <div className="p-6 prose prose-slate prose-sm max-w-none">
              <ReactMarkdown>{item.content}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

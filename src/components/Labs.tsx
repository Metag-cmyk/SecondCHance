import { labs } from '../data/labs';
import ReactMarkdown from 'react-markdown';

export default function Labs() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Labs & Values</h2>
        <p className="text-slate-500 mt-1">Normal values and clinical derangements for cardiovascular biomarkers.</p>
      </div>

      <div className="grid gap-6">
        {labs.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
              <p className="text-sm text-slate-600 mt-1">
                <span className="font-medium">Normal:</span> {item.normal}
              </p>
            </div>
            <div className="p-6 prose prose-slate prose-sm max-w-none">
              <ReactMarkdown>{item.derangement}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

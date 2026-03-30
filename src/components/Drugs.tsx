import { drugs } from '../data/drugs';
import ReactMarkdown from 'react-markdown';

export default function Drugs() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Pharmacology</h2>
        <p className="text-slate-500 mt-1">Common cardiovascular medications, indications, and dosages.</p>
      </div>

      <div className="grid gap-6">
        {drugs.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                  <div className="text-sm font-medium text-rose-600 mt-1">{item.class}</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-2">
                <span className="font-medium">Indication:</span> {item.indication}
              </p>
            </div>
            <div className="p-6 prose prose-slate prose-sm max-w-none">
              <ReactMarkdown>{item.dosage}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

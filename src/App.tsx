/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Activity, Heart, Stethoscope, Pill, Menu, X } from 'lucide-react';
import { cn } from './lib/utils';
import Guidelines from './components/Guidelines';
import Imaging from './components/Imaging';
import Labs from './components/Labs';
import Drugs from './components/Drugs';

type Tab = 'guidelines' | 'imaging' | 'labs' | 'drugs';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('guidelines');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'guidelines', label: 'Guidelines', icon: Activity },
    { id: 'imaging', label: 'Imaging & Echo', icon: Heart },
    { id: 'labs', label: 'Labs & Values', icon: Stethoscope },
    { id: 'drugs', label: 'Pharmacology', icon: Pill },
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case 'guidelines': return <Guidelines />;
      case 'imaging': return <Imaging />;
      case 'labs': return <Labs />;
      case 'drugs': return <Drugs />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-200">
          <div className="flex items-center gap-2 text-rose-600 font-semibold text-lg">
            <Heart className="w-6 h-6 fill-current" />
            CardioCompanion
          </div>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  isActive 
                    ? "bg-rose-50 text-rose-700" 
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive ? "text-rose-600" : "text-slate-400")} />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="flex items-center h-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 md:hidden">
          <button 
            className="p-2 -ml-2 text-slate-500 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="ml-4 text-lg font-semibold text-slate-900">
            {tabs.find(t => t.id === activeTab)?.label}
          </h1>
        </header>
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

import React from 'react';

const LoadingModal: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 bg-opacity-75 backdrop-blur-sm"
      aria-labelledby="loading-modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-slate-800 text-slate-200 shadow-xl rounded-lg p-6 m-4 w-full max-w-xs text-center">
        <div className="sapra-loader mb-4">
          <svg width="48" height="48" viewBox="0 0 48 48" className="mx-auto">
            <circle cx="24" cy="24" r="20" fill="none" strokeWidth="4" strokeLinecap="round" strokeDasharray="31.4 31.4" strokeDashoffset="0" className="stroke-sky-400 animate-spin-fast"></circle>
            <circle cx="24" cy="24" r="12" fill="none" strokeWidth="4" strokeLinecap="round" strokeDasharray="18.8 18.8" strokeDashoffset="0" className="stroke-slate-600 animate-spin-slow-rev"></circle>
          </svg>
        </div>
        <div id="loading-modal-title" className="font-semibold text-sky-400 mb-1">Loading data...</div>
        <div className="text-slate-400 text-sm">Please wait a moment.</div>
      </div>
      {/* 
        The keyframes for 'animate-spin-fast' and 'animate-spin-slow-rev' referenced by the SVG circles
        need to be defined in a global CSS file (e.g., index.css or App.css) if they are not already 
        part of Tailwind CSS or another global stylesheet.
        For example:
        .animate-spin-fast { animation: spin 1s linear infinite; }
        .animate-spin-slow-rev { animation: spinRev 1.2s linear infinite; }
        @keyframes spin {
            0% { transform: rotate(0deg); stroke-dashoffset: 31.4; }
            50% { stroke-dashoffset: 0; }
            100% { transform: rotate(360deg); stroke-dashoffset: 31.4; }
        }
        @keyframes spinRev {
            0% { transform: rotate(360deg); stroke-dashoffset: 18.8; }
            50% { stroke-dashoffset: 0; }
            100% { transform: rotate(0deg); stroke-dashoffset: 18.8; }
        }
      */}
    </div>
  );
};

export default LoadingModal;
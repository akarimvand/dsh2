import React from 'react';
import SearchIcon from '../icons/SearchIcon'; // Assuming creation of this icon

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void; // Added for completeness, though not used by a button within sidebar in this version
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  // Placeholder for tree view interactive elements hover
  const handleInteractiveHover = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const x = e.clientX - rect.left;
    const percentY = y / rect.height;
    const percentX = x / rect.width;
    const maxTiltY = (target.tagName === 'IMG') ? 15 : 10;
    const maxTiltX = (target.tagName === 'IMG') ? 10 : 5;
    const tiltX = -percentY * maxTiltY + (maxTiltY / 2);
    const tiltY = percentX * maxTiltX - (maxTiltX / 2);
    target.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
  };

  const handleInteractiveLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = '';
  };


  return (
    <aside
      id="sidebar"
      className={`fixed top-0 left-0 h-full w-72 lg:w-80 bg-slate-800 text-slate-300 p-0 flex flex-col transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      role="complementary"
    >
      <div className="p-6 text-center border-b border-slate-700 mb-4">
        <div className="flex items-center justify-center">
          <a href="SAPRABOT.HTML" target="_blank" rel="noopener noreferrer">
            <img
              src="/SAPRA_WHITE-100.png"
              alt="SAPRA Logo"
              className="h-24 mx-auto mb-2"
              style={{ transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)', willChange: 'transform' }}
              onMouseMove={handleInteractiveHover}
              onMouseLeave={handleInteractiveLeave}
              onError={(e) => (e.currentTarget.style.display='none')}
            />
          </a>
        </div>
        {/* The class "slogan-animation" below needs to be defined in a global CSS file for the animation to work. */}
        <p className="text-sm text-slate-100 slogan-animation">Smart Access to Project Activities</p>
      </div>

      <div className="px-6 mb-4">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
            <SearchIcon className="w-4 h-4" />
          </span>
          <input
            type="text"
            id="searchInput"
            className="w-full bg-slate-700 border border-slate-600 text-slate-200 placeholder-slate-500 text-sm rounded-md pl-10 pr-4 py-2 focus:ring-sky-500 focus:border-sky-500"
            placeholder="Search system..."
            aria-label="Search system or subsystem"
          />
        </div>
      </div>

      <div id="treeView" className="flex-grow overflow-y-auto px-2 pb-4" role="tree" aria-label="System and Subsystem Navigation">
        {/* Tree nodes will be injected here by JavaScript (or React state later) */}
        <p className="p-4 text-sm text-slate-500">Tree view placeholder...</p>
      </div>

      <footer className="p-6 mt-auto border-t border-slate-700 text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-200 mb-0">Developed by Amin Naseri</p>
        <p
          className="mb-0 text-slate-400 hover:text-sky-400 cursor-pointer"
          style={{ transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)', willChange: 'transform' }}
          onMouseMove={handleInteractiveHover}
          onMouseLeave={handleInteractiveLeave}
        >
          Contact Email: akarimvand@gmail.com
        </p>
        <p
          className="mb-0 text-slate-400 hover:text-sky-400 cursor-pointer"
          style={{ transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)', willChange: 'transform' }}
          onMouseMove={handleInteractiveHover}
          onMouseLeave={handleInteractiveLeave}
        >
          Contact Phone: +989366302800
        </p>
      </footer>
    </aside>
  );
};

export default Sidebar;
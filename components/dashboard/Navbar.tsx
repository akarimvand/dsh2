import React from 'react';
import MenuIcon from '../icons/MenuIcon'; // To be created
import FileEarmarkExcelIcon from '../icons/FileEarmarkExcelIcon'; // To be created
import BoxSeamIcon from '../icons/BoxSeamIcon'; // To be created

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  // Placeholder for dashboard title interactive hover
  const handleTitleHover = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    // Simplified hover effect for brevity, can be expanded like in Sidebar.tsx
    target.style.transform = 'scale(1.03)';
    target.style.transition = 'transform 0.2s ease-out';
  };

  const handleTitleLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'scale(1)';
  };


  return (
    <nav className="sticky top-0 bg-slate-800 shadow-md p-4 z-20 print:hidden">
      <div className="container-fluid mx-auto flex items-center justify-between">
        <button
          id="sidebarToggle"
          className="lg:hidden text-slate-200 hover:text-sky-400 focus:outline-none"
          onClick={toggleSidebar}
          aria-controls="sidebar"
          aria-expanded="false" // This should be dynamic based on sidebar state if possible from parent
          aria-label="Toggle sidebar navigation"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
        <div id="dashboardTitleContainer" className="text-center lg:text-left flex-grow lg:ml-4">
          <h5
            className="text-lg font-semibold text-slate-100 mb-0"
            id="dashboardTitle"
            style={{ transition: 'transform 0.4s cubic-bezier(.4,2,.6,1)', willChange: 'transform', display: 'inline-block' }}
            onMouseMove={handleTitleHover}
            onMouseLeave={handleTitleLeave}
          >
            Dashboard
          </h5>
        </div>
        <div className="flex items-center space-x-3">
          <button
            id="exportExcelBtn"
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-3 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            <FileEarmarkExcelIcon className="w-4 h-4 mr-1.5" />
            Export to Excel
          </button>
          <span
            id="totalItemsBadge"
            className="bg-sky-500 text-white text-xs font-semibold px-2.5 py-1.5 rounded-full flex items-center cursor-pointer"
          >
            <BoxSeamIcon className="w-4 h-4 mr-1.5" />
            <span id="totalItemsCounter">0</span>&nbsp;items
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import MainContentArea from './MainContentArea';
import LoadingModal from './LoadingModal'; // Assuming we'll create this

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // To simulate initial data load

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Match loading time from dashboard.html
    return () => clearTimeout(timer);
  }, []);

  // Check screen size on mount and on resize to set initial sidebar state for desktop
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 1024) { // Tailwind's lg breakpoint
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-slate-900 text-slate-200 font-roboto_app"> {/* Changed font to avoid conflict with dashboard.html if both are somehow loaded */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        id="sidebarOverlay"
        className={`fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen && window.innerWidth < 1024 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      ></div>
      <MainContentArea toggleSidebar={toggleSidebar} isSidebarOpenOnDesktop={window.innerWidth >= 1024 && isSidebarOpen} />
      {/* Loading Modal - Will be fleshed out later */}
      {isLoading && <LoadingModal />}
    </div>
  );
};

// Add a simple style to index.html or a global CSS for font-roboto_app if it doesn't exist
// For now, assuming 'font-roboto' from dashboard.html might conflict if this React app
// is embedded or tested alongside. A unique name like 'font-roboto_app' is safer for isolation.
// If this React app is standalone, `font-roboto` is fine.
// Let's assume index.html already loads Roboto, so we can use Tailwind's default sans font which should pick it up.
// So, removing font-roboto_app and relying on Tailwind's default which should be Roboto.

export default DashboardLayout;

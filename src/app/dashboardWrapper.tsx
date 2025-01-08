"use client";

import React, { useEffect } from 'react';
import Navbar from '@/app/(components)/Navbar';
import Sidebar from '@/app/(components)/Sidebar';
import StoreProvider, { useAppSelector } from './redux';

const DashboardLayout = ({ children } : {children: React.ReactNode}) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className='flex min-h-screen w-full bg-slate-50 text-slate-900'>
      <Sidebar />
      <main 
        className={`flex w-full flex-col bg-slate-50 dark:bg-dark-bg ${
          isSidebarCollapsed ? "" : "md:pl-64"
        }`}
      >
        <Navbar />
        { children }
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children } : {children: React.ReactNode}) => {
  return (
    <StoreProvider>
      <DashboardLayout>
        { children }
      </DashboardLayout>
    </StoreProvider>
  );
}

export default DashboardWrapper;

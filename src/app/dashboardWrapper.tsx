import React from 'react';
import Navbar from '@/app/(components)/Navbar';
import Sidebar from '@/app/(components)/Sidebar';

const DashboardWrapper = ({ children } : {children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen w-full bg-slate-50 text-slate-900'>
      <Sidebar />
      <main className='flex w-full flex-col bg-slate-50 dark:bg-dark-bg md:pl-64'>
        <Navbar />
        { children }
      </main>
    </div>
  );
};

export default DashboardWrapper;

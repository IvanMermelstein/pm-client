import React from 'react';

const DashboardWrapper = ({ children } : {children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen w-full bg-slate-50 text-slate-900'>
      { /* sidebar */ }
      <main className='flex w-full flex-col bg-slate-50 dark:bg-dark-bg md:pl-64'>
        { /* navbar */ }
        { children }
      </main>
    </div>
  );
};

export default DashboardWrapper;

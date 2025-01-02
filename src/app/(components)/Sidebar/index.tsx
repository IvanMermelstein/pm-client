"use client";
import { useState } from "react";
import Image from "next/image";
import { LockIcon } from "lucide-react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shdow-xl
    transition-all duration-300 h-full z-40 dark:bg-slate-900 overflow-y-auto bg-white
    w-64`

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* TOP LOGO */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-slate-800 dark:text-white">
            PROJECTLIST
          </div>
        </div>
        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-slate-200 px-8 py-4 dark:border-slate-700">
          <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-slate-200">
              IVAN TEAM
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-slate-500 dark:text-slate-400" />
              <p className="text-xs text-slate-500">Private</p>
            </div>
          </div>
        </div>
        {/* NAVBAR LINKS */}
      </div>
    </div>
  )
};

export default Sidebar;
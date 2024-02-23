import React from 'react';
import Link from 'next/link';
import SocialIcons from './SocialIcons';

export default function SummaryDir() {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight dark:text-slate-200 sm:text-5xl">
          <Link href="/">salome palizban</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight dark:text-slate-200 sm:text-xl">
          front end developer | technical maanger
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Always open to new challenges and technologies.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3 " href="#experience">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center py-3 active"
                href="#projects"
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center py-3 active"
                href="#education"
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  education
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <SocialIcons />
    </div>
  );
}

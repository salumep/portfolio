import ProjectTable from '@/app/_components/Projects/ProjectTable';
import React from 'react';

export default function page() {
  return (
    <div className="lg:py-24 container">
      <a
        className="group mb-2 inline-flex items-center font-semibold leading-tight dark:text-light-blue text-blue-950"
        href="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clip-rule="evenodd"
          ></path>
        </svg>
        salome palizban{' '}
      </a>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        All Projects
      </h1>
      <ProjectTable />
    </div>
  );
}

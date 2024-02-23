import { Education } from '@/app/_lib/types';
import React from 'react';

function EducationCard({ edu }: { edu: Education }) {
  return (
    <li className="mb-8">
      <div className="group cursor-pointer relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label="2018 to Present"
        >
          {edu.date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug dark:text-slate-200 text-blue-950">
            <div>
              <span>{edu.title}</span>
            </div>
            <div>
              <div className="text-slate-500">
                <span>{edu.university} </span>,<span>{edu.location}</span>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </li>
  );
}

export default EducationCard;

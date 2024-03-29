import React from 'react';
import { Job } from '@/app/_lib/types';
import Link from 'next/link';
import Icon from '../UI/icon';

export default function ExperienceCard({ job }: { job: Job }) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block dark:lg:group-hover:bg-slate-800/50 lg:group-hover:bg-[#e1ecff80] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label="2018 to Present"
        >
          {job.date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug dark:text-slate-200">
            <div>
              <Link
                className="inline-flex items-baseline font-medium leading-tight dark:text-slate-200 hover:dark:text-light-blue text-blue-950 focus-visible:dark:text-light-blue text-blue-950  group/link text-base"
                href={job.url}
                target="_blank"
                aria-label={job.title}
              >
                <span>
                  {job.title}
                  <div className="inline-block">
                    <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px">
                      <Icon name="arrowTop" />
                    </span>
                  </div>
                </span>
              </Link>
            </div>
            <div>
              <div className="text-slate-500"> {job.company}</div>
            </div>
          </h3>
          <ul className="mt-2 text-sm leading-normal">
            {job.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <ul className="mt-2 flex flex-wrap">
            {job.skils.map((skil, index) => (
              <li className="mr-1.5 mt-2" key={index}>
                <div className="flex items-center rounded-full dark:bg-teal-400/10 bg-blue-100 px-3 py-1 text-xs font-medium leading-5 dark:text-light-blue text-blue-950 ">
                  {skil}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

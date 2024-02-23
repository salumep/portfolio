import { Project } from '@/app/_lib/types';
import React from 'react';
import Link from 'next/link';
import Icon from '../UI/icon';
import Image from 'next/image';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block  dark:lg:group-hover:bg-slate-800/50 lg:group-hover:bg-[#e1ecff80] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <Link
              className="inline-flex items-baseline font-medium leading-tight dark:text-slate-200 text-blue-950 hover:dark:text-light-blue text-blue-950 focus-visible:dark:text-light-blue text-blue-950  group/link text-base"
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="brittanychiang.com (v4) (opens in a new tab)"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {project.title}
                <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px">
                  <Icon name="arrowTop" />
                </span>
              </span>
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-normal">{project.description}</p>

          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {project.skils.map((skil) => (
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full dark:bg-teal-400/10 bg-blue-100 px-3 py-1 text-xs font-medium leading-5 dark:text-light-blue text-blue-950 ">
                  {skil}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Image
          alt={project.img.alt}
          src={project.img.src}
          width="200"
          height="48"
          className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        />
      </div>
    </li>
  );
}

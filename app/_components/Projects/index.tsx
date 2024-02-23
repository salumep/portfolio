import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/app/_lib/constants/projects';
import Icon from '../UI/icon';

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <ul className="group/list">
        {projects.slice(0, 2).map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </ul>
      <div className="mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight dark:text-slate-200 text-blue-950 font-semibold  group"
          aria-label="View Full Project Archive"
          href="/"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full Project
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                Archive
              </span>
              <span className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none">
                <Icon name="arrowRight" />
              </span>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}

import React from 'react';
import ExperienceCard from './ExperienceCard';
import { jobs } from '@/app/_lib/constants/jobs';

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <ol className="group/list">
        {jobs.map((job) => (
          <ExperienceCard job={job} />
        ))}
      </ol>
    </section>
  );
}

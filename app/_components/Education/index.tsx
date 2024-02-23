import React from 'react';
import { education } from '@/app/_lib/constants/education';
import EducationCard from './EducationCard';

function Education() {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="education"
    >
      <ol className="group/list">
        {education.map((edu) => (
          <EducationCard key={edu.id} edu={edu} />
        ))}
      </ol>
    </section>
  );
}

export default Education;

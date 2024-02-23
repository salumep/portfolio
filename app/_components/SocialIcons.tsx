import React from 'react';
import Link from 'next/link';
import Icon from './UI/icon';

export default function SocialIcons() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      <li className="mr-5 text-xs shrink-0">
        <Link
          className="block hover:text-slate-200"
          href="https://github.com/salumep"
          target="_blank"
          aria-label="GitHub (opens in a new tab)"
          title="GitHub"
        >
          <span className="sr-only">GitHub</span>
          <div className="h-5 w-5">
            <Icon name="github" />
          </div>
        </Link>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <Link
          className="block hover:text-slate-200"
          href="https://www.linkedin.com/in/saloume-palizban/"
          target="_blank"
          aria-label="LinkedIn (opens in a new tab)"
          title="LinkedIn"
        >
          <span className="sr-only">LinkedIn</span>
          <div className="h-5 w-5">
            <Icon name="linkedin" />
          </div>
        </Link>
      </li>

      <li className="mr-5 text-xs shrink-0">
        <Link
          className="block hover:text-slate-200"
          href="#"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Twitter (opens in a new tab)"
          title="Twitter"
        >
          <span className="sr-only">Twitter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1227"
            fill="none"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </li>
    </ul>
  );
}

import React from 'react';
import { projects } from '@/app/_lib/constants/projects';

export default function ProjectTable() {
  return (
    <table id="content" className="mt-12 w-full border-collapse text-left">
      <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
        <tr>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
            Year
          </th>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
            Project
          </th>
          <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
            Made at
          </th>
          <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
            Built with
          </th>
          <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
            Link
          </th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2023</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:dark:text-light-blue text-blue-950 focus-visible:dark:text-light-blue text-blue-950 hover:text-slate-200 focus-visible:dark:text-light-blue text-blue-950 sm:hidden group/link text-base"
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Emerson Collective (opens in a new tab)"
                  >
                    <span>
                      Emerson{' '}
                      <span className="inline-block">
                        Collective
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Emerson Collective</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 bg-blue-100 px-3 py-1 text-xs font-medium leading-5 dark:text-light-blue text-blue-950 ">
                    Next.js
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 bg-blue-100 px-3 py-1 text-xs font-medium leading-5 dark:text-light-blue text-blue-950 ">
                    TypeScript
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 bg-blue-100 px-3 py-1 text-xs font-medium leading-5 dark:text-light-blue text-blue-950 ">
                    SCSS
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full dark:bg-teal-400/10 bg-blue-100 px-3 py-1 text-xs font-medium leading-5 dark:text-light-blue text-blue-950 ">
                    Contentful
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:dark:text-light-blue text-blue-950 focus-visible:dark:text-light-blue text-blue-950 text-sm text-slate-400 hover:text-slate-200 focus-visible:dark:text-light-blue text-blue-950 group/link text-sm"
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="emersoncollective.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        emersoncollective.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        ))}

        <tr className="border-b border-slate-300/10 last:border-none">
          <td className="py-4 pr-4 align-top text-sm">
            <div className="translate-y-px">2015</div>
          </td>
          <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
            <div>
              <div className="block sm:hidden">
                <span>JetBlue HumanKinda</span>
              </div>
              <div className="hidden sm:block">JetBlue HumanKinda</div>
            </div>
          </td>
          <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
            <div className="translate-y-px whitespace-nowrap">MullenLowe</div>
          </td>
          <td className="hidden py-4 pr-4 align-top lg:table-cell">
            <ul className="flex -translate-y-1.5 flex-wrap">
              <li className="my-1 mr-1.5">
                <div className="flex items-center rounded-full dark:bg-teal-400/10 bg-blue-100 px-3 py-1 text-xs font-medium leading-5 dark:text-light-blue text-blue-950 ">
                  Tumblr
                </div>
              </li>
              <li className="my-1 mr-1.5">
                <div className="flex items-center rounded-full dark:bg-teal-400/10 bg-blue-100 px-3 py-1 text-xs font-medium leading-5 dark:text-light-blue text-blue-950 ">
                  HTML
                </div>
              </li>
              <li className="my-1 mr-1.5">
                <div className="flex items-center rounded-full dark:bg-teal-400/10 bg-blue-100 px-3 py-1 text-xs font-medium leading-5 dark:text-light-blue text-blue-950 ">
                  CSS
                </div>
              </li>
              <li className="my-1 mr-1.5">
                <div className="flex items-center rounded-full dark:bg-teal-400/10 bg-blue-100 px-3 py-1 text-xs font-medium leading-5 dark:text-light-blue text-blue-950 ">
                  JavaScript
                </div>
              </li>
            </ul>
          </td>
          <td className="hidden py-4 align-top sm:table-cell"></td>
        </tr>
      </tbody>
    </table>
  );
}

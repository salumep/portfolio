import Link from 'next/link';
import React from 'react';
import ToggleButton from './ToggleButton';

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <ul className="flex py-2">
        <li className="p-4 cursor-pointer">
          <Link href="/">Projects</Link>
        </li>
        <li className="p-4  cursor-pointer">
          <Link href="#">Contact</Link>
        </li>
        <li className="p-4  cursor-pointer">
          <Link href="/fatemePalizban.pdf" target="_blank">
            Resume
          </Link>
        </li>
      </ul>
      <ToggleButton />
    </header>
  );
}

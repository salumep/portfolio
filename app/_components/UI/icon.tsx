'use client';
import arrowTop from './arrowtop.svg';
import arrowRight from './arrowRight.svg';
import React, { FC } from 'react';
import github from './github.svg';
import linkedin from './linkedin.svg';
interface IconProps {
  name: string;
  [key: string]: string;
}

interface IconTypes {
  [key: string]: FC<React.SVGProps<SVGSVGElement>>;
}

const iconTypes: IconTypes = {
  arrowTop: arrowTop,
  arrowRight: arrowRight,
  github: github,
  linkedin: linkedin,
};

const Icon: FC<IconProps> = ({ name, ...props }) => {
  let IconComponent = iconTypes[name];
  return <IconComponent {...props} />;
};

export default Icon;

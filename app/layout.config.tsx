import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { pageTree } from '@/app/source';
import Image from 'next/image';
import React from 'react';

// Custom title component with logo and beta badge
const CustomTitle = () => {
  return (
    <div className="flex items-center gap-2">
      <Image 
        src="/logo.png" 
        alt="Apparatus.ai Logo" 
        width={42} 
        height={42} 
        className="object-contain"
      />
      <div className="flex items-center">
        <span className="font-semibold text-base -ml-2">Apparatus.ai</span>
        <span className="ml-2 rounded-full bg-white text-black text-xs px-2 py-0.5 font-medium">
          Beta
        </span>
      </div>
    </div>
  );
};

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: <CustomTitle />,
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
  sidebar: {
    defaultOpenLevel: 1,
  },
};

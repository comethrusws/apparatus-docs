import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { docsOptions } from '../layout.config';
import { AlertBanner } from '@/components/AlertBanner';

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>
    {children}
    </DocsLayout>;
}

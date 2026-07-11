import type { Metadata } from 'next';
import './layout.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'IINTEKKU Group | Professional Business Solutions',
  description:
    'IINTEKKU Group - Execution. Efficiency. Partnership. Results. Together, We Shall Thrive.',
  keywords: [
    'business solutions',
    'consulting',
    'operations',
    'professional services',
    'business advisory',
  ],
  openGraph: {
    title: 'IINTEKKU Group',
    description: 'Execution. Efficiency. Partnership. Results.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0369a1" />
      </head>
      <body>{children}</body>
    </html>
  );
}

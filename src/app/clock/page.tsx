import type { Metadata } from 'next';
import TimeZoneClock from '@/components/TimeZoneClock';

export const metadata: Metadata = {
  title: 'Global Time Zone Clock | IINTEKKU Group',
  description: 'Real-time digital clock displaying current time across major business hubs worldwide.',
};

export default function ClockPage() {
  return <TimeZoneClock />;
}

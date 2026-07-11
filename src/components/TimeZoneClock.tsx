'use client';

import { useEffect, useState } from 'react';

interface TimeZoneClock {
  timezone: string;
  label: string;
  time: string;
  date: string;
}

export default function TimeZoneClock() {
  const [clocks, setClocks] = useState<TimeZoneClock[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const updateClocks = () => {
      const timeZones = [
        { timezone: 'America/New_York', label: 'New York (EST)' },
        { timezone: 'Europe/London', label: 'London (GMT)' },
        { timezone: 'Europe/Paris', label: 'Paris (CET)' },
        { timezone: 'Asia/Tokyo', label: 'Tokyo (JST)' },
        { timezone: 'Australia/Sydney', label: 'Sydney (AEDT)' },
        { timezone: 'Asia/Dubai', label: 'Dubai (GST)' },
      ];

      const updatedClocks = timeZones.map((tz) => {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });

        const dateFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz.timezone,
          weekday: 'short',
          month: 'short',
          day: '2-digit',
        });

        return {
          timezone: tz.timezone,
          label: tz.label,
          time: formatter.format(now),
          date: dateFormatter.format(now),
        };
      });

      setClocks(updatedClocks);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Global Time Zone Clock</h1>
          <p className="text-xl text-gray-400">Real-time clock for major business hubs</p>
        </div>

        {/* Clock Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clocks.map((clock) => (
            <div
              key={clock.timezone}
              className="relative group bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl font-semibold text-white mb-2">{clock.label}</h2>
                <p className="text-sm text-primary-100 mb-6">{clock.date}</p>

                {/* Digital Time Display */}
                <div className="bg-black/40 rounded-lg p-6 backdrop-blur-sm">
                  <div className="font-mono text-5xl font-bold text-primary-300 tracking-wider">
                    {clock.time}
                  </div>
                </div>

                {/* Timezone Info */}
                <div className="mt-4 text-sm text-primary-100 opacity-75">{clock.timezone}</div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border border-primary-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">Updates every second • Current time across global business centers</p>
        </div>
      </div>
    </div>
  );
}

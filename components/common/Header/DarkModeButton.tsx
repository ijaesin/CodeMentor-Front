'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/react';
import { IconDarkMode, IconLightMode } from '@/public/svgs';

export default function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onClick = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      startContent={theme === 'dark' ? <IconDarkMode /> : <IconLightMode />}
      color={theme === 'dark' ? 'warning' : 'primary'}
      variant={theme === 'dark' ? 'light' : 'flat'}
      className="text-xl font-bold"
      onClick={onClick}
    >
      {theme === 'dark' ? 'Dark' : 'Light'}
    </Button>
  );
}

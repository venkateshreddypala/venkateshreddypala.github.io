import { useEffect, useState, startTransition } from 'react';
import { useTheme } from 'next-themes';
import { IoMdMoon as MoonIcon } from 'react-icons/io';
import { IoSunnyOutline as SunIcon } from 'react-icons/io5';
import tinycolor from 'tinycolor2';
import { Palette } from '@phosphor-icons/react/dist/ssr';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const getRandomColor = () => {
    return tinycolor.random().toString();
  };

  const calculateContrastRatio = (foregroundColor, backgroundColor) => {
    return tinycolor.readability(foregroundColor, backgroundColor);
  };

  const generateAdaCompliantColors = () => {
    let bgColor, elementColor;
    do {
      bgColor = getRandomColor();
      elementColor = getRandomColor();
    } while (
      calculateContrastRatio(elementColor, bgColor) < 7 || // AAA for normal text
      calculateContrastRatio(elementColor, bgColor) < 4.5 || // AA for large text
      calculateContrastRatio(bgColor, elementColor) < 7 // Ensure AAA-level contrast for both combinations
    );
    return { bgColor, elementColor };
  };

  const toggleTheme = () => {
    startTransition(() => {
      const { bgColor, elementColor } = generateAdaCompliantColors();
      document.body.style.backgroundColor = bgColor;
      document.body.style.color = elementColor;
      setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark');
    });
  };

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4'
      onClick={toggleTheme}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        className='text-gray-900 dark:text-gray-100'
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <Palette className='fade-in text-xl' />
        ) : (
          <Palette className='fade-in text-xl' />
        )}
      </svg>
    </button>
  );
};

export default ThemeSwitch;
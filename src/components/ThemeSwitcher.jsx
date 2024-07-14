
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeSwitcher () {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;

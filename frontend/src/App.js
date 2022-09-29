import React from 'react'

export const App = () => {

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');

    const currentThemeMode = localStorage.getItem('themeMode');

    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);

    }
  }, []);

  return (
    <div>App</div>
  )
}
import { useState } from 'react';
import { Switch, SwitchBody } from './ThemeToggler.styled';

export default function ThemeToggler({ customerStyles }) {
  const [colorMode, setColorMode] = useState('light');

  const toggleMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
    if (colorMode === 'light') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  };

  return (
    <SwitchBody onClick={toggleMode} $customerStyles={customerStyles}>
      <Switch mode={colorMode} />
    </SwitchBody>
  );
}

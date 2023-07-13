import { useState } from 'react';
import { CheckBoxWraper } from './Checkbox.styled';
export default function Checkbox({ label }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <CheckBoxWraper>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(prev => !prev)}
        />
        <span>{label}</span>
      </label>
    </CheckBoxWraper>
  );
}

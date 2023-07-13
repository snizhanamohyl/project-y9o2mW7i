import { useState } from 'react';
import { CheckBoxWraper } from './Checkbox.styled';
export default function Checkbox({ key, label }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <CheckBoxWraper>
      <label htmlFor={key}>
        <input
          id={key}
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(prev => !prev)}
        />
        <span>{label}</span>
      </label>
    </CheckBoxWraper>
  );
}

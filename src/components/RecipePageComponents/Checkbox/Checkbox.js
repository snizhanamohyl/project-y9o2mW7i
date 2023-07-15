import { useState } from 'react';
import { CheckBoxWraper } from './Checkbox.styled';
export default function Checkbox({ id, label }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <CheckBoxWraper>
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(prev => !prev)}
        />
        <span>{label}</span>
      </label>
    </CheckBoxWraper>
  );
}

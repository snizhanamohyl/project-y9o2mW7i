import { useState } from 'react';
import { CheckBoxWraper } from './Checkbox.styled';
export default function Checkbox({ id, label, onClick }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(prev => !prev);
    onClick(!isChecked);
  };
  return (
    <CheckBoxWraper>
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span>{label}</span>
      </label>
    </CheckBoxWraper>
  );
}

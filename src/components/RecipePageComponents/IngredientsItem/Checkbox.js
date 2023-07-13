import { useState } from 'react';
import { styled } from 'styled-components';
const Checkbox = ({ label }) => {
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
};
export default Checkbox;

const CheckBoxWraper = styled.div`
  input {
    -webkit-appearance: none;
    appearance: none;

    width: 18px;
    height: 18px;
    border-radius: 4px;

    border: 1px solid rgba(126, 126, 126, 0.5);
    outline: none;
    cursor: pointer;
    @media (min-width: 768px) {
      width: 35px;
      height: 35px;
    }

    &:checked {
      background-color: transparent;
      position: relative;
      border: 1.5px solid var(--accent);
    }

    &:checked::before {
      content: '\\002714';
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1em;
      color: var(--accent);

      position: absolute;
      right: 1.5px;
      top: 0;
      @media (min-width: 768px) {
        font-size: 2em;
        right: 4px;
      }

      @media (min-width: 1449px) {
        font-size: 1.7em;
        top: -1px;
      }
    }
  }
`;

import { CheckBoxWraper } from './Checkbox.styled';
export default function Checkbox({ id, label, onClick, isChecked }) {
  return (
    <CheckBoxWraper>
      <label htmlFor={id}>
        <input id={id} type="checkbox" checked={isChecked} onChange={onClick} />
        <span>{label}</span>
      </label>
    </CheckBoxWraper>
  );
}

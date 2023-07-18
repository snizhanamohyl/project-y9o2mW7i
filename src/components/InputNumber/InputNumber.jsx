import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function InputNumber({ onChange, defaultValue, ...otherProps }) {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!isFocused && !Number(value) && defaultValue !== undefined) {
      setValue(defaultValue);
    }
  }, [isFocused, value, setValue, defaultValue]);

  const handleChange = ({ target }) => {
    for (let i = 0; i < target.value.length; i++) {
      const unicodeNumber = target.value[i].charCodeAt();
      if (unicodeNumber < 48 || unicodeNumber > 57) return;
    }

    setValue(target.value);
    onChange(target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      {...otherProps}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}

InputNumber.propTypes = {
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
};

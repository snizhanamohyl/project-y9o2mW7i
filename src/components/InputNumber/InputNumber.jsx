import PropTypes from 'prop-types';
import { useState } from 'react';

export default function InputNumber({ onChange, ...otherProps }) {
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    for (let i = 0; i < target.value.length; i++) {
      const unicodeNumber = target.value[i].charCodeAt();
      if (unicodeNumber < 48 || unicodeNumber > 57) return;
    }

    setValue(target.value);
    onChange(target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} {...otherProps} />
  );
}

InputNumber.propTypes = {
  onChange: PropTypes.func,
};

InputNumber.defaultProps = {
  onChange: () => null,
};

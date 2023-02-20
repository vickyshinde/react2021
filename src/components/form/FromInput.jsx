import { useState } from 'react';

const FromInput = ({ name, type, placeholder, label, value, onChangeHandler, errorMessage, required, pattern }) => {
  const [focused, setFocused] = useState(false);

  const focusHandler = () => {
    setFocused(true);
  };

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className="form-control"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        required={required}
        pattern={pattern}
        onFocus={() => name === 'confirmPassword' && setFocused(true)}
        onBlur={focusHandler}
        focused={focused.toString()}
      />
      <div className="invalid">{errorMessage}</div>
    </div>
  );
};

export default FromInput;

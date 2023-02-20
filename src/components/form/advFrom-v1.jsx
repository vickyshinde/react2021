// import { useState } from 'react';
import { useState } from 'react';
import FromInput from './FromInput';

const AdvFromV1 = () => {
  const [formData, setFromData] = useState({
    userName: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: ''
    // occupation: 'Select',
    // gender: '',
    // languages: []
  });

  const inputs = [
    {
      id: 1,
      name: 'userName',
      type: 'text',
      placeholder: 'Username',
      errorMessage: "Username should be 3-16 characters and shouldn't include any spacial characters!",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      // eslint-disable-next-line prettier/prettier, no-useless-escape
      // pattern: `/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`,
      required: true
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      // errorMessage: '',
      label: 'Birthday'
    },
    {
      id: 4,
      name: 'password',
      type: 'text',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 spacial characters!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'text',
      placeholder: 'Confirm Password',
      errorMessage: "Password don't match!",
      label: 'Confirm Password',
      pattern: formData.password,
      required: true
    }
  ];

  const onChangeHandler = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);
  return (
    <div className="col-6">
      <h3>Adv Form V1</h3>
      <form>
        {inputs.map((input) => (
          <FromInput
            key={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            label={input.label}
            value={formData[input.name]}
            onChangeHandler={onChangeHandler}
            errorMessage={input.errorMessage}
            required={input.required}
            pattern={input.pattern}
          />
        ))}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdvFromV1;

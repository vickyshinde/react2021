import { useState } from 'react';

const AdvFrom = () => {
  const [formData, setFromData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    occupation: 'Select',
    gender: '',
    languages: []
  });

  const [fromError, setFromError] = useState({});

  const onChangeHandler = (event) => {
    if (event.target.name === 'languages') {
      console.log('checkbox');

      const copy = { ...formData };

      if (event.target.checked) {
        copy.languages.push(event.target.value);
      } else {
        copy.languages = copy.languages.filter((el) => el === event.target.value);
      }

      setFromData(copy);
    } else {
      setFromData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }));
    }
  };

  const validateFrom = () => {
    const err = {};
    if (formData.userName === '') {
      err.userName = 'username required!';
    }

    if (formData.email === '') {
      err.email = 'email required!';
    } else {
      // eslint-disable-next-line no-useless-escape
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(formData.email)) {
        err.email = 'Email not valid!';
      }
    }

    // check password and confirm password
    if (formData.password === '') {
      err.password = 'Password required!';
    } else if (formData.password.length < 6) {
      err.password = 'Password should greater then 6';
    }

    if (formData.confirmPassword === '') {
      err.confirmPassword = 'confirm required!';
    } else if (formData.password !== formData.confirmPassword) {
      err.confirmPassword = 'Password not matched!';
    }

    if (formData.occupation === 'Select') {
      err.occupation = 'Occupation required!';
    }

    if (formData.gender === '') {
      err.gender = 'Gender required!';
    }

    if (formData.languages.length < 1) {
      err.languages = 'Any one Languages required!';
    }

    setFromError({ ...err });

    console.log(Object.keys(err));

    return Object.keys(err).length < 1;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.table(`formData`, formData);
    const isValid = validateFrom();
    if (isValid) {
      alert('submitted');
    } else {
      alert('in valid form');
    }
    console.log(isValid);
  };

  return (
    <div className="col-3">
      <h3>Adv Form</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            name="userName"
            className="form-control"
            placeholder="Name"
            onChange={onChangeHandler}
            value={formData.userName}
          />
          <div className="invalid-feedback d-block">{fromError.userName}</div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Name"
            onChange={onChangeHandler}
            value={formData.email}
          />
          <div className="invalid-feedback d-block">{fromError.email}</div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={onChangeHandler}
            value={formData.password}
          />
          <div className="invalid-feedback d-block">{fromError.password}</div>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="text"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirm Password"
            onChange={onChangeHandler}
            value={formData.confirmPassword}
          />
          <div className="invalid-feedback d-block">{fromError.confirmPassword}</div>
        </div>
        <div className="form-group">
          <label>Occupation</label>
          <select className="form-control" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
            <option>Select</option>
            <option>1</option>
            <option>student</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <div className="invalid-feedback d-block">{fromError.occupation}</div>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={onChangeHandler}
              checked={formData.gender === 'male'}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={onChangeHandler}
              checked={formData.gender === 'female'}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="other"
              value="other"
              onChange={onChangeHandler}
              checked={formData.gender === 'other'}
            />
            <label className="form-check-label" htmlFor="other">
              Other
            </label>
          </div>
          <div className="invalid-feedback d-block">{fromError.gender}</div>
        </div>
        <div className="form-group">
          <label>Languages</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="languages"
              value="html"
              id="html"
              onChange={onChangeHandler}
              checked={formData.languages.indexOf('html') !== -1}
            />
            <label className="form-check-label" htmlFor="html">
              HTML
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="languages"
              value="css"
              id="css"
              onChange={onChangeHandler}
              checked={formData.languages.indexOf('css') !== -1}
            />
            <label className="form-check-label" htmlFor="css">
              CSS
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="languages"
              value="javascript"
              id="javascript"
              onChange={onChangeHandler}
              checked={formData.languages.indexOf('javascript') !== -1}
            />
            <label className="form-check-label" htmlFor="javascript">
              Javascript
            </label>
          </div>
          <div className="invalid-feedback d-block">{fromError.languages}</div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdvFrom;

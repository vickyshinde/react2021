import { useState } from "react";
import FormLogin from "./formLogin";

const Form = () => {

  const [name, setName] = useState('');
  const [onSubmitName, setOnSubmitName] = useState();

  const inputEvent = (event) => {
    console.log('Event :');
    console.log(event);
    console.log('target :');
    console.log(event.target);
    console.log('value : ' + event.target.value);
    setName(event.target.value);
  };

  const showName = (event) => {
    event.preventDefault();
    setOnSubmitName(name);
  };

  return (
    <div className="row text-left">
      <div className="col">
        <h3>Form</h3>
        <form onSubmit={showName}>
          <p>Hello {name} </p>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={inputEvent}
              value={name}
            />
          </div>
          {/* <button type="submit" onClick={showName} className="btn btn-primary">
            Submit
          </button> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p className="mt-5">{onSubmitName} </p>
      </div>
      <div className="col">
        <FormLogin />
      </div>
    </div>
  );
}

export default Form;

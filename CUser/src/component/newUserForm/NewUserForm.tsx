import "./NewUserForm.css";

import { useRef } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewUserForm({ createUser, onClose }) {
  const img = useRef();
  const firstN = useRef();
  const lastN = useRef();
  const age = useRef();
  const from = useRef();
  const job = useRef();
  const genderM = useRef();
  const genderF = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: uuidv4(),
      img: img.current.value,
      first: firstN.current.value,
      last: lastN.current.value,
      age: age.current.value,
      from: from.current.value,
      job: job.current.value,
      gender: genderM.current.value ?? genderF.current.value,
    };
    if (
      user.id &&
      user.img &&
      user.first &&
      user.last &&
      user.age &&
      user.from &&
      user.job &&
      user.gender
    ) {
      console.log(user);
      createUser(user);
    }
  };

  return (
    <div className="modal-wrapper">
      <div className="overlay" onClick={onClose} onKeyDown={onClose}>
        <div className="modal">
          <h2>Create User</h2>
          <form>
            <label>
              <span>Image URL:</span>
              <input autoFocus type="url" required ref={img} />
            </label>
            <label>
              <span>First Name:</span>
              <input type="text" required ref={firstN} />
            </label>
            <label>
              <span>Last Name:</span>
              <input type="text" required ref={lastN} />
            </label>
            <label>
              <span>Age:</span>
              <input type="number" required ref={age} />
            </label>
            <label>
              <span>From:</span>
              <input type="text" required ref={from} />
            </label>
            <label>
              <span>Job:</span>
              <input type="text" required ref={job} />
            </label>
            <div className="gender">
              <span>Gender:</span>
              <label>
                <small>Male</small>
                <input
                  type="radio"
                  required
                  name="gender"
                  value="male"
                  ref={genderM}
                />
              </label>
              <label>
                <small>Female</small>
                <input
                  type="radio"
                  required
                  name="gender"
                  value="female"
                  ref={genderF}
                />
              </label>
            </div>
            <button
              className="modal-btn"
              type="submit"
              onClick={handleSubmit}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit;
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;

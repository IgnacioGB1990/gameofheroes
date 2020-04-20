import React, { useState } from "react";
import '../App.css'

export const LoginSignupForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(username, password);
      }}
    >
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">User </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          (@ field is not required in beta phase)
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

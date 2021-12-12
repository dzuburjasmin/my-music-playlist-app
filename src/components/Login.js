import React from "react";

const Login = () => {
  return (
    <form>
      <div className="form-group mx-5">
        <label for="Email">Username</label>
        <input
          type="email"
          className="form-control"
          id="Password"
          placeholder="Enter username"
        />
      </div>
      <div class="form-group mx-5 mt-3">
        <label for="Password">Password</label>
        <input
          type="password"
          className="form-control"
          id="Password"
          placeholder="Enter Password"
        />
      </div>
      <button type="submit" className="btn btn-primary mx-5 mt-3">
        Login
      </button>
    </form>
  );
};
export default Login;

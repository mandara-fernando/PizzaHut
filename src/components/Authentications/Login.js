import React from "react";
import styled from "styled-components";
import "../../stylesheets/login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="myCard">
        <div className="row">
          <div className="col-md-6">
            <div className="myLeftCtn">
              <form className="myForm text-center">
                <header>Login</header>

                <div className="form-group">
                  <i className="fas fa-envelope" />
                  <input
                    className="myInput"
                    type="text"
                    placeholder="Email"
                    id="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <i className="fas fa-lock" />
                  <input
                    className="myInput"
                    type="password"
                    placeholder="Password"
                    id="password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      placeholder="Password"
                      id="check_1"
                      name="check_1"
                      className="myCheck"
                      required
                    />
                    <small>Remember me</small>
                    <div className="invalid-feedback">
                      Please fill out this field
                    </div>
                  </label>
                </div>
                <input type="submit" className="button" value="Login" />
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="myRightCtn">
              <div className="box">
                <header>Pizza Hut</header>
                <p>
                  {" "}
                  lorem iubfiuwbeiubwibg uibwiv iwvbe bwifiwefiwvbeibibiwb
                  wiebfiubweiufbuiwebfb uwbfiubwb eGWGWGwg
                </p>
                <a href="/signup">
                  <input
                    type="button"
                    className="button_out"
                    value="Learn More"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

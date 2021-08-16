import React from 'react'
import styled from 'styled-components';
import '../css-component/login.css';



function login() {
    return (
      
      <div className="container">
      <div className="myCard">
        <div className="row">
          <div className="col-md-6">
            <div className="myLeftCtn">
              <form className="myForm text-center">
                <header>Login</header>
                
                <div className="form-group">
                  <i className="fas fa-envelope"></i>
                  <input className="myInput" type="text" placeholder="Email" id="email" required />
                </div>
                
                <div className="form-group">
                  <i className="fas fa-lock"></i>
                  <input className="myInput" type="password" placeholder="Password" id="password" required />
                </div>
                <div className="form-group">
                  <label>
                    <input type="checkbox" placeholder="Password" id="check_1" name="check_1" required >
                    </input>
                    <small>Remember me</small>
                    <div className="invalid-feedback">Please fill out this field</div>
                  </label>
                </div>    
                <input type="submit" className="button" value="Login" />
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="myRightCtn">
              <div className="box"><header>Pizza Hut</header>
                <p> lorem iubfiuwbeiubwibg uibwiv iwvbe bwifiwefiwvbeibibiwb wiebfiubweiufbuiwebfb uwbfiubwb eGWGWGwg</p>
                <input type="button" className="button_out" value="Learn More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
      
    )
}

export default login

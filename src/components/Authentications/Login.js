import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Col, Row } from "react-bootstrap";;


function Login() {
    
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    function Authentication(e) {
        e.preventDefault();



        const data={
           Email,
           Password
        }

        console.log(  Email,
            Password)

        axios
        .post("http://localhost:8070/api/auth/login", data)
        .then((response) => {

            if (response.data.users.Role === "Admin") {
                localStorage.setItem("user", "Admin");
                window.location.href="/"
      
              } else if (response.data.users.Role === "User") {
                localStorage.setItem("user", "User");
                localStorage.setItem("userName", response.data.users.FirstName);
                window.location.href="/"
            }
         })
        .catch((err) => {
          console.log(err);
        });
    }

  return (
    <div>
            <Container className={"pt-3"}>

                <Card className={"p-5 mb-3"}>
                    <div className ="text-center mb-2">
                        <h1 className="form-titles ">Login</h1>
                        <hr className="divide"/>
                    </div>

                  <Form onSubmit={Authentication}>

                  <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value);}} />
                        </Form.Group><br/>

                  <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value);}}/>
                  </Form.Group><br/>

                        
                  
  
                    <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={ {backgroundColor: "#d00000", color: "#FFF"}}
                        >

                            Submit
                        </Button><br/><br/>

                        <a href="/css/default.asp">Create account here?</a>

                    </Form>
                </Card>
            </Container>
        </div>
  );
}

export default Login;

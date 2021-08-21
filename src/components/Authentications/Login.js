import React from "react";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Col, Row } from "react-bootstrap";;


function Login() {
  return (
    <div>
            <Container className={"pt-3"}>

                <Card className={"p-5 mb-3"}>
                    <div className ="text-center mb-2">
                        <h1 className="form-titles ">Login</h1>
                        <hr className="divide"/>
                    </div>

                  <Form>

                  <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                        </Form.Group><br/>

                  <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                  </Form.Group><br/>

                        
                  
  
                    <Button
                            onClick={(event) => {
                                // sendData(event); // sendData(event);
                            }}
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

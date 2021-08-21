import React from "react";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Col, Row } from "react-bootstrap";;

function SignUp() {
  return (
    <div>
            <Container className={"pt-3"}>

                <Card className={"p-5 mb-3"}>
                    <div className ="text-center mb-2">
                        <h1 className="form-titles ">Sign UP</h1>
                        <hr className="divide"/>
                    </div>

                  <Form>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" />
                        </Form.Group>
                    </Row>

                    <Form.Group as={Col} controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        
                        </Form.Group><br/>

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                    </Row>
                    
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

                        <a href="/css/default.asp">Have an account Login here?</a>

                    </Form>
                </Card>
            </Container>
        </div>
  );
}

export default SignUp;

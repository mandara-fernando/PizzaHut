import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Col, Row } from "react-bootstrap";;

function SignUp() {


    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Contact, setContact] = useState("");
    const [Address, setAddress] = useState("");
    const [Password, setPassword] = useState("");
    const [CPassword, setCPassword] = useState("");

    function Signing(){
        const data={
            FirstName,
            LastName,
            Email,
            Contact,
            Address,
            Password,
            CPassword
        }

        axios
        .post("http://localhost:8070/api/auth/signing", data)
        .then((response) => {
       
        
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
                        <h1 className="form-titles ">Sign UP</h1>
                        <hr className="divide"/>
                    </div>

                  <Form>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" onChange={(e) => {setFirstName(e.target.value);}}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" onChange={(e) => {setLastName(e.target.value);}}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value);}} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" onChange={(e) => {setContact(e.target.value);}} />
                        </Form.Group>
                    </Row>

                    <Form.Group as={Col} controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" onChange={(e) => {setAddress(e.target.value);}} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        
                        </Form.Group><br/>

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value);}} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => {setCPassword(e.target.value);}} />
                        </Form.Group>
                    </Row>
                    
                    <Button
                            onClick={Signing}
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

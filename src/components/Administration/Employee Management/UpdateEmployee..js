import React from "react";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Col, Row } from "react-bootstrap";

function UpdateEmployee(props) {
  return <div>
  <Container className={"pt-3"}>

      <Card className={"p-5 mb-3"}>
          <div className ="text-center mb-2">
              <h1 className="form-titles ">UPDATE EMPLOYEE</h1>
              <hr className="divide"/>
          </div>

                              <Form>
          <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Emplyee ID</Form.Label>
              <Form.Control type="text" placeholder="Emplyee ID" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Branch</Form.Label>
              <Form.Control type="text" placeholder="Branch" />
              </Form.Group>
          </Row>

          <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Branch" />
              </Form.Group>
          </Row>

          <Row className="mb-3">
              

              <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Role</Form.Label>
              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                           >
                  <option selected>Select the Role</option>
                  <option value="Research">Research</option>
                  <option value="Workshop">Workshop</option>
                  </select>
              
              </Form.Group>

              
          </Row>
          <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group><br/>

              <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Default Password</Form.Label>
              <Form.Control type="text" placeholder="Default Password" />
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
              </Button>
          </Form>
      </Card>
  </Container>
</div>;
}

export default UpdateEmployee;

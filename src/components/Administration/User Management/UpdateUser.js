import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Table } from "react-bootstrap";
import { ImExit } from "react-icons/all";
import "../../../stylesheets/formTitle.css";
import { Link } from "react-router-dom";
function UpdateUser(props) {
  const [imgPreview, setimgPreview] = useState(null);
  const [error, setError] = useState(false);

  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setimgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);

      alert("file not supported");
    }
  };
  return (
    <div>
      <Container className={"pt-3"}>
        <Card className={"p-5 "}>
          <div className={"go-back-icon"}>
            <Link to={"/admin/view-users"}>
              <ImExit color={"black"} />
            </Link>
          </div>
          <div className="text-center mb-2">
            <h1 className="form-titles ">UPDATE USER</h1>
            <hr className="divide" />
          </div>

          <Form>
            <Form.Group className="mb-3" controlId="FirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="First Name"
                onChange={(event) => {
                  // setCTitle(event.target.value);
                }}
                type="text"
                placeholder="First Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="LastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="Last Name"
                onChange={(event) => {
                  // setVenue(event.target.value);
                }}
                type="text"
                placeholder="Last Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="Email"
                onChange={(event) => {
                  // setSeats(event.target.value);
                }}
                type="email"
                placeholder="Email"
              />
            </Form.Group>

            {/*<Form.Group className="mb-3" controlId="Role">*/}
            {/*  <Form.Label>Role </Form.Label>*/}
            {/*  <Form.Select*/}
            {/*    name="Contact"*/}
            {/*    onChange={(event) => {*/}
            {/*      // setResearcherFee(event.target.value);*/}
            {/*    }}*/}
            {/*    type="number"*/}
            {/*    placeholder="Contact Number"*/}
            {/*    defaultValue="Manager"*/}
            {/*  >*/}
            {/*    <option>Admin</option>*/}
            {/*    <option>Manager</option>*/}
            {/*    <option>Product Manager</option>*/}
            {/*  </Form.Select>*/}
            {/*</Form.Group>*/}
            <div className="form-group">
              <Form.Label>Role</Form.Label>
              <select
                className="form-select form-select-lg mb-3 dropdown"
                aria-label=".form-select-lg example"
              >
                <option selected>Admin</option>
                <option value="Research">Manager</option>
                <option value="Workshop">Product Manage</option>
              </select>
            </div>
            <Form.Group className="mb-3" controlId="Contact">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                name="Contact"
                onChange={(event) => {
                  // setResearcherFee(event.target.value);
                }}
                type="string"
                placeholder="Contact Number"
              />
            </Form.Group>

            {error && <p className="errorMsg">File not supported</p>}
            <div
              className="imgPreview "
              style={{
                background: imgPreview
                  ? `url("${imgPreview}") no-repeat center/cover`
                  : "#131313",
                height: 300,
                width: 300,
              }}
            >
              {!imgPreview && (
                <>
                  <p>Add an image</p>
                  <label htmlFor="fileUpload" className="customeFileUplad ">
                    Choose File
                  </label>
                  <input
                    type="file"
                    id="fileUpload"
                    onChange={handleImageChange}
                  />
                  <span>(jpg, jpeg 0r png)</span>
                </>
              )}
            </div>
            {imgPreview && (
              <Button onClick={() => setimgPreview(null)}>Remove Image</Button>
            )}
            <br />

            <Button
              onClick={(event) => {
                // sendData(event); // sendData(event);
              }}
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#d00000", color: "#FFF" }}
            >
              Update User
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default UpdateUser;

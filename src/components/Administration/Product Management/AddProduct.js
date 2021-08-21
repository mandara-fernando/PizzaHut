import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Card, Container, Form, Row, Col, Dropdown } from "react-bootstrap";
import "../../../stylesheets/formTitle.css";
function AddProduct(props) {
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
        <Card className={"p-5 mb-3"}>
          <div className="text-center mb-2">
            <h1 className="form-titles ">ADD PRODUCTS</h1>
            <hr className="divide" />
          </div>

          <Form>
            <Form.Group className="mb-3" controlId="ConferenceTitle">
              <Form.Label>Promotion ID</Form.Label>
              <Form.Control
                name="ConferenceTitle"
                onChange={(event) => {
                  // setCTitle(event.target.value);
                }}
                type="text"
                placeholder="Promotion ID"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Description">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="Description"
                onChange={(event) => {
                  // setDescription(event.target.value);
                }}
                type="text"
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="Description"
                onChange={(event) => {
                  // setDescription(event.target.value);
                }}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            {error && <p className="errorMsg">File not supported</p>}
            <div
              className="imgPreview"
              style={{
                background: imgPreview
                  ? `url("${imgPreview}") no-repeat center/cover`
                  : "#131313",
              }}
            >
              {!imgPreview && (
                <>
                  <p>Add an image</p>
                  <label htmlFor="fileUpload" className="customeFileUplad">
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
              <button onClick={() => setimgPreview(null)}>Remove Image</button>
            )}
            <br />

            <Row className="mb-3 display-inline">
              <Form.Group as={Col}>
                <Form.Check type="checkbox" label="Small" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Price" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Check type="checkbox" label="Medium" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Price" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Check type="checkbox" label="Large" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Price" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Check type="checkbox" label="Regular" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Price" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Add topings(Optional)</Form.Label>
              </Form.Group>

              <div className="form-group">
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Select the category</option>
                  <option value="Research">Research</option>
                  <option value="Workshop">Workshop</option>
                </select>
              </div>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Status</Form.Label>
              </Form.Group>

              <div className="form-group">
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Select the category</option>
                  <option value="Research">Research</option>
                  <option value="Workshop">Workshop</option>
                </select>
              </div>
            </Row>

            <Button
              onClick={(event) => {
                // sendData(event); // sendData(event);
              }}
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#d00000", color: "#FFF" }}
            >
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default AddProduct;

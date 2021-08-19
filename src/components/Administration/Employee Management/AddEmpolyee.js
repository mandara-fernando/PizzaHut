import React, { useEffect, useState } from "react";
import { Card, Container, Form, Table } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
// import FormData from "form-data";
// import axios from "axios";
// import swal from "sweetalert";
import { Button } from "@material-ui/core";
import '../../../stylesheets/formTitle.css'

function AddEmployee() {
    return (
        <div>
            <Container className={"pt-3"}>

                <Card className={"p-5 mb-3"}>
                    <div className ="text-center mb-2">
                        <h1 className="form-titles ">ADD UPCOMING CONFERENCE</h1>
                        <hr className="divide"/>
                    </div>

                    <Form>
                        <Form.Group className="mb-3" controlId="ConferenceTitle">
                            <Form.Label>Conference Title</Form.Label>
                            <Form.Control
                                name="ConferenceTitle"
                                onChange={(event) => {
                                    // setCTitle(event.target.value);
                                }}
                                type="text"
                                placeholder="Conference Title"
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
                        <Form.Group className="mb-3" controlId="Venue">
                            <Form.Label>Venue</Form.Label>
                            <Form.Control
                                name="Venue"
                                onChange={(event) => {
                                    // setVenue(event.target.value);
                                }}
                                type="text"
                                placeholder="Venue"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                name="Date"
                                onChange={(event) => {
                                    // setDate(event.target.value);
                                }}
                                type="date"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Seats">
                            <Form.Label>No of Seats</Form.Label>
                            <Form.Control
                                name="Seats"
                                onChange={(event) => {
                                    // setSeats(event.target.value);
                                }}
                                type="number"
                                placeholder="Seats"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ResearcherFee">
                            <Form.Label>Researcher Fee</Form.Label>
                            <Form.Control
                                name="ResearcherFee"
                                onChange={(event) => {
                                    // setResearcherFee(event.target.value);
                                }}
                                type="number"
                                placeholder="Researcher Fees"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ParticipantsFee">
                            <Form.Label>Partcipants Fee</Form.Label>
                            <Form.Control
                                name="ParticipantsFee"
                                onChange={(event) => {
                                    // setParticipantsFee(event.target.value);setParticipantsFee(event.target.value);
                                }}
                                type="number"
                                placeholder="Participants Fee"
                            />
                        </Form.Group>

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
        </div>
    );
}

export default AddEmployee;

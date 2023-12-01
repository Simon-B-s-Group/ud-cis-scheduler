/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Season, Semester } from "../../interfaces/semester";
import { DegreePlan } from "../../interfaces/degreePlan";
import { Course } from "../../interfaces/course";

export function MoveCoursePopup({
    show,
    degreePlan,
    handleSubmit
}: {
    show: boolean;
    degreePlan: DegreePlan;
    handleSubmit: (
        course: Course | null,
        fromSem: Semester | null,
        toSem: Semester | null
    ) => void;
}) {
    const updateSeason = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        console.log("test");
    };

    return (
        <Modal show={show} onHide={() => handleSubmit(null, null, null)}>
            <Modal.Header closeButton>
                <Modal.Title>New Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="newSem">
                    <Form.Label>Choose Semester</Form.Label>
                    <Form.Select
                        value={degreePlan.semesters[0].season}
                        onChange={updateSeason}
                    >
                        {degreePlan.semesters.map((sem: Semester) => (
                            <option
                                key={sem.season + sem.year}
                                value={sem.season + " " + sem.year}
                            >
                                {sem.season} {sem.year}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="success"
                    onClick={() => handleSubmit(null, null, null)}
                >
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

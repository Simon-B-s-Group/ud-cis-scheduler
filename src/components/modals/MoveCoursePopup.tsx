/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Semester } from "../../interfaces/semester";
import { DegreePlan } from "../../interfaces/degreePlan";
import { Course } from "../../interfaces/course";

export function MoveCoursePopup({
    show,
    degreePlan,
    course,
    fromSem,
    handleSubmit
}: {
    show: boolean;
    degreePlan: DegreePlan;
    course: Course;
    fromSem: Semester;
    handleSubmit: (
        course: Course | null,
        fromSem: Semester | null,
        toSem: Semester | null
    ) => void;
}) {
    const [semesterName, setSemesterName] = useState<string>(
        degreePlan.semesters[0].season + " " + degreePlan.semesters[0].year
    );
    const updateSemesterName = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        setSemesterName(event.target.value);
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
                        value={semesterName}
                        onChange={updateSemesterName}
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
                    onClick={() => {
                        // find the target semester
                        const splitValue = semesterName.split(" "); // ["Fall", "2023"]
                        const targetSem = degreePlan.semesters.find(
                            (s: Semester) =>
                                s.season === splitValue[0] &&
                                s.year === Number.parseInt(splitValue[1])
                        );
                        if (targetSem) {
                            // won't ever be null
                            console.log("submitting.");
                            handleSubmit(course, fromSem, targetSem);
                        }
                    }}
                >
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

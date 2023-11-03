/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React, { useState } from "react";
import { Course } from "../interfaces/course";
import { Button, Form } from "react-bootstrap";

/**
 * A single row of the courses table for the semester view
 * @param course The course for this row
 * @param editMode If the parent semester view is in edit mode, we add a Delete button
 * @param deleteCourse A function which deletes the course of this row from the semester
 */
export function PlannedCourses({
    course,
    editMode,
    deleteCourse
}: {
    course: Course;
    editMode: boolean;
    deleteCourse: (course: Course) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [currentCourse, setCurrentCourse] = useState<Course>(course);

    const updateCode = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCurrentCourse({
            ...currentCourse,
            code: event.target.value
        });
    };
    const updateName = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCurrentCourse({
            ...currentCourse,
            name: event.target.value
        });
    };
    const updateCredits = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setCurrentCourse({
            ...currentCourse,
            credits: parseInt(event.target.value)
        });
    };

    return (
        <tr>
            <td>
                {currentCourse.code}: {currentCourse.name}
                <br />
            </td>
            <td> {currentCourse.credits}</td>
            {editMode ? (
                <td>
                    <Button onClick={() => setEditing(!editing)}>
                        Edit Course
                    </Button>
                    <Button
                        className="btn btn-danger"
                        onClick={() => deleteCourse(course)}
                    >
                        Delete Course
                    </Button>
                    {editing ? (
                        <Form.Group controlId="editCourse">
                            <Form.Label>Course Code</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentCourse.code}
                                onChange={updateCode}
                            ></Form.Control>
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentCourse.name}
                                onChange={updateName}
                            ></Form.Control>
                            <Form.Label>Course Credits</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentCourse.credits}
                                onChange={updateCredits}
                            ></Form.Control>
                        </Form.Group>
                    ) : null}
                </td>
            ) : null}
        </tr>
    );
}

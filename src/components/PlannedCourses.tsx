/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React, { useState } from "react";
import { Course } from "../interfaces/course";
import { Button, Form } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { DegreePlan } from "../interfaces/degreePlan";

/**
 * A single row of the courses table for the semester view
 * @param course The course for this row
 * @param editMode If the parent semester view is in edit mode, we add a Delete button
 * @param deleteCourse A function which deletes the course of this row from the semester
 */
export function PlannedCourses({
    course,
    sem,
    degreePlan,
    editMode,
    deleteCourse,
    setCurrentSemester,
    updatePlan
}: {
    course: Course;
    sem: Semester;
    degreePlan: DegreePlan;
    editMode: boolean;
    deleteCourse: (course: Course) => void;
    setCurrentSemester: (newSem: Semester | null) => void;
    updatePlan: (newPlan: DegreePlan, exit: boolean) => void;
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
            credits: Number.parseInt(event.target.value)
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
                                type="number"
                                value={currentCourse.credits}
                                onChange={updateCredits}
                            ></Form.Control>
                            <Button
                                variant="success"
                                onClick={() => {
                                    const updatedSemesterCourses =
                                        sem.courses.map(
                                            (c: Course): Course =>
                                                c === course ? currentCourse : c
                                        );
                                    const updatedSemester: Semester = {
                                        ...sem,
                                        courses: updatedSemesterCourses
                                    };
                                    const updatedSemesters =
                                        degreePlan.semesters.map(
                                            (s: Semester): Semester =>
                                                s === sem ? updatedSemester : s
                                        );
                                    const updatedPlan: DegreePlan = {
                                        ...degreePlan,
                                        semesters: updatedSemesters
                                    };
                                    setCurrentSemester(updatedSemester);
                                    updatePlan(updatedPlan, false);
                                    setEditing(false);
                                }}
                            >
                                OK
                            </Button>
                        </Form.Group>
                    ) : null}
                </td>
            ) : null}
        </tr>
    );
}

/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React, { useState } from "react";
import { Course } from "../interfaces/course";
import { Button, Form } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { DegreePlan } from "../interfaces/degreePlan";
import "../Control.css";
import { MoveCoursePopup } from "./modals/MoveCoursePopup";

/**
 * A single row of the courses table for the semester view
 * @param course The course for this row
 * @param editMode If the parent semester view is in edit mode, we add a Delete button
 * @param deleteCourse A function which deletes the course of this row from the semester
 * @param deleteAllCourses Deletes all courses from a semester
 */
export function PlannedCourses({
    course,
    sem,
    degreePlan,
    editMode,
    showPrereqs,
    deleteCourse,
    deleteAllCourses,
    setCurrentSemester,
    updatePlan
}: {
    course: Course;
    sem: Semester;
    degreePlan: DegreePlan;
    editMode: boolean;
    showPrereqs: boolean;
    deleteCourse: (course: Course) => void;
    deleteAllCourses?: (semester: Semester) => void;
    setCurrentSemester: (newSem: Semester | null) => void;
    updatePlan: (newPlan: DegreePlan, exit: boolean) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [showMoveCourse, setShowMoveCourse] = useState<boolean>(false);
    const [currentCourse, setCurrentCourse] = useState<Course>(course);
    const [origCourse, setOrigCourse] = useState<Course | undefined>(
        course.originalCourse
    );

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
    const updateSemesterAndPlan = (semesterCourses: Course[]): void => {
        const updatedSemester: Semester = {
            ...sem,
            courses: semesterCourses
        };
        const updatedSemesters = degreePlan.semesters.map((s: Semester) =>
            s === sem ? updatedSemester : s
        );
        const updatedPlan: DegreePlan = {
            ...degreePlan,
            semesters: updatedSemesters
        };

        setCurrentSemester(updatedSemester);
        updatePlan(updatedPlan, false);
    };

    const handleMoveCourseSubmit = (
        course: Course | null,
        fromSem: Semester | null,
        toSem: Semester | null
    ) => {
        setShowMoveCourse(false);
        if (!course || !fromSem || !toSem) return;

        console.log(course);
        console.log(fromSem);
        console.log(toSem);

        // remove course from this semester
        const updatedFromSemester: Semester = {
            ...sem,
            courses: sem.courses.filter(
                (c: Course): boolean => c.code !== course.code
            )
        };
        let updatedSemesters: Semester[] = degreePlan.semesters.map(
            (s: Semester) => (s === sem ? updatedFromSemester : s)
        );
        setCurrentSemester(updatedFromSemester);

        // and add it to the target one
        const updatedToSemester: Semester = {
            ...toSem,
            courses: [...toSem.courses, course]
        };
        updatedSemesters = updatedSemesters.map((s: Semester) =>
            s === toSem ? updatedToSemester : s
        );

        const updatedPlan: DegreePlan = {
            ...degreePlan,
            semesters: updatedSemesters
        };
        updatePlan(updatedPlan, false);
    };

    return (
        <>
            <tr>
                <td>
                    <u>
                        {currentCourse.code}: {currentCourse.name}
                    </u>
                    <br />
                    {showPrereqs ? (
                        <em>
                            <strong>Prereqs: </strong>
                            {currentCourse.prereqs === ""
                                ? "None"
                                : currentCourse.prereqs}
                            <br />
                            <strong>Breadth Fulfilled: </strong>
                            {currentCourse.breadthFulfilled ?? "None"}
                            <br />
                            {currentCourse.isMulticultural ? (
                                <strong>Satisfies multicultural</strong>
                            ) : null}
                        </em>
                    ) : (
                        ""
                    )}
                </td>
                <td> {currentCourse.credits}</td>
                {editMode ? (
                    <td>
                        <Button
                            className="positive"
                            onClick={() => {
                                setEditing(!editing);
                                setOrigCourse({ ...currentCourse });
                                setCurrentCourse({
                                    ...currentCourse,
                                    originalCourse: { ...currentCourse }
                                });
                            }}
                        >
                            Edit Course
                        </Button>
                        <Button
                            className="positive"
                            onClick={() => {
                                if (origCourse) {
                                    const updatedSemester: Semester = {
                                        ...sem,
                                        courses: sem.courses.map(
                                            (c: Course): Course =>
                                                c.code === currentCourse.code
                                                    ? origCourse
                                                    : c
                                        )
                                    };
                                    setCurrentCourse(origCourse);
                                    setCurrentSemester(updatedSemester);
                                    const updatedSemesters: Semester[] =
                                        degreePlan.semesters.map(
                                            (s: Semester) =>
                                                s === sem ? updatedSemester : s
                                        );
                                    const updatedPlan: DegreePlan = {
                                        ...degreePlan,
                                        semesters: updatedSemesters
                                    };
                                    updatePlan(updatedPlan, false);
                                }
                            }}
                        >
                            Revert Changes
                        </Button>
                        <Button
                            className="negative"
                            onClick={() => deleteCourse(course)}
                        >
                            Delete Course
                        </Button>
                        <Button
                            className="negative"
                            onClick={() => deleteAllCourses?.(sem)}
                        >
                            Delete All Courses
                        </Button>
                        <Button
                            className="positive"
                            onClick={() => {
                                if (degreePlan.semesters.length > 1) {
                                    setShowMoveCourse(true);
                                } else {
                                    alert(
                                        "You need 2 or more semesters to move a course."
                                    );
                                }
                            }}
                        >
                            Move Course
                        </Button>
                        {editing ? (
                            <Form.Group controlId="editCourse">
                                <Form.Label>Course Code</Form.Label>
                                <br />
                                <Form.Control
                                    type="text"
                                    value={currentCourse.code}
                                    onChange={updateCode}
                                    className="gen_dp"
                                ></Form.Control>
                                <br />
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
                                    className="positive"
                                    onClick={() => {
                                        if (currentCourse.credits < 1) {
                                            alert(
                                                "Courses must be one or more credits"
                                            );
                                        } else {
                                            let addCourse = true;
                                            degreePlan.semesters.forEach(
                                                (s: Semester) => {
                                                    s.courses.forEach(
                                                        (c: Course) => {
                                                            if (
                                                                c.code ===
                                                                currentCourse.code
                                                            ) {
                                                                alert(
                                                                    `${c.code} is already in this or another semester!`
                                                                );
                                                                addCourse =
                                                                    false;
                                                            }
                                                        }
                                                    );
                                                }
                                            );
                                            if (addCourse) {
                                                setCurrentCourse({
                                                    ...currentCourse,
                                                    originalCourse: origCourse
                                                });
                                                setOrigCourse(
                                                    currentCourse.originalCourse
                                                );
                                                const updatedSemesterCourses =
                                                    sem.courses.map(
                                                        (c: Course): Course =>
                                                            c === course
                                                                ? currentCourse
                                                                : c
                                                    );
                                                updateSemesterAndPlan(
                                                    updatedSemesterCourses
                                                );
                                                setEditing(false);
                                            }
                                        }
                                    }}
                                >
                                    OK
                                </Button>
                            </Form.Group>
                        ) : null}
                    </td>
                ) : null}
            </tr>
            <MoveCoursePopup
                show={showMoveCourse}
                degreePlan={degreePlan}
                course={currentCourse}
                fromSem={sem}
                handleSubmit={handleMoveCourseSubmit}
            />
        </>
    );
}

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
    const equalsOriginal = (course: Course): boolean => {
        if (course.originalCourse && origCourse) {
            console.log(
                "Checking if codes are equal...",
                course.originalCourse.code === origCourse.code
            );
            console.log(
                "Checking if names are equal...",
                course.originalCourse.name === origCourse.name
            );
            console.log(
                "Checking if credits are equal...",
                course.originalCourse.credits === origCourse.credits
            );
            console.log("course.originalCourse: ", course.originalCourse);
            console.log("origCourse: ", origCourse);
            return (
                course.originalCourse.code === origCourse.code &&
                course.originalCourse.name === origCourse.name &&
                course.originalCourse.credits === origCourse.credits
            );
        }
        return false;
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
                    <Button
                        className="positive"
                        onClick={() => {
                            setEditing(!editing);
                            setOrigCourse({ ...currentCourse });
                            setCurrentCourse({
                                ...currentCourse,
                                originalCourse: { ...currentCourse }
                            });
                            console.log(currentCourse.originalCourse);
                        }}
                    >
                        Edit Course
                    </Button>
                    <Button
                        className="negative"
                        onClick={() => deleteCourse(course)}
                    >
                        Delete Course
                    </Button>
                    <Button
                        className="positive"
                        onClick={() => {
                            console.log("origCourse: ", origCourse);
                            if (origCourse) {
                                console.log("made it inside the if statement");
                                const updatedSemesterCourses = sem.courses.map(
                                    (c: Course): Course =>
                                        equalsOriginal(c)
                                            ? !origCourse
                                                ? c
                                                : origCourse
                                            : c
                                );
                                updateSemesterAndPlan(updatedSemesterCourses);
                            }
                        }}
                    >
                        Revert Changes
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
                                className="positive"
                                onClick={() => {
                                    setCurrentCourse({
                                        ...currentCourse,
                                        originalCourse: origCourse
                                    });
                                    console.log(
                                        "currentCourse: ",
                                        currentCourse
                                    );
                                    setOrigCourse(currentCourse.originalCourse);
                                    console.log("origCourse: ", origCourse);
                                    const updatedSemesterCourses =
                                        sem.courses.map(
                                            (c: Course): Course =>
                                                c === course ? currentCourse : c
                                        );
                                    updateSemesterAndPlan(
                                        updatedSemesterCourses
                                    );
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

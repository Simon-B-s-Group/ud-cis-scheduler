/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React, { useState } from "react";
import { SemesterView } from "./SemesterView";
import { Semester } from "../interfaces/semester";
import { Button, Form } from "react-bootstrap";
import { CourseOption } from "../interfaces/courseoption";
import { Course } from "../interfaces/course";
import { DegreePlan } from "../interfaces/degreePlan";
import { courseOptions } from "./../data/defaultCourses";
import "../Button.css";

/**
 * A page that allows one to edit a single semester.
 *
 * @param sem The semester being edited.
 *
 * @param degreePlan The degree plan this semester is in.
 *
 * @param setCurrentSemester This is a function which sets the current semester to a Semester object or null.
 * (SEE: setCurrentSemester in App.tsx; that's what gets passed into here)
 * In this case, we use it to update the semester data when we change something.
 *
 * @param updatePlan This function updates the plan containing this semester.
 * (SEE: updateDegreePlan in App.tsx; that's what gets passed into here)
 */
export function SingleSemesterPage({
    sem,
    degreePlan,
    setCurrentSemester,
    updatePlan
}: {
    sem: Semester;
    degreePlan: DegreePlan;
    setCurrentSemester: (newSem: Semester | null) => void;
    updatePlan: (newPlan: DegreePlan, exit: boolean) => void;
}) {
    // the code of the currently selected course to add
    const [currentSelectedCourse, setCurrentSelectedCourse] = useState<string>(
        courseOptions[0].course.code
    );
    const updateCurrentSelectedCourse = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        setCurrentSelectedCourse(event.target.value);
    };

    // the course data of the currently inputted custom course (on the bottom form)
    const [currentCustomCourse, setCurrentCustomCourse] = useState<Course>({
        code: "CISC366",
        name: "Independent Study",
        credits: 3
    });
    const updateCustomCode = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setCurrentCustomCourse({
            ...currentCustomCourse,
            code: event.target.value
        });
    };
    const updateCustomName = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setCurrentCustomCourse({
            ...currentCustomCourse,
            name: event.target.value
        });
    };
    const updateCustomCredits = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setCurrentCustomCourse({
            ...currentCustomCourse,
            credits: Number.parseInt(event.target.value)
        });
    };

    /**
     * Adds a new course to the semester and updates the plan containing it accordingly.
     * @param course The course that is currently selected in the newCourse form
     */
    const addCourseToSemester = (course: Course) => {
        // the updated semester
        const newSemester = { ...sem, courses: [...sem.courses, course] };
        setCurrentSemester(newSemester);

        // the updated list of semesters for this plan
        const updatedPlanSemesters = degreePlan.semesters.map(
            (semester: Semester): Semester => {
                return semester.season === newSemester.season &&
                    semester.year === newSemester.year
                    ? newSemester
                    : semester;
            }
        );

        // actually update this plan's semester data
        const updatedPlan: DegreePlan = {
            ...degreePlan,
            semesters: updatedPlanSemesters
        };
        updatePlan(updatedPlan, false);
    };

    return (
        <>
            <Button
                onClick={() => setCurrentSemester(null)}
                className="negative"
            >
                Go Back
            </Button>
            <b>
                <u>
                    <h5>Edit This Semester</h5>
                </u>
            </b>
            <SemesterView
                sem={sem}
                degreePlan={degreePlan}
                editMode={true}
                setCurrentSemester={setCurrentSemester}
                updatePlan={updatePlan}
            />
            <b>
                <u>
                    <h6>Add Course to Semester</h6>
                </u>
            </b>
            <p>
                If your desired course isn&apos;t here, you can add a custom one
                below!
            </p>
            <Form.Group controlId="newCourse">
                <Form.Select
                    value={currentSelectedCourse}
                    onChange={updateCurrentSelectedCourse}
                >
                    {courseOptions.map((courseOption: CourseOption) => (
                        <option
                            key={courseOption.course.code}
                            value={courseOption.course.code}
                        >
                            {courseOption.course.code}
                        </option>
                    ))}
                </Form.Select>
                <Button
                    variant="success"
                    onClick={() => {
                        const foundCourse = courseOptions.find(
                            (option: CourseOption): boolean =>
                                option.course.code === currentSelectedCourse
                        );
                        if (foundCourse) {
                            // theoretically this should never be null
                            const courseInSemester = sem.courses.find(
                                (course: Course): boolean =>
                                    course.code === currentSelectedCourse
                            );

                            if (courseInSemester)
                                alert(
                                    `${currentSelectedCourse} is already in this semester!`
                                );
                            else addCourseToSemester(foundCourse.course);
                        }
                    }}
                    className="positive"
                >
                    OK
                </Button>
            </Form.Group>
            <b>
                <u>
                    <h6>Add Custom Course</h6>
                </u>
            </b>
            <Form.Group controlId="newCourse">
                <Form.Label>Course Code</Form.Label>
                <Form.Control
                    type="text"
                    value={currentCustomCourse.code}
                    onChange={updateCustomCode}
                />
                <Form.Label>Course Name</Form.Label>
                <Form.Control
                    type="text"
                    value={currentCustomCourse.name}
                    onChange={updateCustomName}
                />
                <Form.Label>Course Credits</Form.Label>
                <Form.Control
                    type="number"
                    value={currentCustomCourse.credits}
                    onChange={updateCustomCredits}
                />
                <Button
                    variant="success"
                    onClick={() => {
                        const courseInSemester = sem.courses.find(
                            (course: Course): boolean =>
                                course.code === currentCustomCourse.code
                        );

                        if (courseInSemester)
                            alert(
                                `${currentCustomCourse.code} is already in this semester!`
                            );
                        else addCourseToSemester(currentCustomCourse);
                    }}
                    className="positive"
                >
                    OK
                </Button>
            </Form.Group>
        </>
    );
}

/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React, { useState } from "react";
import { SemesterView } from "./SemesterView";
import { Semester } from "../interfaces/semester";
import { Button, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { DegreePlan } from "../interfaces/degreePlan";
import { courseOptions } from "./../data/defaultCourses";
import "../Button.css";
import "../Dropdown.css";
import { BreadthType } from "../interfaces/degreeRequirementCategory";

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
    const BREADTH_TYPES = [
        "Art",
        "History",
        "Social",
        "Math",
        "College",
        "None"
    ];

    // the code of the currently selected course to add
    const [currentSelectedCourse, setCurrentSelectedCourse] = useState<string>(
        courseOptions[0].code
    );
    const updateCurrentSelectedCourse = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        setCurrentSelectedCourse(event.target.value);
    };

    // the course data of the currently inputted custom course (on the bottom form)
    const [currentCustomCourse, setCurrentCustomCourse] = useState<Course>({
        code: "CISC488",
        name: "Introduction to Natural Language Processing",
        credits: 3,
        prereqs:
            "CISC220 and experience programming in Python.  A first course in probability or statistics is recommended.",
        isMulticultural: false,
        breadthFulfilled: undefined
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
    const updateCustomPrereqs = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setCurrentCustomCourse({
            ...currentCustomCourse,
            prereqs: event.target.value
        });
    };
    const updateCustomBreadth = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setCurrentCustomCourse({
            ...currentCustomCourse,
            breadthFulfilled:
                event.target.value === "None"
                    ? undefined
                    : (event.target.value as BreadthType)
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
                    className="gen_dp"
                >
                    {courseOptions.map((courseOption: Course) => (
                        <option
                            key={courseOption.code}
                            value={courseOption.code}
                        >
                            {courseOption.code}
                        </option>
                    ))}
                </Form.Select>
                <Button
                    variant="success"
                    onClick={() => {
                        const foundCourse = courseOptions.find(
                            (option: Course): boolean =>
                                option.code === currentSelectedCourse
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
                            else addCourseToSemester(foundCourse);
                        }
                    }}
                    className="positive"
                >
                    OK
                </Button>
            </Form.Group>
            <strong>
                <u>
                    <h6>Add Custom Course</h6>
                </u>
            </strong>
            {currentCustomCourse.code.length >= 6 ? (
                <p>
                    Click{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://udapps.nss.udel.edu/CourseDescription/info?searchKey=2023%7c${currentCustomCourse.code.toUpperCase()}`}
                    >
                        here
                    </a>{" "}
                    to view more info about{" "}
                    {currentCustomCourse.code.toUpperCase()}!
                </p>
            ) : null}
            <Form.Group controlId="newCourse">
                <Form.Label>Course Code</Form.Label>
                <Form.Control
                    type="text"
                    value={currentCustomCourse.code}
                    onChange={updateCustomCode}
                    className="code_ct"
                />
                <Form.Label>Course Name</Form.Label>
                <Form.Control
                    type="text"
                    value={currentCustomCourse.name}
                    onChange={updateCustomName}
                    className="class_name_ct"
                />
                <Form.Label>Course Credits</Form.Label>
                <Form.Control
                    type="number"
                    value={currentCustomCourse.credits}
                    onChange={updateCustomCredits}
                    className="credits_ct"
                />
                <Form.Label>Course Prerequisites</Form.Label>
                <Form.Control
                    type="text"
                    value={currentCustomCourse.prereqs}
                    onChange={updateCustomPrereqs}
                    className="prereq_ct"
                />
                <Form.Label>Breadth Category</Form.Label>
                <br />
                <Form.Select
                    value={currentCustomCourse.breadthFulfilled ?? "None"}
                    onChange={updateCustomBreadth}
                    className="gen_dp"
                >
                    {BREADTH_TYPES.map((breadth: string) => (
                        <option key={breadth} value={breadth}>
                            {breadth}
                        </option>
                    ))}
                </Form.Select>
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
            <p>
                <strong>Other Resources</strong>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={
                        "https://catalog.udel.edu/preview_program.php?catoid=87&poid=75605"
                    }
                >
                    Creative Arts & Humanities Breadth Classes
                </a>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={
                        "https://catalog.udel.edu/preview_program.php?catoid=87&poid=75606"
                    }
                >
                    History & Cultural Change Breadth Classes
                </a>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={
                        "https://catalog.udel.edu/preview_program.php?catoid=87&poid=75609"
                    }
                >
                    Social and Behavioral Sciences Breadth Classes
                </a>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={
                        "https://catalog.udel.edu/preview_program.php?catoid=87&poid=75610"
                    }
                >
                    Math, Natural Sciences, & Technology Breadth Classes
                </a>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={
                        "https://catalog.udel.edu/preview_program.php?catoid=87&poid=75590"
                    }
                >
                    College of Engineering Breadth Classes
                </a>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={
                        "https://catalog.udel.edu/preview_program.php?catoid=87&poid=75697"
                    }
                >
                    Multicultural Classes
                </a>
            </p>
        </>
    );
}

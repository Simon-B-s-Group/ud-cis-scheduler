/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React from "react";
import { Season, Semester } from "../interfaces/semester";
import { PlannedCourses } from "./PlannedCourses";
import { Course } from "../interfaces/course";
import "../Table.css";
import { Button } from "react-bootstrap";

/**
 * This represents a table showing a semester and its courses/credit totals.
 *
 * @param sem The semester to be used for this component.
 *
 * @param editMode
 * If true, this will hide the Edit/Delete buttons for use in the SingleSemesterPage component.
 * If false, this shows those buttons for use in the DegreePlanPage component.
 *
 * @param setCurrentSemester This is a function which sets the current semester to a Semester object or null.
 * (SEE: setCurrentSemester in App.tsx; that's what gets passed into here)
 * If currentSemester is not null, it will show a SingleSemesterPage with that semester. Otherwise, it will show the parent DegreePlan's page.
 *
 * @param deleteThisSem This is a function which will permanently delete this semester from its parent DegreePlan.
 * (SEE: handleSemDelete in DegreePlanPage.tsx; that's what gets passed into here)
 */
export function SemesterView({
    sem,
    editMode,
    setCurrentSemester,
    deleteThisSem
}: {
    sem: Semester;
    editMode: boolean;
    setCurrentSemester: (newSem: Semester | null) => void;
    deleteThisSem: (season: Season, year: number) => void;
}): JSX.Element {
    return (
        <div>
            <span>
                <strong>
                    {sem.season} {sem.year} {" Courses:"}
                </strong>
            </span>
            <br></br>
            {!editMode ? (
                <>
                    <Button
                        variant="primary"
                        onClick={() => setCurrentSemester(sem)}
                    >
                        Edit Semester
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => deleteThisSem(sem.season, sem.year)}
                    >
                        Delete Semester
                    </Button>
                </>
            ) : null}
            {sem.courses.length === 0 ? (
                <p>
                    <em>No courses yet...</em>
                </p>
            ) : (
                <table className="center">
                    <th>Course</th>
                    <th>Credits</th>
                    <tr>{sem.courses.map(PlannedCourses)}</tr>
                    <tr>
                        Total Credits for Semester:{" "}
                        {sem.courses.reduce(
                            (currentTotal: number, currentCourse: Course) =>
                                currentTotal + currentCourse.credits,
                            0
                        )}
                    </tr>
                    <br></br>
                </table>
            )}
        </div>
    );
}

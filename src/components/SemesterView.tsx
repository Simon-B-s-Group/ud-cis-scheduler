/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React from "react";
import { Season, Semester } from "../interfaces/semester";
import { PlannedCourses } from "./PlannedCourses";
import { Course } from "../interfaces/course";
import "../Table.css";
import { Button } from "react-bootstrap";

export function SemesterView({
    sem,
    deleteThisSem
}: {
    sem: Semester;
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
            <Button variant="primary" onClick={() => console.log("hello")}>
                Edit Semester
            </Button>
            <Button
                variant="danger"
                onClick={() => deleteThisSem(sem.season, sem.year)}
            >
                Delete Semester
            </Button>
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

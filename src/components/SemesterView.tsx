/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React from "react";
import { Semester } from "../interfaces/semester";
import { PlannedCourses } from "./PlannedCourses";
import { Course } from "../interfaces/course";
import "../Table.css";

export function SemesterView({ season, year, courses }: Semester): JSX.Element {
    return (
        <div>
            <strong>
                {season} {year} {" Courses:"}
            </strong>
            {courses.length === 0 ? (
                <p>
                    <em>No courses yet...</em>
                </p>
            ) : (
                <table className="center">
                    <th>Course</th>
                    <th>Credits</th>
                    <tr>{courses.map(PlannedCourses)}</tr>
                    <tr>
                        Total Credits for Semester:{" "}
                        {courses.reduce(
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

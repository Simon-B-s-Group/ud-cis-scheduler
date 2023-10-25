import React from "react";
import { Semester } from "../interfaces/semester";
import { PlannedCourses } from "./PlannedCourses";

export function SemesterView({ season, year, courses }: Semester): JSX.Element {
    return (
        <div>
            {season} {year} {" Courses:"}
            <table>
                <tr>{courses.map(PlannedCourses)}</tr>
            </table>
        </div>
    );
}

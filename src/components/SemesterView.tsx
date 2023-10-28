import React from "react";
import { Semester } from "../interfaces/semester";
import { PlannedCourses } from "./PlannedCourses";
import { Course } from "../interfaces/course";
import "../Table.css";

export function SemesterView({ season, year, courses }: Semester): JSX.Element {
    return (
        <div>
            {season} {year} {" Courses:"}
            <table className="center">
                <tr>
                    <th>Course</th>
                    <th>Credits</th>
                </tr>
                {courses.map(PlannedCourses)}
                <tr>
                    <td>Total Credits for Semester: </td>
                    <td>
                        {courses.reduce(
                            (currentTotal: number, currentCourse: Course) =>
                                currentTotal + currentCourse.credits,
                            0
                        )}
                    </td>
                </tr>
                <br></br>
            </table>
        </div>
    );
}

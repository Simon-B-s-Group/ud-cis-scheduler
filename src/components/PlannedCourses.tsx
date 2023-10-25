import React from "react";
import { Course } from "../interfaces/course";

export function PlannedCourses(course: Course): JSX.Element {
    return (
        <tr>
            <td>
                {course.code}: {course.name}
            </td>
            <td> {course.credits}</td>
        </tr>
    );
}

import React from "react";
import { Course } from "../interfaces/course";

export function PlannedCourses(course: Course): JSX.Element {
    return (
        <td>
            {course.code}: {course.name} ({course.credits} credits)
        </td>
    );
}

import React from "react";
import { Course } from "../interfaces/course";

export function PlannedCourses(course: Course): JSX.Element {
    return (
        <li>
            {course.code}: {course.name} ({course.credits} credits)
        </li>
    );
}

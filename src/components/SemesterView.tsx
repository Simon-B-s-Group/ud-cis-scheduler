/* eslint-disable react/react-in-jsx-scope */
import "react";
import { Semester } from "../interfaces/semester";
import { PlannedCourses } from "./PlannedCourses";
import { Course } from "../interfaces/course";

export function SemesterView({ season, year, courses }: Semester): JSX.Element {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div>
            {season} {year} {" Courses:"}
            {courses.map(PlannedCourses)}
        </div>
    );
}

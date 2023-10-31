/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React from "react";
import { Course } from "../interfaces/course";
import { Button } from "react-bootstrap";

/**
 * A single row of the courses table for the semester view
 * @param course The course for this row
 * @param editMode If the parent semester view is in edit mode, we add a Delete button
 * @param deleteCourse A function which deletes the course of this row from the semester
 */
export function PlannedCourses({
    course,
    editMode,
    deleteCourse
}: {
    course: Course;
    editMode: boolean;
    deleteCourse: (course: Course) => void;
}): JSX.Element {
    return (
        <tr>
            <td>
                {course.code}: {course.name}
                <br />
            </td>
            <td> {course.credits}</td>
            {editMode ? (
                <td>
                    <Button
                        className="btn btn-danger"
                        onClick={() => deleteCourse(course)}
                    >
                        Delete Course
                    </Button>
                </td>
            ) : null}
        </tr>
    );
}

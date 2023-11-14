/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React from "react";
import { Season, Semester } from "../interfaces/semester";
import { PlannedCourses } from "./PlannedCourses";
import { Course } from "../interfaces/course";
import "../Table.css";
import { Button } from "react-bootstrap";
import { DegreePlan } from "../interfaces/degreePlan";

/**
 * This represents a table showing a semester and its courses/credit totals.
 *
 * @param sem The semester to be used for this component
 *
 * @param degreePlan The degree plan this semester is a part of
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
 * NOTE: THIS IS AN OPTIONAL PARAMETER. ONLY TO BE USED IF THIS IS DISPLAYED IN NON-EDIT MODE (DegreePlanPage)
 *
 * @param deleteAllSem This is a function that permanently deletes all semesters from its parent DegreePlan.
 * (SEE: handleAllSemDelete in DegreePlanPage.tsx; that's what gets passed into here)
 *
 * @param updatePlan This function updates the plan containing this semester.
 * (SEE: updateDegreePlan in App.tsx; that's what gets passed into here)
 */
export function SemesterView({
    sem,
    degreePlan,
    editMode,
    setCurrentSemester,
    deleteThisSem,
    deleteAllSem,
    updatePlan
}: {
    sem: Semester;
    degreePlan: DegreePlan;
    editMode: boolean;
    setCurrentSemester: (newSem: Semester | null) => void;
    deleteThisSem?: (season: Season, year: number) => void; // the '?' indicates it is an optional parameter. We ONLY need this to be given in non-edit mode.
    deleteAllSem?: (season: Season, year: number) => void;
    updatePlan: (newPlan: DegreePlan, exit: boolean) => void;
}): JSX.Element {
    /**
     * This removes the given course from this semester and saves the whole plan.
     * @param course The course to remove
     */
    const deleteCourse = (course: Course) => {
        // the new courses list, with the selected one gone
        const updatedCourses = sem.courses.filter(
            (c: Course): boolean => c !== course
        );

        // the updated semester data without this course; done so it updates live
        const updatedSemester: Semester = { ...sem, courses: updatedCourses };
        setCurrentSemester(updatedSemester);

        // the new list of semesters, including this modified one - gets saved to the degree plan
        const updatedSemesters: Semester[] = degreePlan.semesters.map(
            (semester: Semester): Semester => {
                return sem.season === semester.season &&
                    sem.year === semester.year
                    ? updatedSemester
                    : semester;
            }
        );
        // the new plan with updated semesters
        const updatedPlan: DegreePlan = {
            ...degreePlan,
            semesters: updatedSemesters
        };
        updatePlan(updatedPlan, false);
    };

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
                        className="positive"
                    >
                        Edit Semester
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => deleteThisSem?.(sem.season, sem.year)}
                        className="negative"
                    >
                        Delete Semester
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => deleteAllSem?.(sem.season, sem.year)}
                        className="negative"
                    >
                        Delete All Semesters
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
                    {editMode ? <th></th> : null}
                    {sem.courses.map(
                        (course: Course): JSX.Element => (
                            <PlannedCourses
                                key={course.code}
                                course={course}
                                sem={sem}
                                degreePlan={degreePlan}
                                editMode={editMode}
                                deleteCourse={deleteCourse}
                                setCurrentSemester={setCurrentSemester}
                                updatePlan={updatePlan}
                            />
                        )
                    )}
                    <tr style={{ fontWeight: "bold" }}>
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

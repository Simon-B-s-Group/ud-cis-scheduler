import React from "react";
import { DegreePlan } from "../interfaces/degreePlan";
import { SemesterView } from "./SemesterView";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";

export function DegreePlanPage({ degreePlan }: { degreePlan: DegreePlan }) {
    const totalCredits = degreePlan.semesters.reduce(
        (currentTotal: number, currentSemester: Semester) =>
            currentTotal +
            currentSemester.courses.reduce(
                (credits: number, course: Course) => credits + course.credits,
                0
            ),
        0
    );

    const textColor = { color: totalCredits >= 124 ? "green" : "red" };

    return (
        <div key={degreePlan.name}>
            <b>
                <u>
                    <h5>{degreePlan.name}</h5>
                </u>
            </b>
            {degreePlan.semesters.map((semester: Semester): JSX.Element => {
                return (
                    <>
                        <SemesterView
                            season={semester.season}
                            year={semester.year}
                            courses={semester.courses}
                        ></SemesterView>
                    </>
                );
            })}
            Total Credits Overall: {""}
            <div>
                <span style={textColor}>{totalCredits + " / 124"}</span>
            </div>
        </div>
    );
}

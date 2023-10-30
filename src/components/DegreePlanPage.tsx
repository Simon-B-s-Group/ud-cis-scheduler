import React, { useState } from "react";
import { DegreePlan } from "../interfaces/degreePlan";
import { SemesterView } from "./SemesterView";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { Button } from "react-bootstrap";

export function DegreePlanPage({
    degreePlan,
    savePlan
}: {
    degreePlan: DegreePlan;
    savePlan: (newPlan: DegreePlan, exit: boolean) => void;
}) {
    const [thisPlan, setThisPlan] = useState<DegreePlan>({ ...degreePlan });
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
        <>
            <Button
                onClick={() => savePlan(thisPlan, true)}
                className="btn btn-danger"
            >
                Go Back
            </Button>
            <Button
                onClick={() =>
                    setThisPlan({
                        ...thisPlan,
                        semesters: [
                            ...thisPlan.semesters,
                            {
                                season: "Fall",
                                year: 100,
                                courses: [
                                    {
                                        code: "TEST",
                                        name: "TEST",
                                        credits: 124
                                    }
                                ]
                            }
                        ]
                    })
                }
                className="btn btn-primary"
            >
                New Semester
            </Button>
            <div key={thisPlan.name}>
                <b>
                    <u>
                        <h5>{thisPlan.name}</h5>
                    </u>
                </b>
                {thisPlan.semesters.map((semester: Semester): JSX.Element => {
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
        </>
    );
}

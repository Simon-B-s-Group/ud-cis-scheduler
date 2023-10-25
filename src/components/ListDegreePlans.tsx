import React, { useState } from "react";
import { DegreePlan } from "../interfaces/degreePlan";
// import { Course } from "../interfaces/course";
// import { PlannedCourses } from "./PlannedCourses";
// import { Semester } from "../interfaces/semester";
import { SemesterView } from "./SemesterView";
import { Semester } from "../interfaces/semester";

export function ListDegreePlans(): JSX.Element {
    const [degreePlanList] = useState<DegreePlan[]>([
        {
            name: "Freshman CS-BS",
            semesters: [
                {
                    season: "Fall",
                    year: 2023,
                    courses: [
                        {
                            code: "EGGG101",
                            name: "Introduction to Computer Science",
                            credits: 2
                        },
                        {
                            code: "CISC108",
                            name: "Introduction to Computer Science I",
                            credits: 3
                        },
                        {
                            code: "MATH241",
                            name: "Analytic Geometry & Calculus A",
                            credits: 4
                        },
                        {
                            code: "ENGL110",
                            name: "Seminar in Composition",
                            credits: 3
                        },
                        {
                            code: "LING101",
                            name: "Introduction to Linguistics I",
                            credits: 3
                        }
                    ]
                },
                {
                    season: "Spring",
                    year: 2024,
                    courses: [
                        {
                            code: "CISC181",
                            name: "Introduction to Computer Science II",
                            credits: 3
                        },
                        {
                            code: "CISC210",
                            name: "Introduction to Systems Programming",
                            credits: 3
                        },
                        {
                            code: "MATH242",
                            name: "Analytic Geometry & Calculus B",
                            credits: 4
                        },
                        {
                            code: "ECON101",
                            name: "Introduction to Microeconomics",
                            credits: 3
                        },
                        {
                            code: "ANTH382",
                            name: "Capitalism and Culture",
                            credits: 3
                        }
                    ]
                }
            ]
        },
        {
            name: "Sophomore CS-BS",
            semesters: []
        }
    ]);

    return (
        <div>
            <h3>Degree Plans</h3>
            {degreePlanList.map((degreePlan: DegreePlan): JSX.Element => {
                return (
                    <div key={degreePlan.name}>
                        <b>
                            <u>
                                <h5>{degreePlan.name}</h5>
                            </u>
                        </b>
                        {degreePlan.semesters.map(
                            (semester: Semester): JSX.Element => {
                                return (
                                    <>
                                        <SemesterView
                                            season={semester.season}
                                            year={semester.year}
                                            courses={semester.courses}
                                        ></SemesterView>
                                    </>
                                );
                            }
                        )}
                    </div>
                );
            })}
        </div>
    );
}

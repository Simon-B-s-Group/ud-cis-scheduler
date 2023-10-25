import React from "react";
import { DegreePlan } from "../interfaces/degreePlan";
import { SemesterView } from "./SemesterView";
import { Semester } from "../interfaces/semester";

export function DegreePlanPage({ degreePlan }: { degreePlan: DegreePlan }) {
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
        </div>
    );
}

import React from "react";
import { DegreePlan } from "../interfaces/degreePlan";
import { Semester } from "../interfaces/semester";

export function DegreePlanPage({ degreePlan }: { degreePlan: DegreePlan }) {
    return (
        <>
            <h1>{degreePlan.name}</h1>
            {degreePlan.semesters.map((sem: Semester): JSX.Element => {
                return (
                    <>
                        <h3>
                            COMPONENT FOR {sem.season} {sem.year} Semester GOES
                            HERE!!!! Will need to call Semester component here
                            after Leo makes it
                        </h3>
                    </>
                );
            })}
        </>
    );
}

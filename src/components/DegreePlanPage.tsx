import React from "react";
import { DegreePlan } from "../interfaces/degreePlan";

export function DegreePlanPage({ degreePlan }: { degreePlan: DegreePlan }) {
    return <>Words</>;
    // return (
    //     <>
    //         <h1>{degreePlan.name}</h1>
    //         {degreePlan.semesters.map((sem: Semester): JSX.Element => {
    //             return (
    //                 <>
    //                     <h3>
    //                         {sem.season} {sem.year}
    //                         <PlannedCourses sem==></PlannedCourses>
    //                     </h3>
    //                 </>
    //             );
    //         })}
    //     </>
    // );
}

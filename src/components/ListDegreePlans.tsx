import React, { useState } from "react";
import { DegreePlan } from "../interfaces/degreePlan";
// import { Course } from "../interfaces/course";
// import { PlannedCourses } from "./PlannedCourses";
// import { Semester } from "../interfaces/semester";
import { SemesterView } from "./SemesterView";
import { Semester } from "../interfaces/semester";
import { Button } from "react-bootstrap";

export function ListDegreePlans({
    degreePlans
}: {
    degreePlans: DegreePlan[];
}): JSX.Element {
    return (
        <div>
            <h3>Degree Plans</h3>
            {degreePlans.map((degreePlan: DegreePlan): JSX.Element => {
                return (
                    <div key={degreePlan.name}>
                        <h4>{degreePlan.name}</h4>
                        <p>{degreePlan.semesters.length} semesters</p>
                        <Button onClick={() => console.log("hello")}>
                            View Plan
                        </Button>
                    </div>
                );
            })}
        </div>
    );
}

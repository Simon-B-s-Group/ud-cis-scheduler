import React, { useState } from "react";
import { DegreePlan } from "../interfaces/degreePlan";
// import { Course } from "../interfaces/course";
// import { PlannedCourses } from "./PlannedCourses";
// import { Semester } from "../interfaces/semester";
import { SemesterView } from "./SemesterView";
import { Semester } from "../interfaces/semester";

export function ListDegreePlans(): JSX.Element {
    const [degreePlanList] = useState<DegreePlan[]>([]);

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

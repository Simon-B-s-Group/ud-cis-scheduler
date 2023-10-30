import React, { useState } from "react";
import { DegreePlan } from "../interfaces/degreePlan";
import { SemesterView } from "./SemesterView";
import { Season, Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { Button } from "react-bootstrap";
import { NewSemesterPopup } from "./modals/NewSemesterPopup";

export function DegreePlanPage({
    degreePlan,
    savePlan
}: {
    degreePlan: DegreePlan;
    savePlan: (newPlan: DegreePlan) => void;
}) {
    const [thisPlan, setThisPlan] = useState<DegreePlan>({ ...degreePlan }); // this is the plan being edited with this degree plan page
    const [showNewSemPopup, setShowNewSemPopup] = useState<boolean>(false);

    /**
     * To be used in tandem with the NewSemesterPopup modal. Once a submission is made
     * for a new semester, this adds the semester with the specified year and number to the plan,
     * if the fields are not null.
     *
     * If either field is null, this doesn't add anything and just closes the modal. This is
     * used if the user closes the modal by clicking outside of it instead of pressing OK.
     * @param season Season for the new semester
     * @param year Year for the new semester
     *
     * NOTE: We can use those two parameters since each semester has to be unique.
     */
    const handleNewSumSubmit = (
        season: Season | null,
        year: number | null
    ): void => {
        if (
            thisPlan.semesters.find(
                (sem: Semester): boolean =>
                    sem.season === season && sem.year === year
            )
        ) {
            alert(`${season} ${year} semester already exists!`);
            return;
        }

        setShowNewSemPopup(false);
        if (!season || !year) return;

        setThisPlan({
            ...thisPlan,
            semesters: [
                ...thisPlan.semesters,
                {
                    season,
                    year,
                    courses: []
                }
            ]
        });
    };

    /**
     * When a "Delete Semester" button is pressed, this deletes the semester associated with that button.
     * @param season The season of the semester to delete
     * @param year The year of the semester to delete
     */
    const handleSemDelete = (season: Season, year: number): void => {
        setThisPlan({
            ...thisPlan,
            semesters: [
                ...thisPlan.semesters.filter(
                    (sem: Semester): boolean =>
                        sem.season !== season || sem.year !== year
                )
            ]
        });
    };

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
                onClick={() => savePlan(thisPlan)}
                className="btn btn-danger"
            >
                Go Back
            </Button>
            <Button
                onClick={() => setShowNewSemPopup(true)}
                className="btn btn-primary"
            >
                New Semester
            </Button>
            <NewSemesterPopup
                show={showNewSemPopup}
                handleSubmit={handleNewSumSubmit}
            />
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
                                sem={semester}
                                deleteThisSem={handleSemDelete}
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

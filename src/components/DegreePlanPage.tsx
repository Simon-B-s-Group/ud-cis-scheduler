import React, { useEffect, useState } from "react";
import { DegreePlan } from "../interfaces/degreePlan";
import { SemesterView } from "./SemesterView";
import { Season, Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { Button } from "react-bootstrap";
import { NewSemesterPopup } from "./modals/NewSemesterPopup";

/**
 * A page showing a whole Degree Plan, specifically its name and semesters
 *
 * @param degreePlan The degree plan this page is showing
 *
 * @param savePlan This is a function which saves the plan to the state.
 * (SEE: updateDegreePlan in App.tsx; that's what gets passed into here)
 *
 * @param setCurrentSemester This is a function which sets the current semester to a Semester object or null.
 * (SEE: setCurrentSemester in App.tsx; that's what gets passed into here)
 * If currentSemester is not null, it will show a SingleSemesterPage with that semester. Otherwise, it will show the parent DegreePlan's page.
 */
export function DegreePlanPage({
    degreePlan,
    savePlan,
    setCurrentSemester
}: {
    degreePlan: DegreePlan;
    savePlan: (newPlan: DegreePlan, exit: boolean) => void;
    setCurrentSemester: (newSem: Semester | null) => void;
}) {
    // this is the plan being edited with this degree plan page
    const [thisPlan, setThisPlan] = useState<DegreePlan>({ ...degreePlan });
    const [showNewSemPopup, setShowNewSemPopup] = useState<boolean>(false);

    /**
     * Something I know from internship stuff
     * Every time thisPlan changes, we save its changes. (React state updates are asynchronous, so we need this)
     */
    useEffect(() => {
        savePlan(thisPlan, false);
    }, [thisPlan]);

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
     * NOTE: We can use those two parameters since each semester must have a unique season and year.
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
                onClick={() => savePlan(thisPlan, true)}
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
                                degreePlan={thisPlan}
                                editMode={false}
                                setCurrentSemester={setCurrentSemester}
                                deleteThisSem={handleSemDelete}
                                updatePlan={savePlan}
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

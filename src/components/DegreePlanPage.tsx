/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS
import React, { useEffect, useState } from "react";
import { DegreePlan } from "../interfaces/degreePlan";
import { SemesterView } from "./SemesterView";
import { Season, Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { Button } from "react-bootstrap";
import { NewSemesterPopup } from "./modals/NewSemesterPopup";
import "../Button.css";
import { DegreeRequirements } from "../interfaces/degreeRequirements";
import { concentrations } from "../data/concentrations";
import { DegreeRequirementCategory } from "../interfaces/degreeRequirementCategory";

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
    const [degreeRequirements, setDegreeRequirements] =
        useState<DegreeRequirements | null>(null);

    // TEMP
    const [reqsDisplay, setReqsDisplay] = useState<string[] | undefined>([]);

    /**
     * Something I know from internship stuff
     * Every time thisPlan loads, we set its requirements to be displayed (because find technically can return undefined so we cannot put it right into the state)
     */
    useEffect(() => {
        // TODO: combine this with actual concentration
        // TODO: currently it's just the common reqs
        // TODO: also add the 124 credit requirement
        const commonRequirements = concentrations.find(
            (c: DegreeRequirements): boolean => c.name === "Common Requirements"
        );
        const concentrationRequirements = concentrations.find(
            (c: DegreeRequirements): boolean =>
                c.name === thisPlan.concentration
        );
        let combinedRequirements: DegreeRequirementCategory[] = [];
        if (commonRequirements) {
            // won't ever be null
            combinedRequirements = [...commonRequirements.requirements];
        }
        if (concentrationRequirements) {
            // won't ever be null
            combinedRequirements = [
                ...combinedRequirements,
                ...concentrationRequirements.requirements
            ];
        }
        const requirements: DegreeRequirements = {
            name: concentrationRequirements?.name ?? "Degree Requirements",
            requirements: combinedRequirements
        };
        if (requirements) {
            // this won't ever be undefined
            setDegreeRequirements(requirements);
        }
    }, []);

    /**
     * Something I know from internship stuff
     * Every time thisPlan changes, we save its changes. (React state updates are asynchronous, so we need this)
     */
    useEffect(() => {
        savePlan(thisPlan, false);
    }, [thisPlan]);

    // TODO: THIS IS TEMPORARY. TO BE PROPERLY DONE LATER
    useEffect(() => {
        setReqsDisplay(
            degreeRequirements?.requirements.map((requirement) => {
                let retStr = `${requirement.name}: `;
                if (requirement.numCoursesRequired !== undefined) {
                    if (
                        requirement.coursesRequired &&
                        requirement.numCoursesRequired !==
                            requirement.coursesRequired.length
                    ) {
                        retStr += `At least ${requirement.numCoursesRequired} course(s) from: `;
                    } else {
                        retStr += "Must take ";
                    }
                } else {
                    retStr += `At least ${requirement.numCreditsRequired} credit(s) from: `;
                }

                if (requirement.coursesRequired !== undefined) {
                    retStr += requirement.coursesRequired.join(", ");
                } else if (requirement.courseTypeRequired !== undefined) {
                    retStr +=
                        requirement.courseTypeRequired + " Breadth courses";
                } else if (requirement.coursesMustHaveInName !== undefined) {
                    // TODO: make this look nicer
                    retStr += requirement.coursesMustHaveInName.join(", ");
                }

                return retStr;
            })
        );
    }, [degreeRequirements]);

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
                className="negative"
            >
                Go Back
            </Button>
            <Button
                onClick={() => setShowNewSemPopup(true)}
                className="positive"
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
                <span style={{ fontWeight: "bold " }}>
                    Total Credits Overall: {""}
                    <div>
                        <span style={textColor}>{totalCredits + " / 124"}</span>
                    </div>
                </span>
                {reqsDisplay
                    ? reqsDisplay.map((item) => <p key={item}>{item}</p>)
                    : null}
            </div>
        </>
    );
}

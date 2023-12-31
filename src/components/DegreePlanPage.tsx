/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS
import React, { useEffect, useState } from "react";
import { Concentration, DegreePlan } from "../interfaces/degreePlan";
import { SemesterView } from "./SemesterView";
import { Season, Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import { Button, Form } from "react-bootstrap";
import { NewSemesterPopup } from "./modals/NewSemesterPopup";
import "../Button.css";
import "../Dropdown.css";
import { DegreeRequirements } from "../interfaces/degreeRequirements";
import { concentrations } from "../data/concentrations";
import { DegreeRequirementCategory } from "../interfaces/degreeRequirementCategory";
import { Accordion } from "react-bootstrap";

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
    const [reqsDisplay, setReqsDisplay] = useState<JSX.Element | undefined>(
        <p></p>
    );
    const [selectedConcentration, setSelectedConcentration] = useState<string>(
        degreePlan.concentration
    );
    const [showPrereqs, setShowPrereqs] = useState<boolean>(false);

    /**
     * Something I know from internship stuff
     * Every time thisPlan loads or we change our concentration, we set its requirements to be displayed
     * (because find technically can return undefined so we cannot put it right into the state)
     */
    useEffect(() => {
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
    }, [selectedConcentration]);

    /**
     * Something I know from internship stuff
     * Every time thisPlan changes, we save its changes. (React state updates are asynchronous, so we need this)
     */
    useEffect(() => {
        savePlan(thisPlan, false);
    }, [thisPlan]);

    /**
     * Something I know from internship stuff
     * Once we setup degree requirements, we display them as an element
     */
    useEffect(() => {
        const coursesUsedForRequirements: Course[] = []; // courses that have been used for other requirements
        // used in conjunction with "unique" parameter to avoid duplicate course usage for some requirements

        // the elements to display in the degree requirement field
        const jsxElements = degreeRequirements?.requirements.map(
            (req, index) => {
                // === GET THE DESCRIPTION OF THE REQUIREMENT ===
                let descriptionString = "";
                if (req.numCoursesRequired !== undefined) {
                    if (
                        req.coursesRequired &&
                        req.numCoursesRequired !== req.coursesRequired.length
                    ) {
                        descriptionString += `At least ${req.numCoursesRequired} course(s) from: `;
                    } else {
                        descriptionString += "Must take ";
                    }
                } else {
                    descriptionString += `At least ${req.numCreditsRequired} credit(s) from: `;
                }

                if (req.coursesRequired !== undefined) {
                    descriptionString += req.coursesRequired.join(", ");
                } else if (req.courseTypeRequired !== undefined) {
                    descriptionString +=
                        req.courseTypeRequired + " Breadth courses";
                } else if (req.coursesMustHaveInName !== undefined) {
                    descriptionString +=
                        "CISC courses at the 300 level or higher";
                }

                // === CHECK WHICH COURSES USED TO SATISFY ===
                const coursesUsed: Course[] = []; // courses used ONLY for this requirement
                thisPlan.semesters.forEach((sem: Semester) => {
                    sem.courses.forEach((course: Course) => {
                        if (
                            req.unique &&
                            coursesUsedForRequirements.includes(course)
                        )
                            return;
                        if (req.coursesRequired !== undefined) {
                            if (req.coursesRequired.includes(course.code)) {
                                coursesUsedForRequirements.push(course);
                                coursesUsed.push(course);
                            }
                        } else if (req.coursesMustHaveInName !== undefined) {
                            req.coursesMustHaveInName.forEach((name) => {
                                if (course.code.includes(name)) {
                                    coursesUsedForRequirements.push(course);
                                    coursesUsed.push(course);
                                }
                            });
                        } else if (req.courseTypeRequired !== undefined) {
                            if (req.courseTypeRequired === "Multicultural") {
                                if (course.isMulticultural) {
                                    coursesUsedForRequirements.push(course);
                                    coursesUsed.push(course);
                                }
                            } else {
                                if (
                                    course.breadthFulfilled ===
                                    req.courseTypeRequired
                                ) {
                                    coursesUsedForRequirements.push(course);
                                    coursesUsed.push(course);
                                }
                            }
                        }
                    });
                });

                // === SETUP THE TEXT TO DISPLAY ON THE WINDOW ===
                const coursesUsedCodes = coursesUsed
                    .map((c: Course): string => c.code)
                    .sort();

                let requirementText = "";
                let checkOrCross = "❌";
                const satisfiedCredits = coursesUsed.reduce(
                    (credits: number, course: Course) =>
                        credits + course.credits,
                    0
                );

                if (req.numCreditsRequired !== undefined) {
                    requirementText = `${satisfiedCredits} credit(s) out of ${req.numCreditsRequired} taken`;
                    if (satisfiedCredits > 0) {
                        requirementText += `: ${coursesUsedCodes.join(", ")}`;
                    }

                    if (satisfiedCredits >= req.numCreditsRequired) {
                        checkOrCross = "✅";
                    }
                } else if (req.numCoursesRequired !== undefined) {
                    requirementText = `${coursesUsed.length} course(s) out of ${req.numCoursesRequired} taken`;
                    if (coursesUsed.length >= req.numCoursesRequired) {
                        checkOrCross = "✅";
                    } else {
                        if (
                            req.coursesRequired &&
                            req.coursesRequired.length ===
                                req.numCoursesRequired
                        ) {
                            const coursesLeft = req.coursesRequired.filter(
                                (cn: string) => !coursesUsedCodes.includes(cn)
                            );
                            requirementText += `: Must take ${coursesLeft.join(
                                ", "
                            )}`;
                        }
                    }
                }

                return (
                    <>
                        <Accordion.Item eventKey={index.toString()}>
                            <Accordion.Header>
                                <strong>
                                    {checkOrCross} {req.name}
                                </strong>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className="left-align-paragraph">
                                    <strong>Requirement: </strong>
                                    {descriptionString}
                                </p>
                                {requirementText ? (
                                    <p
                                        className="left-align-paragraph"
                                        style={{
                                            color:
                                                checkOrCross === "✅"
                                                    ? "#16c60c"
                                                    : "#f03a17"
                                        }}
                                    >
                                        <strong>Status: </strong>
                                        {requirementText}
                                    </p>
                                ) : null}
                            </Accordion.Body>
                        </Accordion.Item>
                    </>
                );
            }
        );

        // Render the array of JSX elements
        setReqsDisplay(
            <div className="conc_dp">
                <Accordion defaultActiveKey="0">{jsxElements}</Accordion>
            </div>
        );
    }, [thisPlan.semesters, degreeRequirements]);

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
            season === "Freestanding" &&
            thisPlan.semesters.find(
                (sem: Semester): boolean => sem.season === season
            )
        ) {
            alert(`${season} already exists!`);
            return;
        }

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

    const handleAllSemDelete = (): void => {
        setThisPlan({
            ...thisPlan,
            semesters: []
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

    const updateSelectedConcentration = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        setSelectedConcentration(event.target.value);
        setThisPlan({
            ...thisPlan,
            concentration: event.target.value as Concentration
        });
        savePlan(thisPlan, false);
    };

    const semToNum = (sem: Semester): number => {
        let value = 0;
        if (sem.season === "Spring") {
            value = 1;
        } else if (sem.season === "Summer") {
            value = 2;
        } else if (sem.season === "Fall") {
            value = 3;
        } else if (sem.season === "Freestanding") {
            value = 9999999; // have this be very last regardless
        }
        return sem.year * 10 + value;
    };

    thisPlan.semesters.sort(
        (a: Semester, b: Semester): number => semToNum(a) - semToNum(b)
    );

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
            <Button
                onClick={() => setShowPrereqs(!showPrereqs)}
                className="positive"
            >
                {showPrereqs ? "Hide" : "Show"} Pre/Corequisites
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
                            <div className="gen_table">
                                <SemesterView
                                    sem={semester}
                                    degreePlan={thisPlan}
                                    editMode={false}
                                    showPrereqs={showPrereqs}
                                    setCurrentSemester={setCurrentSemester}
                                    deleteThisSem={handleSemDelete}
                                    deleteAllSem={handleAllSemDelete}
                                    updatePlan={savePlan}
                                ></SemesterView>
                            </div>
                        </>
                    );
                })}
                <Form.Group controlId="conc">
                    <Form.Label>
                        <h5>
                            <u>Select Your Concentration</u>
                        </h5>
                    </Form.Label>
                    <br />
                    <Form.Select
                        value={selectedConcentration}
                        onChange={updateSelectedConcentration}
                        className="gen_dp"
                    >
                        {[
                            "No Concentration",
                            "AI & Robotics",
                            "Bioinformatics",
                            "Cybersecurity",
                            "Data Science",
                            "High Performance Computing (Applied Math)",
                            "High Performance Computing (Data)",
                            "Systems & Networks",
                            "Theory & Computation (Discrete)",
                            "Theory & Computation (Continuous)"
                        ].map((conc: string) => (
                            <option key={conc} value={conc}>
                                {conc}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {reqsDisplay}
                <div></div>
                <span style={{ fontWeight: "bold " }}>
                    Total Credits Overall: {""}
                    <div>
                        <span style={textColor}>{totalCredits + " / 124"}</span>
                    </div>
                </span>
            </div>
        </>
    );
}

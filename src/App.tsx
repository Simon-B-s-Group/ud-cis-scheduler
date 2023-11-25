/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React, { useState } from "react";
import "./App.css";
import "./Button.css";
import "./Control.css";

import { IntroPopup } from "./components/modals/IntroPopup";
import { DegreePlan } from "./interfaces/degreePlan";
import { Button, Form } from "react-bootstrap";
import { DegreePlanPage } from "./components/DegreePlanPage";
import { Semester } from "./interfaces/semester";
import { SingleSemesterPage } from "./components/SingleSemesterPage";

function App(): JSX.Element {
    // if true, the Intro popup will display
    const [showIntro, setShowIntro] = useState<boolean>(true);
    const handleClose = () => setShowIntro(false);

    // this is the list of all degree plans available
    const [degreePlans, setDegreePlans] = useState<DegreePlan[]>([
        {
            name: "Sample Degree Plan",
            concentration: "No Concentration",
            semesters: [
                {
                    season: "Fall",
                    year: 2023,
                    courses: [
                        {
                            code: "CISC108",
                            name: "Introduction to Computer Science I",
                            credits: 3,
                            prereqs: "",
                            isMulticultural: false
                        },
                        {
                            code: "EGGG101",
                            name: "Introduction to Engineering",
                            credits: 2,
                            prereqs: "",
                            isMulticultural: false
                        },
                        {
                            code: "ENGL110",
                            name: "First-Year Writing",
                            credits: 3,
                            prereqs: "",
                            isMulticultural: false
                        },
                        {
                            code: "MATH241",
                            name: "Analytic Geometry and Calculus A",
                            credits: 4,
                            prereqs:
                                "MATH117 or acceptable score on the Math Placement Exam in accordance with current standards determined by the Department of Mathematical Sciences. See https://www.mathsci.udel.edu/courses-placement/ud-math-placement for more information.",
                            isMulticultural: false,
                            breadthFulfilled: "Math"
                        },
                        {
                            code: "HIST106",
                            name: "U.S. History Since 1865",
                            credits: 3,
                            prereqs: "",
                            isMulticultural: false,
                            breadthFulfilled: "History"
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
                            credits: 3,
                            prereqs:
                                " Grade of C- or better in CISC108 or CISC106. COREQ: MATH221,  MATH241, or a higher level math course or math placement.",
                            isMulticultural: false
                        },
                        {
                            code: "CISC210",
                            name: "Introduction to Systems Programming",
                            credits: 3,
                            prereqs:
                                "A grade of C- or better in CISC106 or CISC108. COREQ: MATH221 or MATH241 or a higher level math course or math placement.",
                            isMulticultural: false
                        },
                        {
                            code: "MATH242",
                            name: "Analytic Geometry and Calculus B",
                            credits: 4,
                            prereqs: "MATH232 or MATH241.",
                            isMulticultural: false
                        },
                        {
                            code: "CGSC170",
                            name: "Introduction to Cognitive Science",
                            credits: 3,
                            prereqs: "",
                            isMulticultural: false,
                            breadthFulfilled: "Social"
                        },
                        {
                            code: "LING101",
                            name: "Introduction to Linguistics",
                            credits: 3,
                            prereqs: "",
                            isMulticultural: true,
                            breadthFulfilled: "Social"
                        }
                    ]
                },
                {
                    season: "Fall",
                    year: 2024,
                    courses: [
                        {
                            code: "CISC220",
                            name: "Data Structures",
                            credits: 3,
                            prereqs:
                                "A minimum grade of C- in CISC210. COREQ: MATH210 or MATH241.",
                            isMulticultural: false
                        },
                        {
                            code: "CISC260",
                            name: "Machine Organization and Assembly Language",
                            credits: 3,
                            prereqs: "A minimum grade of C- in CISC210.",
                            isMulticultural: false
                        },
                        {
                            code: "MATH210",
                            name: "Discrete Mathematics I",
                            credits: 3,
                            prereqs: "",
                            isMulticultural: false
                        },
                        {
                            code: "GEOL107",
                            name: "Geology of Dynamic Earth",
                            credits: 4,
                            prereqs: "",
                            isMulticultural: false
                        },
                        {
                            code: "LING202",
                            name: "Science of Language",
                            credits: 3,
                            prereqs: "LING101",
                            isMulticultural: false
                        }
                    ]
                },
                {
                    season: "Spring",
                    year: 2025,
                    courses: [
                        {
                            code: "CISC275",
                            name: "Introduction to Software Engineering",
                            credits: 3,
                            prereqs:
                                "Minimum grade of C- in CISC181 and CISC220.",
                            isMulticultural: false
                        },
                        {
                            code: "CISC355",
                            name: "Computers, Ethics and Society",
                            credits: 3,
                            prereqs: "",
                            isMulticultural: false,
                            breadthFulfilled: "College"
                        },
                        {
                            code: "CISC374",
                            name: "Educational Game Development",
                            credits: 3,
                            prereqs: "CISC 220.",
                            isMulticultural: false
                        },
                        {
                            code: "MATH205",
                            name: "Statistical Methods",
                            credits: 4,
                            prereqs: "MATH210 or MATH230.",
                            isMulticultural: false
                        },
                        {
                            code: "GEOL105",
                            name: "Geological Hazards and their Human Impacts",
                            credits: 3,
                            prereqs: "",
                            isMulticultural: false
                        },
                        {
                            code: "GEOL115",
                            name: "Geological Hazards Laboratory",
                            credits: 1,
                            prereqs: "",
                            isMulticultural: false
                        }
                    ]
                }
            ]
        }
    ]);

    // this is the current plan being edited, if any
    const [currentPlan, setCurrentPlan] = useState<DegreePlan | null>(null);

    // this is the current semester being edited, if any
    const [currentSemester, setCurrentSemester] = useState<Semester | null>(
        null
    );

    const [newPlanName, setNewPlanName] = useState<string>("");

    function changeNewPlanName(event: React.ChangeEvent<HTMLInputElement>) {
        setNewPlanName(event.target.value);
    }

    /**
     * This updates the degree plan with newPlan's name with newPlan.
     * i.e. If I have a plan named "Plan 1", and I have it loaded in the editor, if I change one of its courses,
     * then once I return to the home page, that degree plan will automatically be updated with the changes I made.
     * @param newPlan The new plan to use. Replaces the existing plan that shares its name.
     * @param exit If true, this saves and returns to the main menu. Otherwise, this just saves and stays on the degree plan page.
     */
    const updateDegreePlan = (newPlan: DegreePlan, exit: boolean): void => {
        const nameToUpdate = newPlan.name;

        const newPlans = degreePlans.map((plan: DegreePlan): DegreePlan => {
            return plan.name === nameToUpdate
                ? { ...newPlan, semesters: [...newPlan.semesters] }
                : { ...plan };
        });
        setDegreePlans([...newPlans]);

        if (exit) setCurrentPlan(null);
        else setCurrentPlan(newPlan);
    };

    return (
        <div className="App">
            <header className="App-header">
                UD CIS Scheduler <br></br>Simon Brugel - Cameron Wine - Leo Chen
                - Conor Jurewicz
            </header>
            {!currentPlan ? (
                <>
                    <IntroPopup show={showIntro} handleClose={handleClose} />
                    <Button onClick={() => setShowIntro(true)} className="gen">
                        About
                    </Button>
                    <h3>Degree Plans</h3>{" "}
                    <Form.Group controlId="planName">
                        <Form.Label>New Degree Plan</Form.Label>
                        <Form.Control
                            value={newPlanName}
                            onChange={changeNewPlanName}
                            className="gen_ct"
                        ></Form.Control>
                    </Form.Group>
                    <Button
                        className="positive"
                        onClick={() => {
                            setDegreePlans([
                                ...degreePlans,
                                {
                                    name: newPlanName,
                                    semesters: [],
                                    concentration: "No Concentration"
                                }
                            ]);
                            setNewPlanName("");
                        }}
                        disabled={
                            newPlanName.replace(/\s/g, "") === "" ||
                            degreePlans.findIndex(
                                (degreePlan: DegreePlan) =>
                                    newPlanName.replace(/\s/g, "") ===
                                    degreePlan.name.replace(/\s/g, "")
                            ) !== -1
                        }
                    >
                        Create New Degree Plan
                    </Button>
                    {degreePlans.map((degreePlan: DegreePlan): JSX.Element => {
                        return (
                            <div key={degreePlan.name}>
                                <h4>{degreePlan.name}</h4>
                                <p>
                                    {`[${degreePlan.concentration}]`} <br></br>
                                    {degreePlan.semesters.length} semesters
                                </p>
                                <Button
                                    variant="secondary"
                                    onClick={() => setCurrentPlan(degreePlan)}
                                    className="positive"
                                >
                                    View Plan
                                </Button>
                                <Button
                                    className="negative"
                                    onClick={() =>
                                        setDegreePlans([
                                            ...degreePlans.filter(
                                                (currentPlan: DegreePlan) =>
                                                    currentPlan !== degreePlan
                                            )
                                        ])
                                    }
                                >
                                    Delete
                                </Button>
                            </div>
                        );
                    })}
                </>
            ) : !currentSemester ? (
                <>
                    <DegreePlanPage
                        degreePlan={currentPlan}
                        setCurrentSemester={setCurrentSemester}
                        savePlan={updateDegreePlan}
                    />
                </>
            ) : (
                <>
                    <SingleSemesterPage
                        sem={currentSemester}
                        degreePlan={currentPlan}
                        setCurrentSemester={setCurrentSemester}
                        updatePlan={updateDegreePlan}
                    />
                </>
            )}
        </div>
    );
}

export default App;

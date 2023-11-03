/* eslint-disable no-extra-parens */
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React, { useState } from "react";
import "./App.css";
import "./Button.css";

import { IntroPopup } from "./components/modals/IntroPopup";
import { DegreePlan } from "./interfaces/degreePlan";
import { Button } from "react-bootstrap";
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
            semesters: [
                {
                    season: "Fall",
                    year: 2023,
                    courses: [
                        {
                            code: "CISC108",
                            name: "Introduction to Computer Science I",
                            credits: 3
                        },
                        {
                            code: "EGGG101",
                            name: "Introduction to Engineering",
                            credits: 2
                        },
                        {
                            code: "ENGL110",
                            name: "Seminar in Composition",
                            credits: 3
                        },
                        {
                            code: "MATH241",
                            name: "Analytic Geometry & Calculus A",
                            credits: 4
                        },
                        {
                            code: "HIST106",
                            name: "U.S. History Since 1865",
                            credits: 3
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
                            credits: 3
                        },
                        {
                            code: "CISC210",
                            name: "Introduction to Systems Programming",
                            credits: 3
                        },
                        {
                            code: "MATH242",
                            name: "Analytic Geometry & Calculus B",
                            credits: 4
                        },
                        {
                            code: "CGSC170",
                            name: "Introduction to Cognitive Science",
                            credits: 3
                        },
                        {
                            code: "LING101",
                            name: "Introduction to Linguistics",
                            credits: 3
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
                            credits: 3
                        },
                        {
                            code: "CISC260",
                            name: "Machine Organization and Assembly Language",
                            credits: 3
                        },
                        {
                            code: "MATH210",
                            name: "Discrete Mathematics I",
                            credits: 3
                        },
                        {
                            code: "GEOL107",
                            name: "Geology of Dynamic Earth",
                            credits: 4
                        },
                        {
                            code: "LING202",
                            name: "Science of Language",
                            credits: 3
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
                            credits: 3
                        },
                        {
                            code: "CISC355",
                            name: "Computers, Ethics, and Society",
                            credits: 3
                        },
                        {
                            code: "MATH205",
                            name: "Statistical Methods",
                            credits: 4
                        },
                        {
                            code: "GEOL105",
                            name: "Geological Hazards and their Human Impacts",
                            credits: 3
                        },
                        {
                            code: "GEOL115",
                            name: "Geological Hazards Laboratory",
                            credits: 1
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
            <Button onClick={() => setShowIntro(true)} className="gen">
                About
            </Button>
            {!currentPlan ? (
                <>
                    <IntroPopup show={showIntro} handleClose={handleClose} />
                    <h3>Degree Plans</h3>
                    {degreePlans.map((degreePlan: DegreePlan): JSX.Element => {
                        return (
                            <div key={degreePlan.name}>
                                <h4>{degreePlan.name}</h4>
                                <p>{degreePlan.semesters.length} semesters</p>
                                <Button
                                    onClick={() => setCurrentPlan(degreePlan)}
                                    className="positive"
                                >
                                    View Plan
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

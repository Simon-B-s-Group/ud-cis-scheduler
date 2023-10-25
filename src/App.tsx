import React, { useState } from "react";
import "./App.css";

import { IntroPopup } from "./components/IntroPopup";
import { ListDegreePlans } from "./components/ListDegreePlans";
import { DegreePlan } from "./interfaces/degreePlan";

function App(): JSX.Element {
    const [showIntro, setShowIntro] = useState<boolean>(true);
    const handleClose = () => setShowIntro(false);

    const samplePlan: DegreePlan = {
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
                        credits: 3
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
    };

    return (
        <div className="App">
            <IntroPopup show={showIntro} handleClose={handleClose} />

            <header className="App-header">
                UD CIS Scheduler - F23 CISC 275
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Simon Brugel was here</p>
            <p>Cameron Wine was here</p>
            <p>Conor Jurewicz was here</p>
            <p>Leo Chen was here</p>
            <ListDegreePlans></ListDegreePlans>
        </div>
    );
}

export default App;

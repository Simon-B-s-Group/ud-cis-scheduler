import React from "react";
import "./App.css";
import { DegreePlan } from "./interfaces/degreePlan";

function App(): JSX.Element {
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
                        code: "",
                        name: "Breadth Requirement (1/5)",
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
                        code: "",
                        name: "Breadth Requirement (2/5)",
                        credits: 3
                    },
                    {
                        code: "",
                        name: "Breadth Requirement (3/5)",
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
                        code: "",
                        name: "Science Requirement (1/2)",
                        credits: 4
                    },
                    {
                        code: "",
                        name: "Breadth Requirement (4/5)",
                        credits: 3
                    }
                ]
            }
        ]
    };
    return (
        <div className="App">
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
        </div>
    );
}

export default App;

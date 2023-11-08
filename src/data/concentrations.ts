import { DegreeRequirements } from "../interfaces/degreeRequirements";

export const concentrations: DegreeRequirements[] = [
    {
        name: "Common Requirements", // common across every concentration (or lack thereof)
        requirements: [
            {
                name: "Completed ENGL110",
                coursesRequired: ["ENGL110"],
                numCoursesRequired: 1
            },
            {
                name: "Completed FYS",
                coursesRequired: [
                    "EGGG101",
                    "ARSC116",
                    "BHAN135",
                    "BMEG101",
                    "BUAD110",
                    "EDUC100",
                    "ENSC101",
                    "KAAP105",
                    "KAAP155",
                    "LLCU101",
                    "MAST100",
                    "NURS100",
                    "UNIV101"
                ],
                numCoursesRequired: 1
            },
            {
                name: "Core Classes",
                coursesRequired: [
                    "CISC108",
                    "CISC181",
                    "CISC210",
                    "CISC220",
                    "CISC260",
                    "CISC275",
                    "CISC303",
                    "CISC320",
                    "CISC355",
                    "MATH210",
                    "MATH241"
                ],
                numCoursesRequired: 11
            },
            {
                name: "Discovery Learning Experience",
                coursesRequired: ["CISC498", "UNIV401"],
                numCoursesRequired: 1
            },
            {
                name: "Capstone",
                coursesRequired: ["CISC499", "UNIV402"],
                numCoursesRequired: 1
            },
            {
                name: "Creative Arts Breadth",
                courseTypeRequired: "Art",
                numCreditsRequired: 3
            },
            {
                name: "History & Cultural Breadth",
                courseTypeRequired: "History",
                numCreditsRequired: 3
            },
            {
                name: "Social Sciences Breadth",
                courseTypeRequired: "Social",
                numCreditsRequired: 3
            },
            {
                name: "Math Breadth",
                courseTypeRequired: "Math",
                numCreditsRequired: 3
            },
            {
                name: "Multicultural Requirement",
                courseTypeRequired: "Multicultural",
                numCreditsRequired: 3
            },
            {
                name: "College of Engineering Additional Breadth",
                courseTypeRequired: "College",
                numCreditsRequired: 9
            },
            {
                name: "Lab Science (any sequence, or GEOL105/115->107 OR GEOL110->107)",
                coursesRequired: [
                    "PHYS207",
                    "PHYS227",
                    "PHYS208",
                    "PHYS228",
                    "CHEM103",
                    "CHEM133",
                    "CHEM104",
                    "CHEM134",
                    "BISC207",
                    "BISC208",
                    "GEOL105",
                    "GEOL115",
                    "GEOL107",
                    "GEOL110"
                ],
                numCreditsRequired: 8
            },
            {
                name: "Statistics Requirement",
                coursesRequired: ["MATH205", "MATH350"],
                numCoursesRequired: 1
            },
            {
                name: "Advanced English Requirement",
                coursesRequired: ["ENGL312", "ENGL410"],
                numCoursesRequired: 1
            }
        ]
    }
];

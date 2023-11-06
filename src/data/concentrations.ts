import { DegreeRequirements } from "../interfaces/degreeRequirements";

export const concentrations: DegreeRequirements[] = [
    {
        name: "Computer Science (BS)",
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
                name: "Discovery Learning Experience",
                coursesRequired: ["CISC498"],
                numCoursesRequired: 1
            },
            {
                name: "Capstone",
                coursesRequired: ["CISC499"],
                numCoursesRequired: 1
            }
        ]
    }
];

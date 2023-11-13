import { DegreeRequirements } from "../interfaces/degreeRequirements";

export const concentrations: DegreeRequirements[] = [
    {
        name: "Common Requirements", // common across every concentration (or lack thereof)
        requirements: [
            {
                name: "Completed ENGL110",
                coursesRequired: ["ENGL110"],
                numCoursesRequired: 1,
                unique: false
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
                numCoursesRequired: 1,
                unique: false
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
                numCoursesRequired: 11,
                unique: false
            },
            {
                name: "Capstone & Discovery Learning Experience",
                coursesRequired: ["CISC498", "UNIV401", "CISC499", "UNIV402"],
                numCoursesRequired: 2,
                unique: false
            },
            {
                name: "Creative Arts Breadth",
                courseTypeRequired: "Art",
                numCreditsRequired: 3,
                unique: false
            },
            {
                name: "History & Cultural Breadth",
                courseTypeRequired: "History",
                numCreditsRequired: 3,
                unique: false
            },
            {
                name: "Social Sciences Breadth",
                courseTypeRequired: "Social",
                numCreditsRequired: 3,
                unique: false
            },
            {
                name: "Math Breadth",
                courseTypeRequired: "Math",
                numCreditsRequired: 3,
                unique: false
            },
            {
                name: "Multicultural Requirement",
                courseTypeRequired: "Multicultural",
                numCreditsRequired: 3,
                unique: false
            },
            {
                name: "College of Engineering Additional Breadth",
                courseTypeRequired: "College",
                numCreditsRequired: 9,
                unique: false
            },
            {
                name: "Statistics Requirement",
                coursesRequired: ["MATH205", "MATH350"],
                numCoursesRequired: 1,
                unique: false
            },
            {
                name: "Advanced English Requirement",
                coursesRequired: ["ENGL312", "ENGL410"],
                numCoursesRequired: 1,
                unique: false
            }
        ]
    },
    {
        name: "No Concentration",
        requirements: [
            {
                name: "Additional Core Courses",
                coursesRequired: ["CISC361", "CISC372", "MATH242"],
                numCoursesRequired: 3,
                unique: false
            },
            {
                name: "CISC Courses 300+ Level",
                coursesMustHaveInName: ["CISC3", "CISC4"],
                numCreditsRequired: 6,
                unique: true
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
                numCreditsRequired: 12,
                unique: true
            }
        ]
    },
    {
        name: "AI & Robotics",
        requirements: [
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
                numCreditsRequired: 8,
                unique: true
            },
            {
                name: "AI Core",
                coursesRequired: [
                    "CISC304",
                    "CISC442",
                    "CISC481",
                    "CISC483",
                    "CISC484"
                ],
                numCoursesRequired: 5,
                unique: false
            },
            {
                name: "Systems Requirement",
                coursesRequired: ["CISC361", "CISC372"],
                numCoursesRequired: 1,
                unique: false
            },
            {
                name: "Restricted Electives",
                coursesRequired: [
                    "CISC436",
                    "CISC437",
                    "CISC489",
                    "CISC889",
                    "EDUC462",
                    "ELEG404",
                    "ELEG418",
                    "ELEG387",
                    "ELEG487",
                    "LING202",
                    "LING404",
                    "LING418",
                    "LING444",
                    "LING451",
                    "LING455",
                    "MAST632",
                    "MATH242",
                    "MATH349",
                    "MEEG671",
                    "PSYC310",
                    "PSYC340",
                    "PSYC344"
                ],
                numCreditsRequired: 12,
                unique: false
            },
            {
                name: "CISC Elective",
                coursesMustHaveInName: ["CISC3", "CISC4"],
                numCreditsRequired: 3,
                unique: true
            }
        ]
    },
    {
        name: "Bioinformatics",
        requirements: [
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
                numCreditsRequired: 8,
                unique: true
            },
            {
                name: "Bioinformatics Core",
                coursesRequired: [
                    "BISC207",
                    "BISC208",
                    "BISC401",
                    "CHEM103",
                    "CHEM133",
                    "CHEM104",
                    "CHEM134",
                    "CISC372",
                    "CISC436",
                    "MATH242",
                    "MATH349"
                ],
                numCoursesRequired: 11,
                unique: false
            },
            {
                name: "Organic Chemistry Sequence (CHEM213/215 OR CHEM321/325)",
                coursesRequired: ["CHEM213", "CHEM215", "CHEM321", "CHEM325"],
                numCreditsRequired: 4,
                unique: false
            },
            {
                name: "Data Analysis Requirement",
                coursesRequired: ["CISC483", "CISC484"],
                numCoursesRequired: 1,
                unique: false
            },
            {
                name: "Restricted Electives",
                coursesRequired: [
                    "ANFS300",
                    "ANFS310",
                    "ANFS470",
                    "BISC403",
                    "BISC484",
                    "BISC492",
                    "CHEM214",
                    "CHEM216",
                    "CHEM322",
                    "CHEM326",
                    "MATH243"
                ],
                numCreditsRequired: 6,
                unique: false
            }
        ]
    },
    {
        name: "Cybersecurity",
        requirements: [
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
                numCreditsRequired: 8,
                unique: true
            },
            {
                name: "Cybersecurity Core",
                coursesRequired: [
                    "CISC361",
                    "CISC372",
                    "CISC450",
                    "CISC464",
                    "GPEG465",
                    "CPEG494"
                ],
                numCoursesRequired: 6,
                unique: false
            },
            {
                name: "Advanced Cybersecurity Requirement",
                coursesRequired: [
                    "CPEG472",
                    "CPEG473",
                    "CPEG475",
                    "CPEG476",
                    "CPEG495"
                ],
                numCoursesRequired: 2,
                unique: false
            },
            {
                name: "Restricted Electives",
                coursesRequired: [
                    "MATH242",
                    "MATH349",
                    "MATH549",
                    "CISC304",
                    "CISC436",
                    "CISC437",
                    "CISC440",
                    "CISC442",
                    "CISC449",
                    "CISC453",
                    "CISC459",
                    "CISC474",
                    "CISC481",
                    "CISC483",
                    "CISC484",
                    "CPEG470",
                    "CPEG471",
                    "CPEG472",
                    "CPEG473",
                    "CPEG475",
                    "CPEG476",
                    "CPEG494",
                    "CPEG495",
                    "ELEG387",
                    "ELEG487"
                ],
                numCreditsRequired: 6,
                unique: true
            },
            {
                name: "CISC Elective",
                coursesMustHaveInName: ["CISC3", "CISC4"],
                numCreditsRequired: 3,
                unique: true
            }
        ]
    },
    {
        name: "Data Science",
        requirements: [
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
                numCreditsRequired: 8,
                unique: true
            },
            {
                name: "Data Science Core",
                coursesRequired: [
                    "CISC304",
                    "CISC372",
                    "CISC437",
                    "CISC481",
                    "MATH205",
                    "MATH242",
                    "MATH243",
                    "MATH349"
                ],
                numCoursesRequired: 8,
                unique: false
            },
            {
                name: "Advanced Data Science",
                coursesRequired: ["CISC483", "CISC484"],
                numCoursesRequired: 1,
                unique: false
            },
            {
                name: "Advanced Math",
                coursesRequired: ["MATH302", "MATH350", "MATH426"],
                numCoursesRequired: 1,
                unique: false
            },
            {
                name: "Restricted Electives",
                coursesRequired: [
                    "CISC361",
                    "CISC410",
                    "CISC436",
                    "CISC440",
                    "CISC442",
                    "CISC449",
                    "CISC450",
                    "CISC471",
                    "CISC474",
                    "CISC483",
                    "CISC484",
                    "CISC489",
                    "ELEG387",
                    "ELEG487",
                    "MATH302",
                    "MATH350",
                    "MATH428",
                    "MATH450"
                ],
                numCreditsRequired: 3,
                unique: true
            },
            {
                name: "CISC Elective",
                coursesMustHaveInName: ["CISC3", "CISC4"],
                numCreditsRequired: 3,
                unique: true
            }
        ]
    },
    {
        name: "High Performance Computing (Applied Math)",
        requirements: [
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
                numCreditsRequired: 8,
                unique: true
            },
            {
                name: "HPC Core",
                coursesRequired: [
                    "CISC360",
                    "CISC361",
                    "CISC372",
                    "CISC450",
                    "CISC471",
                    "MATH242",
                    "MATH243"
                ],
                numCoursesRequired: 7,
                unique: false
            },
            {
                name: "Applied Math Core",
                coursesRequired: ["MATH351", "MATH428"],
                numCoursesRequired: 2,
                unique: false
            }
        ]
    },
    {
        name: "High Performance Computing (Data)",
        requirements: [
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
                numCreditsRequired: 8,
                unique: true
            },
            {
                name: "HPC Core",
                coursesRequired: [
                    "CISC360",
                    "CISC361",
                    "CISC372",
                    "CISC450",
                    "CISC471",
                    "MATH242",
                    "MATH243"
                ],
                numCoursesRequired: 7,
                unique: false
            },
            {
                name: "Data Core",
                coursesRequired: ["CISC437", "MATH350", "MATH450"],
                numCoursesRequired: 3,
                unique: false
            },
            {
                name: "Machine Learning Requirement",
                coursesRequired: ["CISC483", "CISC484"],
                numCoursesRequired: 1,
                unique: false
            },
            {
                name: "Restricted Electives",
                coursesRequired: ["MATH302", "MATH349", "MATH351", "MATH535"],
                numCreditsRequired: 5,
                unique: false
            }
        ]
    },
    {
        name: "Systems & Networks",
        requirements: [
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
                numCreditsRequired: 8,
                unique: true
            },
            {
                name: "Systems Core",
                coursesRequired: [
                    "CISC360",
                    "CISC361",
                    "CISC372",
                    "CISC450",
                    "CISC471"
                ],
                numCoursesRequired: 5,
                unique: false
            },
            {
                name: "Security Requirement",
                coursesRequired: [
                    "CISC464",
                    "CPEG465",
                    "CPEG470",
                    "CPEG476",
                    "CPEG473",
                    "CPEG475",
                    "CPEG497"
                ],
                numCoursesRequired: 1,
                unique: false
            },
            {
                name: "Advanced Systems Requirement",
                coursesRequired: [
                    "CISC437",
                    "CISC453",
                    "CISC459",
                    "CISC464",
                    "CISC474",
                    "CISC475",
                    "CISC469",
                    "CPEG473",
                    "CPEG497"
                ],
                numCoursesRequired: 2,
                unique: true
            },
            {
                name: "Restricted Electives",
                coursesRequired: [
                    "CISC304",
                    "CISC436",
                    "CISC437",
                    "CISC440",
                    "CISC442",
                    "CISC449",
                    "CISC453",
                    "CISC459",
                    "CISC464",
                    "CISC474",
                    "CISC475",
                    "CISC479",
                    "CISC481",
                    "CISC483",
                    "CISC484",
                    "CISC489",
                    "CPEG202",
                    "CPEG222",
                    "CPEG323",
                    "CPEG422",
                    "CPEG460",
                    "CPEG465",
                    "CPEG470",
                    "CPEG475",
                    "CPEG476",
                    "CPEG494",
                    "CPEG497",
                    "ELEG387",
                    "ELEG487",
                    "MATH242",
                    "MATH349"
                ],
                numCreditsRequired: 6,
                unique: true
            },
            {
                name: "CISC Elective",
                coursesMustHaveInName: ["CISC3", "CISC4"],
                numCreditsRequired: 3,
                unique: true
            }
        ]
    },
    {
        name: "Theory & Computation (Discrete)",
        requirements: [
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
                numCreditsRequired: 8,
                unique: true
            },
            {
                name: "Theory Core",
                coursesRequired: ["CISC304", "CISC401", "MATH242", "MATH349"],
                numCoursesRequired: 4,
                unique: false
            },
            {
                name: "Restricted Electives",
                coursesRequired: [
                    "CISC372",
                    "CISC404",
                    "CISC410",
                    "CISC414",
                    "CISC471",
                    "CISC481",
                    "ELEG387",
                    "ELEG487",
                    "MATH243",
                    "MATH245",
                    "MATH302",
                    "MATH315",
                    "MATH350",
                    "MATH428",
                    "MATH450",
                    "MATH451"
                ],
                numCreditsRequired: 6,
                unique: false
            },
            {
                name: "CISC Elective",
                coursesMustHaveInName: ["CISC3", "CISC4"],
                numCreditsRequired: 3,
                unique: true
            },
            {
                name: "Discrete Track Core",
                coursesRequired: ["CISC404", "MATH245", "MATH315", "MATH451"],
                numCoursesRequired: 4,
                unique: false
            }
        ]
    },
    {
        name: "Theory & Computation (Continuous)",
        requirements: [
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
                numCreditsRequired: 8,
                unique: true
            },
            {
                name: "Theory Core",
                coursesRequired: ["CISC304", "CISC401", "MATH242", "MATH349"],
                numCoursesRequired: 4,
                unique: false
            },
            {
                name: "Restricted Electives",
                coursesRequired: [
                    "CISC372",
                    "CISC404",
                    "CISC410",
                    "CISC414",
                    "CISC471",
                    "CISC481",
                    "ELEG387",
                    "ELEG487",
                    "MATH243",
                    "MATH245",
                    "MATH302",
                    "MATH315",
                    "MATH350",
                    "MATH428",
                    "MATH450",
                    "MATH451"
                ],
                numCreditsRequired: 6,
                unique: false
            },
            {
                name: "CISC Elective",
                coursesMustHaveInName: ["CISC3", "CISC4"],
                numCreditsRequired: 3,
                unique: true
            },
            {
                name: "Continuous Track Core",
                coursesRequired: ["MATH243", "MATH302", "MATH535", "MATH426"],
                numCoursesRequired: 4,
                unique: false
            }
        ]
    }
];

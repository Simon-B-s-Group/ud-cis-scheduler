import { CourseOption } from "../interfaces/courseoption";

export const courseOptions: CourseOption[] = [
    {
        course: {
            code: "ANFS300",
            name: "Principles of Animal and Plant Genetics",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "PLSC101 or BISC205 or BISC207 or BISC208."
    },
    {
        course: {
            code: "ANFS310",
            name: "Animal and Plant Genetics Laboratory",
            credits: 2,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "ANFS470",
            name: "Principles of Molecular Genetics",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "ANFS300 or permission of instructor."
    },
    {
        course: {
            code: "BISC207",
            name: "Introductory Biology I",
            credits: 4,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "BISC208",
            name: "Introductory Biology II",
            credits: 4,
            isMulticultural: false
        },
        prereqs: "BISC207."
    },
    {
        course: {
            code: "BISC401",
            name: "Molecular Biology of the Cell",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "BISC207 and one semester of organic chemistry."
    },
    {
        course: {
            code: "BISC403",
            name: "Genetics",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "BISC 207ݡnd BISC303"
    },
    {
        course: {
            code: "BISC484",
            name: "Applied Genomics Laboratory",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "BISC303, BISC 401,ݯr BISC 403."
    },
    {
        course: {
            code: "BISC492",
            name: "Human Molecular Cytogenetics",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "BISC208."
    },
    {
        course: {
            code: "CHEM103",
            name: "General Chemistry",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CHEM104",
            name: "General Chemistry",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CHEM103/CHEM133 or CHEM111. COREQ: CHEM134"
    },
    {
        course: {
            code: "CHEM133",
            name: "General Chemistry Laboratory",
            credits: 1,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CHEM134",
            name: "General Chemistry Laboratory",
            credits: 1,
            isMulticultural: false
        },
        prereqs: "CHEM103/CHEM133 or CHEM111. COREQ: CHEM104."
    },
    {
        course: {
            code: "CHEM213",
            name: "Elementary Organic Chemistry",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CHEM102 or CHEM104/CHEM134 or CHEM105 or CHEM112."
    },
    {
        course: {
            code: "CHEM214",
            name: "Elementary Biochemistry",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CHEM213"
    },
    {
        course: {
            code: "CHEM215",
            name: "Elementary Organic Chemistry Laboratory",
            credits: 1,
            isMulticultural: false
        },
        prereqs:
            "CHEM102 or CHEM104/CHEM134 or CHEM105 or CHEM112. COREQ: CHEM213."
    },
    {
        course: {
            code: "CHEM216",
            name: "Elementary Biochemistry Laboratory",
            credits: 1,
            isMulticultural: false
        },
        prereqs: "CHEM213. COREQ: CHEM214"
    },
    {
        course: {
            code: "CHEM321",
            name: "Organic Chemistry I",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CHEM104/CHEM134 or CHEM112. COREQ: CHEM325."
    },
    {
        course: {
            code: "CHEM322",
            name: "Organic Chemistry II",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CHEM321. COREQ: CHEM326."
    },
    {
        course: {
            code: "CHEM325",
            name: "Organic Chemistry Laboratory I",
            credits: 1,
            isMulticultural: false
        },
        prereqs: "CHEM104/CHEM134. COREQ: CHEM321."
    },
    {
        course: {
            code: "CHEM326",
            name: "Organic Chemistry Laboratory II",
            credits: 1,
            isMulticultural: false
        },
        prereqs: "CHEM325. COREQ: CHEM322."
    },
    {
        course: {
            code: "CISC108",
            name: "Introduction to Computer Science I",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CISC181",
            name: "Introduction to Computer Science II",
            credits: 3,
            isMulticultural: false
        },
        prereqs:
            "Grade of C- or better in CISC108 or CISC106. COREQ: MATH221,  MATH241, or a higher level math course or math placement."
    },
    {
        course: {
            code: "CISC210",
            name: "Introduction to Systems Programming",
            credits: 3,
            isMulticultural: false
        },
        prereqs:
            "A grade of C- or better in CISC106 or CISC108. COREQ: MATH221 or MATH241 or a higher level math course or math placement."
    },
    {
        course: {
            code: "CISC220",
            name: "Data Structures",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "A minimum grade of C- in CISC210. COREQ: MATH210 or MATH241."
    },
    {
        course: {
            code: "CISC260",
            name: "Machine Organization and Assembly Language",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "A minimum grade of C- in CISC210."
    },
    {
        course: {
            code: "CISC275",
            name: "Introduction to Software Engineering",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "Minimum grade of C- in CISC181 and CISC220."
    },
    {
        course: {
            code: "CISC303",
            name: "Automata Theory",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "A minimum grade of C- in both MATH210 and CISC220."
    },
    {
        course: {
            code: "CISC304",
            name: "Logic for Programming",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC220, MATH210 (with minimum C- grade in both)."
    },
    {
        course: {
            code: "CISC320",
            name: "Introduction to Algorithms",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "MATH210 and a minimum grade of C- in CISC220."
    },
    {
        course: {
            code: "CISC355",
            name: "Computers, Ethics and Society",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CISC360",
            name: "Computer Architecture",
            credits: 3,
            isMulticultural: false
        },
        prereqs:
            "A minimum grade of C- in CISC220 and CISC260 (or equivalent courses)."
    },
    {
        course: {
            code: "CISC361",
            name: "Operating Systems",
            credits: 3,
            isMulticultural: false
        },
        prereqs:
            "A minimum grade of C- in both CISC220 and CISC260.  CPEG222 may be substituted for CISC260"
    },
    {
        course: {
            code: "CISC372",
            name: "Parallel Computing",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "C- or better in both CISC 220 and݃ CISC 260."
    },
    {
        course: {
            code: "CISC374",
            name: "Educational Game Development",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC 220."
    },
    {
        course: {
            code: "CISC410",
            name: "Computational Mathematics I",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "MATH305 or MATH351 or MATH349."
    },
    {
        course: {
            code: "CISC436",
            name: "Computational Biology and Bioinformatics",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC220 or permission of instructor."
    },
    {
        course: {
            code: "CISC437",
            name: "Database Systems",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "A minimum grade of C- in CISC220."
    },
    {
        course: {
            code: "CISC440",
            name: "Computer Graphics",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC220 and MATH241"
    },
    {
        course: {
            code: "CISC442",
            name: "Introduction to Computer Vision",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC220."
    },
    {
        course: {
            code: "CISC449",
            name: "Topics in Computer Applications",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CISC450",
            name: "Computer Networks I",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC260 or CPEG222."
    },
    {
        course: {
            code: "CISC453",
            name: "Simulation of Computer Networks",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC450, or equivalent."
    },
    {
        course: {
            code: "CISC459",
            name: "Topics in Communications, Distributed Computing and Networks",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC450."
    },
    {
        course: {
            code: "CISC464",
            name: "Introduction to Network Security",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC450 or equivalent."
    },
    {
        course: {
            code: "CISC471",
            name: "Compiler Design",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC260 and CISC303"
    },
    {
        course: {
            code: "CISC474",
            name: "Advanced Web Technologies",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC275"
    },
    {
        course: {
            code: "CISC475",
            name: "Software Engineering Principles and Practices",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC275. CISC361 is recommended."
    },
    {
        course: {
            code: "CISC479",
            name: "Topics in Architecture and Software",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC361."
    },
    {
        course: {
            code: "CISC481",
            name: "Artificial Intelligence",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC220 with a minimum grade of C-, CISC304."
    },
    {
        course: {
            code: "CISC483",
            name: "Introduction to Data Mining",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC 220 and MATH 205 or MATH 350."
    },
    {
        course: {
            code: "CISC484",
            name: "Introduction to Machine Learning",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC 220 and MATH 205 or MATH 350."
    },
    {
        course: {
            code: "CISC489",
            name: "Topics: Artificial Intelligence",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CISC498",
            name: "Computer Science Senior Design Project I",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC275."
    },
    {
        course: {
            code: "CISC499",
            name: "Computer Science Senior Design Project II",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CISC320 and CISC498."
    },
    {
        course: {
            code: "CPEG202",
            name: "Introduction to Digital Systems",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CPEG222",
            name: "Microprocessor Systems",
            credits: 4,
            isMulticultural: false
        },
        prereqs: "A minimum grade of C- in CPEG 202 and CISC 210."
    },
    {
        course: {
            code: "CPEG323",
            name: "Introduction to Computer Systems Engineering",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "A minimum grade of C- in CPEG 222."
    },
    {
        course: {
            code: "CPEG422",
            name: "Embedded Systems Hardware/Software Co-Design",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CPEG460",
            name: "Introduction to VLSI Systems",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CPEG465",
            name: "Introduction to Cybersecurity",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CPEG470",
            name: "Web Applications Security",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CPEG471",
            name: "Pen Test and Reverse Engineering",
            credits: 3,
            isMulticultural: false
        },
        prereqs:
            "CPEG 465/CPEG665 or CPEG 494/CPEG694 or CPEG365. Programming experience in assembly language (CISC 260, CPEG 222, or equivalent)."
    },
    {
        course: {
            code: "CPEG472",
            name: "Applied Cryptography",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CPEG465/CPEG665 or CPEG365 or MATH549 or equivalent."
    },
    {
        course: {
            code: "CPEG473",
            name: "Cloud Computing and Security",
            credits: 3,
            isMulticultural: false
        },
        prereqs:
            "CPEG/ELEG/CISC/MISY 465/665 or CPEG/ELEG 494/694 or experience with virtualization and computer networking."
    },
    {
        course: {
            code: "CPEG475",
            name: "IoT and Embedded Systems Security",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "CPEG 222,݃PEG 465/CPEG665 or CPEG365"
    },
    {
        course: {
            code: "CPEG476",
            name: "Secure Software Design",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CPEG494",
            name: "System Hardening and Protection",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CPEG495",
            name: "Digital Forensics",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "CPEG497",
            name: "Advanced Cybersecurity",
            credits: 3,
            isMulticultural: false
        },
        prereqs:
            "CPEG465/CPEG665.  Familiarity with basic networking protocols and operating systems."
    },
    {
        course: {
            code: "EDUC462",
            name: "Language Acquisition",
            credits: 4,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "EGGG101",
            name: "Introduction to Engineering",
            credits: 2,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "ELEG387",
            name: "Vertically Integrated Projects III",
            credits: 1,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "ELEG404",
            name: "Imaging and Deep Learning",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "ELEG305."
    },
    {
        course: {
            code: "ELEG418",
            name: "Digital Control Systems",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "ELEG305 or permission of instructor."
    },
    {
        course: {
            code: "ELEG487",
            name: "Vertically Integrated Projects IV",
            credits: 1,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "ENGL110",
            name: "First-Year Writing",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "ENGL312",
            name: "Written Communications in Business",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "ENGL110."
    },
    {
        course: {
            code: "ENGL410",
            name: "Technical Writing",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "ENGL110."
    },
    {
        course: {
            code: "GEOL105",
            name: "Geological Hazards and Their Human Impact",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "GEOL107",
            name: "Geology of Dynamic Earth",
            credits: 4,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "GEOL110",
            name: "Earth's Evolving Systems",
            credits: 4,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "GEOL115",
            name: "Geological Hazards Laboratory",
            credits: 1,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "LING202",
            name: "Science of Language",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "LING101."
    },
    {
        course: {
            code: "LING404",
            name: "Structure of Language",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "Ling 101"
    },
    {
        course: {
            code: "LING418",
            name: "Meaning and Language Use",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "LING101."
    },
    {
        course: {
            code: "LING444",
            name: "First Language Development",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "LING101."
    },
    {
        course: {
            code: "LING451",
            name: "Logical Structures in Language",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "LING101."
    },
    {
        course: {
            code: "LING455",
            name: "Computational Linguistics",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "LING101."
    },
    {
        course: {
            code: "MATH205",
            name: "Statistical Methods",
            credits: 4,
            isMulticultural: false
        },
        prereqs: "MATH210 or MATH230."
    },
    {
        course: {
            code: "MATH210",
            name: "Discrete Mathematics I",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "MATH241",
            name: "Analytic Geometry and Calculus A",
            credits: 4,
            isMulticultural: false
        },
        prereqs:
            "MATH117 or acceptable score on the Math Placement Exam in accordance with current standards determined by the Department of Mathematical Sciences. See https://www.mathsci.udel.edu/courses-placement/ud-math-placement for more information."
    },
    {
        course: {
            code: "MATH242",
            name: "Analytic Geometry and Calculus B",
            credits: 4,
            isMulticultural: false
        },
        prereqs: "MATH232 or MATH241."
    },
    {
        course: {
            code: "MATH243",
            name: "Analytic Geometry and Calculus C",
            credits: 4,
            isMulticultural: false
        },
        prereqs: "MATH242."
    },
    {
        course: {
            code: "MATH302",
            name: "Ordinary Differential Equations",
            credits: 3,
            isMulticultural: false
        },
        prereqs:
            "MATH242 and MATH349 (or equivalent knowledge of eigenvalues and eigenvectors). Students who do not meet the MATH349 prerequisite are advised to take MATH351 instead of MATH302."
    },
    {
        course: {
            code: "MATH349",
            name: "Elementary Linear Algebra",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "MATH230 or MATH242."
    },
    {
        course: {
            code: "MATH350",
            name: "Probability Theory and Simulation Methods",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "MATH351",
            name: "Engineering Mathematics I",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "MATH426",
            name: "Computational Mathematics I",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "MATH305 or MATH351 or MATH349."
    },
    {
        course: {
            code: "MATH428",
            name: "Computational Mathematics II",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "MATH426 or CISC410 or MATH353."
    },
    {
        course: {
            code: "MATH450",
            name: "Mathematical Statistics",
            credits: 3,
            isMulticultural: false
        },
        prereqs: "MATH350 or an equivalent course in probability"
    },
    {
        course: {
            code: "PHYS207",
            name: "Fundamentals of Physics I",
            credits: 3,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "PHYS208",
            name: "Fundamentals of Physics II",
            credits: 3,
            isMulticultural: false
        },
        prereqs:
            "PHYS 203 or PHYS 207/PHYS227, MATH 241 or MATH232. COREQ:  MATH 242, PHYS 228."
    },
    {
        course: {
            code: "PHYS227",
            name: "Fundamentals of Physics Laboratory I",
            credits: 1,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "PHYS228",
            name: "Fundamentals of Physics Laboratory II",
            credits: 1,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "PSYC310",
            name: "Sensation and Perception",
            credits: 3,
            isMulticultural: false
        },
        prereqs:
            "Minimum grade of C- or better in PSYC207 and PSYC209 or its substitutes (MATH202, MATH205, STAT200, SOCI301), for Neuroscience majors and minors  minimum grade of C- in PSYC209 or its substitutes (MATH202, MATH205, STAT200, SOCI301) only."
    },
    {
        course: {
            code: "PSYC340",
            name: "Cognition",
            credits: 3,
            isMulticultural: false
        },
        prereqs:
            "Grades of C- or better in PSYC207 and in PSYC209 or substitutes (MATH202, MATH205, STAT200, SOCI301), except for Neuroscience majors."
    },
    {
        course: {
            code: "PSYC344",
            name: "Psychology of Language",
            credits: 3,
            isMulticultural: false
        },
        prereqs:
            "Minimum grades of C- in PSYC207 and PSYC209 or its substitutes (MATH202, MATH205, SOCI301, STAT200)."
    },
    {
        course: {
            code: "UNIV401",
            name: "Senior Thesis",
            credits: 2,
            isMulticultural: false
        },
        prereqs: ""
    },
    {
        course: {
            code: "UNIV402",
            name: "Senior Thesis",
            credits: 2,
            isMulticultural: false
        },
        prereqs: ""
    }
];

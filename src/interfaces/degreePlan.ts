import { Semester } from "./semester";

export type Concentration =
    | "No Concentration"
    | "AI & Robotics"
    | "Bioinformatics"
    | "Cybersecurity"
    | "Data Science"
    | "High Performance Computing (Applied Math)"
    | "High Performance Computing (Data)"
    | "Systems & Networks"
    | "Theory & Computation (Discrete)"
    | "Theory & Computation (Continuous)";

/**
 * This represents a degree plan which a user can create/edit/delete.
 */
export interface DegreePlan {
    /**
     * The user-given name of the degree plan
     * i.e. Something like "My UD Degree Plan"
     */
    name: string;

    /**
     * The semesters for this degree plan, which contain courses.
     */
    semesters: Semester[];

    /**
     * The concentration of this degree plan
     */
    concentration: Concentration;
}

import { Course } from "./course";

export type BreadthType =
    | "Art"
    | "History"
    | "Social"
    | "Math"
    | "College"
    | "Multicultural";

/**
 * This represents a requirement set for a degree/concentration, such as the core classes requirement
 */
export interface DegreeRequirementCategory {
    /**
     * The name of this requirement set
     * i.e. "Core Classes"
     */
    name: string;

    /**
     * An optional parameter which consists of the courses that can
     * be used to satisfy this requirement.
     *
     * Either this OR courseTypeRequired must be filled out.
     */
    coursesRequired?: Course[];

    /**
     * An optional parameter which consists of the type of courses
     * (breadth-wise) that can be used to satisfy this requirement.
     *
     * Either this OR coursesRequired must be filled out.
     */
    courseTypeRequired?: BreadthType;

    /**
     * The number of courses the student needs to take from either
     * of the above categories to fulfill this requirement.
     */
    numCoursesRequired: number;
}

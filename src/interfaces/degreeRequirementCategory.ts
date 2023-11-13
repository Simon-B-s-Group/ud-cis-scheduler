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
    //================================================================================================================================
    /**
     * The name of this requirement set
     * i.e. "Core Classes"
     */
    name: string;

    /**
     * If true, the courses used to satisfy this degree requirement cannot be used for other classes.
     */
    unique: boolean;

    //================================================================================================================================
    /**
     * /!\ IMPORTANT NOTE /!\
     * ONLY ONE of these two must be filled out to have a valid degree requirement category
     */
    /**
     * The number of courses the student needs to take from any
     * of the BELOW categories to fulfill this requirement.
     */
    numCoursesRequired?: number;

    /**
     * The number of CREDITS needs to take to satisfy this requirement
     */
    numCreditsRequired?: number;

    //================================================================================================================================
    /**
     * /!\ IMPORTANT NOTE /!\
     * ONLY ONE of these three must be filled out to have a valid degree requirement category
     */
    /**
     * An optional parameter which consists of the NAMES of the courses
     * that can be used to satisfy this requirement.
     */
    coursesRequired?: string[];

    /**
     * An optional parameter which consists of what the selected courses
     * MUST START WITH ANY OF THESE ITEMS to satisfy this requirement.
     * i.e. ["CISC3", "CISC4"] means that all courses must contain one of either CISC3.. or CISC4.. in their name
     */
    coursesMustHaveInName?: string[];

    /**
     * An optional parameter which consists of the type of courses
     * (breadth-wise) that can be used to satisfy this requirement.
     */
    courseTypeRequired?: BreadthType;
    //================================================================================================================================
}

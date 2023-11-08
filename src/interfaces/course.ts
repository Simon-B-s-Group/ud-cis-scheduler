import { BreadthType } from "./degreeRequirementCategory";

/**
 * This represents a course within a semester
 */
export interface Course {
    /**
     * The course code as a string
     * i.e. "CISC320"
     */
    code: string;

    /**
     * The course's name
     * i.e. "Introduction to Algorithms"
     */
    name: string;

    /**
     * The number of credits for this course
     */
    credits: number;

    /**
     * If true, this course can be used to satisfy the Multicultural
     * requirement. Otherwise, it cannot.
     */
    isMulticultural: boolean;

    /**
     * An OPTIONAL parameter, if filled in, this is the type of
     * breadth requirement this class fulfills
     */
    breadthFulfilled?: BreadthType;

    /**
     * The course's pre-reqs as a string
     */
    prereqs: string;
}

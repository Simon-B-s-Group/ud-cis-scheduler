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
}

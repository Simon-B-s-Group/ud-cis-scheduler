import { Semester } from "./semester";

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
    semesters: [Semester];
}

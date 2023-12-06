import { Course } from "./course";

/**
 * This typing represents the possible seasons for a semester
 */
export type Season = "Fall" | "Winter" | "Spring" | "Summer" | "Freestanding";

/**
 * This represents a semester of a degree plan, containing courses
 */
export interface Semester {
    /**
     * The season for this semester. See the "Season" type above.
     */
    season: Season;

    /**
     * The year of this semester
     * i.e. 2023
     */
    year: number;

    /**
     * A list of the courses being taken this semester
     */
    courses: Course[];
}

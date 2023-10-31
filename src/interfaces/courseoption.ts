import { Course } from "./course";

/**
 * This represents a course option for the Add a New Course dropdown in SingleSemesterPage (Semester edit page)
 */
export interface CourseOption {
    /**
     * The course itself
     */
    course: Course;

    /**
     * The course's pre-reqs as a string
     */
    prereqs: string;
}

import { DegreeRequirementCategory } from "./degreeRequirementCategory";

/**
 * This represents a set of requirements for a degree
 */
export interface DegreeRequirements {
    /**
     * The name of this requirements set.
     * i.e. "Computer Science BS (AI & Robotics Concentration)"
     */
    name: string;

    /**
     * A list of the requirements that need to be met.
     * i.e. Core classes, restricted electives.
     */
    requirements: DegreeRequirementCategory[];
}

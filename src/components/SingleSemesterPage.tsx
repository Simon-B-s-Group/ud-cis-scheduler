import React, { useState } from "react";
import { SemesterView } from "./SemesterView";
import { Semester } from "../interfaces/semester";
import { Button } from "react-bootstrap";

export function SingleSemesterPage({
    sem,
    setCurrentSemester
}: {
    sem: Semester;
    setCurrentSemester: (newSem: Semester | null) => void;
}) {
    return (
        <>
            <Button
                onClick={() => setCurrentSemester(null)}
                className="btn btn-danger"
            >
                Go Back
            </Button>
            <b>
                <u>
                    <h5>Edit This Semester</h5>
                </u>
            </b>
            <SemesterView
                sem={sem}
                editMode={true}
                setCurrentSemester={setCurrentSemester}
                deleteThisSem={() => {
                    throw ""; // we don't have a Delete button in edit mode
                }}
            />
        </>
    );
}

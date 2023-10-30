/* eslint-disable no-extra-parens */
// (yes, this dumb thing has reached even this file!)
// THIS WAS APPROVED BY AROMANDO - UNSOLVABLE ESLINT AND PRETTIER CONFLICTS

import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Season } from "../../interfaces/semester";

export function NewSemesterPopup({
    show,
    handleSubmit
}: {
    show: boolean;
    handleSubmit: (season: Season | null, year: number | null) => void;
}) {
    const [season, setSeason] = useState<Season>("Fall");
    const [year, setYear] = useState<number>(new Date().getFullYear());

    const updateSeason = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        setSeason(event.target.value as Season); // Sesaon is basically just a restricted string
    };

    const updateYear = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setYear(Number.parseInt(event.target.value));
    };

    return (
        <Modal show={show} onHide={() => handleSubmit(null, null)}>
            <Modal.Header closeButton>
                <Modal.Title>New Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="newSem">
                    <Form.Label>Season</Form.Label>
                    <Form.Select value={season} onChange={updateSeason}>
                        {["Fall", "Winter", "Spring", "Summer"].map(
                            // there are 4 options
                            (season: string) => (
                                <option key={season} value={season}>
                                    {season}
                                </option>
                            )
                        )}
                    </Form.Select>
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                        type="number"
                        value={year}
                        onChange={updateYear}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="success"
                    onClick={() => handleSubmit(season, year)}
                >
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

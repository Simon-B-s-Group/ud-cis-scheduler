import React from "react";
import { Modal, Button } from "react-bootstrap";

export function IntroPopup({
    show,
    handleClose
}: {
    show: boolean;
    handleClose: () => void;
}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Welcome to the UD CIS Scheduler!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                This application allows you to create your own University of
                Delaware Computer Science degree plan, visualizing satisfied
                degree requirements and credits taken. To start, you can view or
                edit the default degree plan by adding, editing, or deleting
                semesters and courses taken. You can also create a new degree
                plan from scratch. Have fun!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

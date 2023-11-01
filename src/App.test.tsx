import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

describe("UD CIS Scheduler tests", () => {
    // this is like launching the app
    beforeEach(() => render(<App />));

    test("A popup appears on load, which shows info about the program, and you can close it.", async () => {
        // checks if "Welcome to the UD CIS Scheduler!" is displayed on the screen
        expect(
            screen.getByText(/Welcome to the UD CIS Scheduler!/i)
        ).toBeInTheDocument();

        const closeButton = screen.getByText("Close");
        fireEvent.click(closeButton);

        // the modal takes a little bit to close
        // this returns a value the moment it has fully closed
        await waitFor(() => {
            expect(
                screen.queryByText("Welcome to the UD CIS Scheduler!")
            ).not.toBeInTheDocument();
        });
    });

    test("There is a sample plan on the screen, named Sample Degree Plan, and it has 4 semesters.", () => {
        const closeButton = screen.getByText("Close");
        fireEvent.click(closeButton);

        const titleText = screen.getByText(/Sample Degree Plan/i);
        expect(titleText).toBeInTheDocument();

        const semText = screen.getByText(/4 semesters/i);
        expect(semText).toBeInTheDocument();
    });

    test("When we go to the sample plan, the page should have the same name as the title, and 4 semesters. Total credits should be 61", () => {
        // TODO
    });

    test("The Sample Plan F23 semester should have: CISC108, EGGG101, ENGL110, HIST106, MATH241. It should have 15 credits", () => {
        // TODO
    });

    test("Deleting the F23 semester, we should be left with three semesters, S24, F24, S25. Total credits 46. When we go back to home, it should list 3 semesters", () => {
        // TODO
    });

    test("Deleting all semesters, we should have 0 total credits and no semesters displaying. When we go back it should list 0 semesters", () => {
        // TODO
    });

    test("When we create a new semester with new season/year values, it should add with no classes.", () => {
        // TODO
    });

    test("When we create a new semester with already-existing season/year values, the user should get an error message", () => {
        // TODO
    });

    test("Within a new semester we can add a new class from the dropdown. If we add one already in the list, the user should have an error message", () => {
        // TODO
    });

    test("Within a new semester we can add a custom class", () => {
        // TODO
    });

    test("Within an existing semester we can delete a class", () => {
        // TODO
    });
});

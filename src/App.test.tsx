import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("UD CIS Scheduler tests", () => {
    // this is like launching the app
    beforeEach(() => render(<App />));

    test("A popup appears on load, which shows info about the program, and you can close it. You can also re-open it to see the same message.", async () => {
        // checks if "Welcome to the UD CIS Scheduler!" is displayed on the screen
        expect(
            screen.getByText(/Welcome to the UD CIS Scheduler!/i)
        ).toBeInTheDocument();

        // finds an element with the text "Close"
        const closeButton = screen.getByText("Close");
        // click on that element (aka the Close button)
        userEvent.click(closeButton);

        // the modal takes a little bit to close
        // this returns a value the moment it has fully closed
        await waitFor(() => {
            expect(
                screen.queryByText("Welcome to the UD CIS Scheduler!")
            ).not.toBeInTheDocument();
        });

        const aboutButton = screen.getByText("About");
        userEvent.click(aboutButton);

        expect(
            screen.getByText(/Welcome to the UD CIS Scheduler!/i)
        ).toBeInTheDocument();
    });

    test("There is a sample plan on the screen, named Sample Degree Plan, and it has 4 semesters.", () => {
        const closeButton = screen.getByText("Close");
        userEvent.click(closeButton);

        const titleText = screen.getByText(/Sample Degree Plan/i);
        expect(titleText).toBeInTheDocument();

        const semText = screen.getByText(/4 semesters/i);
        expect(semText).toBeInTheDocument();
    });

    test("When we go to the sample plan, the page should have the same name as the title, and 4 semesters.", () => {
        const closeButton = screen.getByText("Close");
        userEvent.click(closeButton);

        const viewButton = screen.getByText("View Plan");
        userEvent.click(viewButton);

        expect(screen.getByText(/Sample Degree Plan/i)).toBeInTheDocument();

        expect(screen.getByText(/Fall 2023 Courses/i)).toBeInTheDocument();
        expect(screen.getByText(/Spring 2024 Courses/i)).toBeInTheDocument();
        expect(screen.getByText(/Fall 2024 Courses/i)).toBeInTheDocument();
        expect(screen.getByText(/Spring 2025 Courses/i)).toBeInTheDocument();
    });

    test("Deleting the F23 semester, we should be left with three semesters, S24, F24, S25", () => {
        const closeButton = screen.getByText("Close");
        userEvent.click(closeButton);

        const viewButton = screen.getByText("View Plan");
        userEvent.click(viewButton);

        const deleteButton = screen.getAllByText("Delete Semester")[0]; // get all delete buttons on the screen, then set this button const to the first one
        userEvent.click(deleteButton);

        // checks if "Fall 2023 Courses" is NOT in the document
        expect(screen.queryByText(/Fall 2023 Courses/i)).toBeNull();
        expect(screen.getByText(/Spring 2024 Courses/i)).toBeInTheDocument();
        expect(screen.getByText(/Fall 2024 Courses/i)).toBeInTheDocument();
        expect(screen.getByText(/Spring 2025 Courses/i)).toBeInTheDocument();
    });

    test("When we create a new semester with new season/year values, it should add with no classes.", async () => {
        const closeButton = screen.getByText("Close");
        userEvent.click(closeButton);

        const viewButton = screen.getByText("View Plan");
        userEvent.click(viewButton);

        const newSemesterButton = screen.getByText("New Semester");
        userEvent.click(newSemesterButton);
        const seasonSelect = screen.getByRole("combobox");
        userEvent.selectOptions(seasonSelect, "Summer");
        const yearSelect = screen.getByRole("spinbutton");
        userEvent.type(yearSelect, "2021");
        const submitButton = screen.getByText("OK");
        userEvent.click(submitButton);
    });

    test("If I open up the new semester popup and click off or press Escape, it should close the modal without submitting anything.", async () => {
        const closeButton = screen.getByText("Close");
        userEvent.click(closeButton);

        const viewButton = screen.getByText("View Plan");
        userEvent.click(viewButton);

        const newSemesterButton = screen.getByText("New Semester");
        userEvent.click(newSemesterButton);

        // simulate pressing the Esc key
        fireEvent.keyDown(newSemesterButton, {
            key: "Escape",
            code: "Escape",
            keyCode: 27,
            which: 27
        });

        const seasonSelect = screen.getByRole("combobox");

        // the modal takes a bit to close
        await waitFor(() => {
            expect(seasonSelect).not.toBeInTheDocument();
        });

        expect(seasonSelect).not.toBeInTheDocument();
    });

    test("When we create a new semester with already-existing season/year values, the user should get an error message", () => {
        // TODO
    });

    test("The Sample Plan F23 semester should have: CISC108, EGGG101, ENGL110, HIST106, MATH241. It should have 15 credits", () => {
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

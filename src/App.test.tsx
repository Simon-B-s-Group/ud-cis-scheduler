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

    test("Deleting the F23 semester, we should be left with three semesters, S24, F24, S25. We can also go back to the homepage, where it says 3 semesters are left.", () => {
        const closeButton = screen.getByText("Close");
        userEvent.click(closeButton);

        const viewButton = screen.getByText("View Plan");
        userEvent.click(viewButton);

        const deleteButton = screen.getAllByText("Delete Semester")[0]; // get all delete buttons on the screen, then set this button const to the first one
        userEvent.click(deleteButton);

        expect(screen.getByText(/Spring 2024 Courses/i)).toBeInTheDocument();
        expect(screen.getByText(/Fall 2024 Courses/i)).toBeInTheDocument();
        expect(screen.getByText(/Spring 2025 Courses/i)).toBeInTheDocument();
        // checks if "Fall 2023 Courses" is NOT in the document
        expect(screen.queryByText(/Fall 2023 Courses/i)).toBeNull();

        const backButton = screen.getByText("Go Back");
        userEvent.click(backButton);

        const titleText = screen.getByText(/Sample Degree Plan/i);
        expect(titleText).toBeInTheDocument();
        const semText = screen.getByText(/3 semesters/i);
        expect(semText).toBeInTheDocument();
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
        userEvent.clear(yearSelect);
        userEvent.type(yearSelect, "2021");
        const submitButton = screen.getByText("OK");
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(seasonSelect).not.toBeInTheDocument();
        });

        expect(screen.queryByText(/Summer 2021 Courses/i)).toBeInTheDocument();
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

    test("Can't add a semester that already exists", () => {
        const closeButton = screen.getByText("Close");
        userEvent.click(closeButton);

        const viewButton = screen.getByText("View Plan");
        userEvent.click(viewButton);

        const newSemesterButton = screen.getByText("New Semester");
        userEvent.click(newSemesterButton);
        const seasonSelect = screen.getByRole("combobox");
        userEvent.selectOptions(seasonSelect, "Fall");
        const yearSelect = screen.getByRole("spinbutton");
        userEvent.clear(yearSelect);
        userEvent.type(yearSelect, "2023");
        const submitButton = screen.getByText("OK");
        userEvent.click(submitButton);

        // expect the modal to still be on screen
        expect(seasonSelect).toBeInTheDocument();
    });

    test("You can delete a course from a semester", () => {
        const closeButton = screen.getByText("Close");
        userEvent.click(closeButton);

        const viewButton = screen.getByText("View Plan");
        userEvent.click(viewButton);

        const editButton = screen.getAllByText("Edit Semester")[0]; // get all Edit buttons on the screen, then set this button const to the first one
        // so we will click on the edit page for Fall 2023
        userEvent.click(editButton);

        const deleteEGGG101 = screen.getAllByText("Delete Course")[1]; // delete button for the second course of the semester, EGGG101
        userEvent.click(deleteEGGG101);

        expect(
            screen.queryByText(/EGGG101: Introduction to Engineering/i)
        ).toBeNull();
    });

    test("You can add a course from the default dropdown to a semester. You also cannot add the same course twice", () => {
        const closeButton = screen.getByText("Close");
        userEvent.click(closeButton);

        const viewButton = screen.getByText("View Plan");
        userEvent.click(viewButton);

        const editButton = screen.getAllByText("Edit Semester")[0]; // get all Edit buttons on the screen, then set this button const to the first one
        // so we will click on the edit page for Fall 2023
        userEvent.click(editButton);

        const courseSelect = screen.getByRole("combobox");
        userEvent.selectOptions(courseSelect, "CISC372");
        const okButton = screen.getAllByText("OK")[0]; // the first OK button submits a pre-defined course
        userEvent.click(okButton);

        expect(
            screen.queryByText(/CISC372: Parallel Computing/i)
        ).toBeInTheDocument();

        userEvent.click(okButton); // pressing it again, should not add it a second time
        expect(
            screen.getAllByText(/CISC372: Parallel Computing/i).length
        ).toEqual(1);
    });

    test("You can add a custom course to a semester, and leave the semester edit page. You also cannot add the same course twice", () => {
        const closeButton = screen.getByText("Close");
        userEvent.click(closeButton);

        const viewButton = screen.getByText("View Plan");
        userEvent.click(viewButton);

        const editButton = screen.getAllByText("Edit Semester")[0]; // get all Edit buttons on the screen, then set this button const to the first one
        // so we will click on the edit page for Fall 2023
        userEvent.click(editButton);

        const codeEdit = screen.getAllByRole("textbox")[0]; // first textbox = code edit
        const nameEdit = screen.getAllByRole("textbox")[1]; // second textbox = name edit
        const creditsEdit = screen.getByRole("spinbutton");
        userEvent.clear(codeEdit);
        userEvent.clear(nameEdit);
        userEvent.clear(creditsEdit);
        userEvent.type(codeEdit, "CISC487");
        userEvent.type(nameEdit, "Research");
        userEvent.type(creditsEdit, "4");

        const okButton = screen.getAllByText("OK")[1]; // the first OK button submits a pre-defined course
        userEvent.click(okButton);

        expect(screen.queryByText(/CISC487: Research/i)).toBeInTheDocument();
        expect(screen.getAllByText(/CISC487: Research/i).length).toEqual(1);

        userEvent.click(okButton); // submit it again; should not add another course, should just be 1 item for the course.
        expect(screen.getAllByText(/CISC487: Research/i).length).toEqual(1);

        const backButton = screen.getByText("Go Back");
        userEvent.click(backButton);

        expect(screen.queryByText(/CISC487: Research/i)).toBeInTheDocument(); // should still be listed as a course
    });
});

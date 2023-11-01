import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

describe("UD CIS Scheduler tests", () => {
    // this is like launching the app
    beforeEach(() => render(<App />));

    test("A popup appears on load, which shows info about the program.", () => {
        // checks if "Welcome to the UD CIS Scheduler!" is displayed on the screen
        expect(
            screen.getByText(/Welcome to the UD CIS Scheduler!/i)
        ).toBeInTheDocument();
    });

    test("You can close the intro modal.", async () => {
        const closeButton = screen.getByText("Close");
        fireEvent.click(closeButton);

        // the modal takes a little bit to close
        // this returns the moment it is done closing
        await waitFor(() => {
            expect(
                screen.queryByText("Welcome to the UD CIS Scheduler!")
            ).not.toBeInTheDocument();
        });
    });

    test("You can re-open the intro modal.", async () => {
        const closeButton = screen.getByText("Close");
        fireEvent.click(closeButton);

        await waitFor(() => {
            expect(
                screen.queryByText("Welcome to the UD CIS Scheduler!")
            ).not.toBeInTheDocument();
        });

        const aboutButton = screen.getByText("About");
        fireEvent.click(aboutButton);

        expect(
            screen.getByText(/Welcome to the UD CIS Scheduler!/i)
        ).toBeInTheDocument();
    });

    test("There is a sample plan on the screen, named Sample Degree Plan.", () => {
        const closeButton = screen.getByText("Close");
        fireEvent.click(closeButton);

        expect(screen.getByText(/Sample Degree Plan/i)).toBeInTheDocument();
    });
});

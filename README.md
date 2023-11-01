# UD CIS Scheduler - F23 CISC 275

This is our final project for CISC 275.

Project board: https://github.com/orgs/Simon-B-s-Group/projects/3

## Setup

-   Clone the repository
-   Run `npm i` before you do anything else, this installs React and every other dependency

You can use `npm run start` to launch the app locally.

## Pages so far

**App.tsx**: Renders one of three things:

-   A homepage, if there is no selected DegreePlan or Semester
-   DegreePlanPage.tsx, if there is a selected DegreePlan but no selected Semester
-   SingleSemesterPage.tsx, if there is both a selected DegreePlan and Semester

**DegreePlanPage.tsx**: This is the main page of a degree plan showing all its semesters, here you can add/delete semesters

**SingleSemesterPage.tsx**: This is the edit page for a single semester, here you can add/delete courses

## Other stuff

**SemesterView.tsx**: The table for a semester, showing all its courses and giving options to add/delete stuff depending on where it is used

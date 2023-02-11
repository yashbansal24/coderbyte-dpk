# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Tasks to Perform:

1. Building an Input Form/Field to receive custom Agent IDs
2. getShiftsByFacility needs to return the custom ID provided by the Facility
3. Update generateReport to read and return custom provided IDs.
4. The above change might fail for agents with no custom ID, so add a fallback value as Internal ID.
5. Update and writing new tests.

## Ticket Breakdown:

1. Add Input Field for Agent Custom ID on the application. - Estimate 1 days
2. Update response of getShiftsByFacility to return custom IDs as an additional metadata field. - Estimate 2h
3. Update generateReport to read custom ID and fallback on internal database ID otherwise. - Estimate 2h
4. Update and Writing tests for both getShiftsByFacility and generateReport functions. - Estimate 4h

Ticket 1 is dependency of Ticket 2 and 3. Ticket 2 and 3 can be worked in parallel by mocking the request and response.
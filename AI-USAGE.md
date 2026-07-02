# AI Usage Log

You are expected to use AI well and prove it. At least 3 substantial entries.
At least one must be a time AI was confidently wrong and you caught it.

## AI moment 1
- What I was trying to do: Design a clean TypeScript data model for a peer-to-peer borrowing marketplace.
- The prompt I wrote: "Design TypeScript types for a marketplace app with items, users, bookings, and pricing."
- What the AI gave back: It suggested basic interfaces for Item, User, and Booking, but initially modeled price as a simple number and ignored edge cases like missing ratings and optional fields.
- What was wrong / weak / risky about it: The model was too simplistic and did not reflect real-world API constraints. It also did not account for null values (e.g. no rating, no price for free items), which are important in real frontend systems.
- What I changed and why: I updated the types to use explicit null handling (e.g. `rating: number | null`, `price: Price | null`) and improved the structure to match realistic API contracts rather than simplified examples. 

## AI moment 2
- What I was trying to do:
Plan the structure of a React + TypeScript frontend with routing and multiple pages.
- The prompt I wrote: "Suggest a folder structure and page layout for a React marketplace app with home, item detail, booking flow, and authentication."
- What the AI gave back: It suggested a standard structure with pages/components/hooks and routing setup using React Router.
- What was wrong / weak / risky about it: It initially overcomplicated the architecture by introducing unnecessary state management tools (like Redux) and additional abstractions that were not needed for a small MVP.
- What I changed and why: I simplified the architecture to a lightweight structure using React Router and local component state only, because the assessment explicitly requires a clean MVP rather than enterprise-level complexity.

## AI moment 3 (the one where AI was wrong)
- What I was trying to do: Set up a safe Git workflow and understand whether I needed to clone the repository before continuing work.
- The prompt I wrote: "Do I need to clone my repository again after pushing to GitHub, and what is the correct workflow?"
- What the AI gave back: It suggested cloning the repository again into a new folder as a required step before continuing development.
- What was wrong / weak / risky about it: This was incorrect for the current workflow. Cloning is only needed for testing a clean environment, not as part of normal development. Following that advice would have duplicated the workspace and created unnecessary confusion.
- What I changed and why: I confirmed that my existing local repository was sufficient and continued development without cloning. I only use cloning later for testing production readiness, not as part of the main workflow.
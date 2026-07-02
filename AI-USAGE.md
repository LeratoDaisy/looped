# AI Usage Log

You are expected to use AI well and prove it. At least 3 substantial entries.
At least one must be a time AI was confidently wrong and you caught it.

## AI moment 1
- What I was trying to do: Design a robust TypeScript data model for a peer-to-peer borrowing marketplace that could simulate a real API contract.
- The prompt I wrote: “Design TypeScript types for a marketplace app with items, users, bookings, and pricing. Make it realistic for a frontend system with missing or partial API data.”
- What the AI gave back: It generated basic interfaces for Item, User, and Booking, but initially assumed clean, fully populated data and represented price as a simple number without considering real-world API inconsistencies.
- What was wrong / weak / risky about it: The model was unrealistic for frontend systems because it ignored nullable fields, optional API responses, and partial data states. This would have caused UI crashes when rendering incomplete backend data.
- What I changed and why: I redesigned the types to explicitly model real API uncertainty using null and optional fields (e.g. rating: number | null, price: Price | null, distanceKm: number | null). This made the frontend resilient and closer to production-grade data handling.

---

## AI moment 2
- What I was trying to do: Define an appropriate frontend architecture for a multi-page React + TypeScript application including authentication, item browsing, and a booking flow.
- The prompt I wrote: “Suggest a folder structure and routing approach for a React marketplace MVP with login, item listing, item details, and booking flow.”
- What the AI gave back: It proposed a layered architecture using pages/components/hooks plus additional tooling like Redux for state management and more complex abstractions.
- What was wrong / weak / risky about it: The suggestion was over-engineered for the scope of the sprint. Introducing Redux and heavy abstractions would have increased complexity without improving delivery quality, and violated the MVP constraint of the assessment.
- What I changed and why: I deliberately simplified the architecture to React Router + local component state, keeping state management minimal and colocated. This ensured faster implementation, easier debugging, and alignment with the assessment’s focus on product judgment over tooling complexity.

---

## AI moment 3 (the one where AI was wrong)
- What I was trying to do: Clarify correct Git workflow during development, specifically whether I needed to re-clone the repository after pushing changes.
- The prompt I wrote: “Do I need to clone my GitHub repository again after pushing, and what is the correct workflow for continuing development?”
- What the AI gave back: It incorrectly suggested cloning the repository again into a new folder as part of normal workflow.
- What was wrong / weak / risky about it: This would have introduced unnecessary duplication of the working directory and disrupted the existing Git workflow. It confused “testing a clean environment” with “normal development practice.”
- What I changed and why: I identified that my existing local repository was correct and continued development without re-cloning. Instead, I only use a fresh clone when validating production readiness or testing a clean install environment.
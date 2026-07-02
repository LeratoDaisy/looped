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
- ...

## AI moment 3 (the one where AI was wrong)
- ...

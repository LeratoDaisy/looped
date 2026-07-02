# Decision Log

At least 8 real entries. Generic entries score nothing. Use this shape:

## Decision: Scope Reduction 
- Context: The brief included messaging, real-time activity, offline mode, maps, referrals, ratings, and urgency timers far beyond a single sprint.
- Options I considered: Attempt implementing all features, implement a subset without justification, or reduce scope to core marketplace flow.
- What I chose and why: I focused on a core flow (browse → view item → book → confirm) because it represents the product’s primary value proposition and is achievable within the sprint constraints.
- What I gave up: Messaging, real-time features, offline support, maps, referral system, and urgency simulation features.

---

## Decision: (1)
- Context: The product requires login before access but no backend exists.
- Options I considered: Build a real auth system, skip auth entirely, or simulate authentication using localStorage.
- What I chose and why: I used localStorage-based auth gating because it satisfies the UX requirement without backend complexity.
- What I gave up: Security, real user accounts, password handling, and session validation.

---

## Decision: (2)
- Context: Items must be searchable and filterable by category and price.
- Options I considered: Build API-based filtering, pre-filter data at load, or filter directly in React state.
- What I chose and why: Client-side filtering using React state because dataset is static and small.
- What I gave up: Scalability for large datasets and server-side optimization.

---

## Decision (3)
- Context: App requires multiple screens (login, home, item, booking).
- Options I considered: Manual window.location routing, custom router logic, or react-router-dom.
- What I chose and why: React Router for maintainability and clarity in multi-page flow.
- What I gave up: Ultra-lightweight custom routing implementation.

---

## Decision (4)
- Context: No backend exists but UI depends on dynamic listings.
- Options I considered: Build backend, hardcode in components, or simulate API data layer.
- What I chose and why: Centralised mock data file to simulate real API contract.
- What I gave up: Real-time updates and persistence.

---

## Decision (5)
- Context: Items may have missing photos, null prices, or null ratings.
- Options I considered: Assume data is complete, crash on missing fields, or defensively render fallback UI.
- What I chose and why: Defensive UI rendering to ensure stability and production-like robustness.
- What I gave up: Simpler rendering logic in favour of reliability.

---

## Decision (5)
- Context: Brief requests “premium, impressive UI”, but also requires functional completion.
- Options I considered: Heavy UI framework, full design system, or minimal custom styling.
- What I chose and why: Clean minimal UI with emphasis on hierarchy and readability to ensure usability under time constraints.
- What I gave up: Advanced animations and design system consistency.

---

## Decision (6)
- Context: Founder requested full booking system with complex flows.
- Options I considered: Multi-step calendar system, external date libraries, or simplified two-step confirmation flow.
- What I chose and why: Two-step flow (select → confirm) to keep UX clear and implementation realistic.
- What I gave up: Advanced scheduling logic and calendar integration.

---

## Decision (7)
- Context: The brief suggested a full booking system with complex scheduling, availability handling, and calendar-like interactions.
- Options I considered: Build a full calendar booking system, integrate a date library, or implement a simplified multi-step flow.
- What I chose and why: I implemented a two-step booking flow (select details → confirm booking) to keep the user journey clear and achievable within the sprint constraints while still demonstrating full flow logic.
- What I gave up: Calendar-based scheduling, real-time availability validation, and advanced conflict handling.

---

## Decision (8)
- Context: Mock data includes missing photos, null prices, paused listings, and missing ratings, simulating real-world API inconsistency.
- Options I considered: Assume clean data, validate everything in a preprocessing step, or handle missing values directly in UI components.
- What I chose and why: I implemented defensive rendering directly in the UI to ensure robustness (fallback images, conditional pricing display, status checks).
- What I gave up: Simpler component logic in favour of production-like resilience and error tolerance.
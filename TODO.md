# Greenpace Responsive Refactor - TODO

- [x] Reconcile current baseline: identify breakpoints/hardcoded widths that can cause horizontal scrolling

- [x] Update `styles.css` to be mobile-first and fluid (max-width:100%, height:auto, remove fixed px widths where unsafe)

- [x] Add/adjust media queries for 320px/375px/425px/768px/1024px/1440px targeting existing sections
- [x] Ensure no horizontal scrolling (`body { overflow-x: hidden; }` and audit wide elements like sliders/cards)


- [x] Update responsive typography with `clamp()` where appropriate (h1/h2/p/buttons)

- [x] Keep HTML + JS design/functionality unchanged; only change JS if needed for layout-related behavior
- [x] Task: Made nav buttons (Login/Get Started) smaller, added hover color-swap effect, ensured responsiveness


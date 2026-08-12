# Process Flow Connectors Task State (2026-08-12)

## Task
User asked to add connecting visual lines between How We Work steps (01-07) on homepage to emphasize continuous flow. TODO items added and checked pending: connectors added + verify desktop/mobile + publish.

## What was implemented (Home.tsx, Process section ~line 311-371)
- Row 1 (steps 01-04): 4-col grid, each card i<3 gets an absolute h-px gradient connector from `left: calc(50% + 3rem)` with width `calc(100% - 6rem)` (spans from card center to next card center), top-8 (aligned with the 05-07 big number), gradient oklch blue->cyan, opacity 0.55, hidden on lg:block only.
- Between rows: a flex container (hidden lg:flex) with a vertical w-px h-6 gradient div + an SVG elbow arrow (M1 1H17V13) gradient blue->cyan, justify-end (positions under step 04).
- Row 2 (steps 05-07): 3-col grid, cards i<2 get connector from `left: calc(50% + 3rem)` width `calc(100% - 6rem)` pointing toward step 07 side... NOTE: this is wrong direction — second row flows 05->06->07 so connectors should go from 05 to 06 and 06 to 07. With 3 cards in row 2, i=0 (step 05) should connect to step 06, i=1 (step 06) to step 07. The current code does i<2 which connects 05->06 and 06->07 (correct!), but the arrow elbow between rows sits justify-end under step 04 pointing DOWN-RIGHT into step 05 (step 05 starts at col 1 of row 2... actually step 05 is the FIRST card of row 2 in col 1, so arrow should be at left under step 05, NOT justify-end).

## Issue found
- The between-row elbow arrow uses justify-end — places it under step 04 (rightmost col), but row 2 step 05 is leftmost. The flow should go 04 (right) -> down -> left to 05? Actually a snake flow: 01..04 left-to-right on row 1, then 04 connects down, then row 2 flows right-to-left (07,06,05) OR step 05 should start at right. Simplest visually correct: make row 2 connectors point LEFT (from 06 to 05? no...). 
- Chosen fix: keep row 2 left-to-right (05,06,07) and place the down arrow at the LEFT side (under step 05), connecting from row1 end... that would cross. Better: put down-arrow at RIGHT side under step 04 connecting to step 07 at the RIGHT side of row 2, and make row 2 connectors point LEFT (from step06 -> step05? no — flow should be 04->05->06->07).

## Better plan (to implement)
- Row 1: connectors point RIGHT (01->02->03->04) — current left-anchor implementation is correct.
- Between rows: down-arrow at RIGHT edge (under step 04) — change justify-end -> justify-end is right... row2 step order reversed: render row 2 as [07,06,05] reversed visually? No — keep data order but anchor down-connector from step 04 (rightmost) to step 05 (leftmost of row2). Cross-diagonal is hard. 
- SIMPLEST accepted fix: down-arrow at RIGHT, and row 2 flows RIGHT-TO-LEFT visually: cards rendered with connectors pointing LEFT from 06->05 and 07->06? That reverses order. Instead: keep row 2 left-to-right and move down-arrow to LEFT side below step 01? also wrong.
- DECISION: render row 2 cards in REVERSED visual order? No. Final: keep left-to-right on both rows; place down-arrow centered? The elbow arrow can be an S-curve SVG spanning from right of row1 (step04 bottom) to left of row2 (step05 top). Implement as an SVG with a bezier path across the full grid width between rows, drawn in the between-row flex container, width 100%, height ~40px, path M full-width,0 S to 0,full-height.

## Key code facts
- Home.tsx process section at client/src/pages/Home.tsx lines 298-373 (after last edit).
- Gradients use oklch(0.55 0.19 262) -> oklch(0.72 0.16 205), opacity 0.55; hidden lg:block (desktop only).
- Cards use glass-card p-6, number div text-5xl mb-4 (top-8 align).
- TS: zero errors; tests 24 passing after last edit (verify again before checkpoint).
- Dev server url: https://3000-ibzvslwfxddk7mxe7cc86-aedfdc12.us2.manus.computer
- Screenshots default full-page at 1440x900 worked to show whole page; viewport captures start at top of page.

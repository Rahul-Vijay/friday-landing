# Friday video design system

Brand source: the Friday app + getfriday.dev landing (dark lavender studio).

## Colors

- Canvas (background): `#0c0c17`
- Surface 0: `#131322`
- Surface 1: `#1b1b2e`
- Surface 2: `#25263d`
- Surface 3: `#32334f`
- Terminal: `#10101e`
- Text: `#f2e9e4`
- Text secondary: `#d0c3ca`
- Muted: `#aaa0b0`
- Dim (sparingly, large sizes only): `#766f82`
- Accent (mauve): `#c9ada7`
- Accent 2: `#9a8c98`
- Accent soft fill: `rgba(201,173,167,0.16)`
- Success: `#9bd4a0`
- Danger: `#ef8c99`
- Warning: `#dec177`
- Border: `rgba(242,233,228,0.22)`
- Border soft: `rgba(242,233,228,0.12)`
- Note ink (text on accent fills): `#22223b`

## Typography

- Display / UI: "Space Grotesk" (500, 600, 700)
- Mono (terminal, metadata, labels): "JetBrains Mono" (400, 600)
- Mono labels are lowercase or uppercase with letter-spacing 0.08-0.14em

## Shapes & chrome

- Rounded corners: 12-18px cards, 10px chips
- Window chrome motif: slim title bars (`friday — <context>`) in mono on Surface 0 with a small dot
- Terminal panes: `#10101e` body, mono text, `→` prompt lines, `✓` success lines in Success green
- Sticky notes: cream `#f2e9e4` with ink `#22223b`
- Background texture: dot grid (cream at low opacity) + soft radial mauve glows

## Personality

Calm, precise, studio-at-night. The product is an orchestrator: motion should feel
choreographed and confident, never chaotic. Mauve accent is the "alive" signal.

## Don'ts

- No pure black backgrounds; canvas is `#0c0c17`
- No blue/purple neon, no gradients between hues; glows are mauve on lavender-dark
- No fonts outside Space Grotesk / JetBrains Mono

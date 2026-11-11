# Styling

Use Tailwind utilities on the element being styled. Layout, spacing, typography, surfaces, responsive rules, and interactive states live in `app/page.tsx` and `app/components/landing.tsx`.

## Shared styles

`app/components/styles.ts` contains literal Tailwind recipes for page width, section spacing, section headings, eyebrow labels, and text links. Reuse these when adding sections rather than copying their utilities. Context-specific sizing and spacing stay on the element.

Brand colours and fonts are defined with Tailwind's `@theme` in `app/globals.css`. Prefer named utilities such as `text-copy`, `bg-surface`, and `border-line` when the token fits. The standard Tailwind spacing scale controls the page's dimensions; arbitrary values preserve deliberate editorial sizing and illustration details.

Keep complete class names in source so Tailwind can detect them. For stateful choices, use complete class strings or variants such as `aria-selected:`, `data-[]:`, and `in-[]:`. Avoid constructing utility names from partial strings.

## Responsive behaviour

The custom variants preserve the existing design's inclusive boundaries:

| Variant        | Viewport                                             |
| -------------- | ---------------------------------------------------- |
| `laptop:`      | Width at or below 1100px                             |
| `tablet:`      | Width at or below 800px                              |
| `phone:`       | Width at or below 600px                              |
| `wide:`        | Width at or above 1600px                             |
| `short-phone:` | Width at or below 600px and height at or below 740px |

Unprefixed utilities define the desktop layout. Narrower variants override them in laptop, tablet, then phone order. Keep those shared definitions in `globals.css` when adjusting the site's breakpoints.

## Custom CSS

`app/globals.css` intentionally retains:

- Theme tokens, browser defaults, and accessible focus/motion preferences.
- The decorative orbit illustration, whose geometry belongs together.
- The jacket sprite, mask, scroll height, and transforms driven by JavaScript CSS variables.
- Shared animation keyframes.

These are specialised visual effects. New reusable page or component styling should use Tailwind. Semantic class names that remain in JSX identify sections, interaction hooks, or custom artwork; they do not require a matching global CSS rule.

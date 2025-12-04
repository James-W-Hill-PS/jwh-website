# Hack Club Theme Setup

## Installation

Install the required dependencies:

```bash
npm install theme-ui @hackclub/theme @hackclub/meta @theme-ui/style-guide --legacy-peer-deps
```

Note: We use `--legacy-peer-deps` because the Hack Club packages currently support React 18, but this project uses React 19.

## What's Included

### Main Page (`app/page.tsx`)
A simple landing page showcasing:
- Hero section with title and CTA buttons
- Feature cards with badges
- Call-to-action section

### Full Example (`app/theme-example/page.tsx`)
A comprehensive demo page showing:
- All button variants
- Card styles (primary, sunken, interactive)
- Form components (inputs, labels)
- Badge variants
- Typography styles
- Color palette

## Usage

The theme is wrapped with `ThemeUIProvider` and uses the `@hackclub/theme` package. All components use the `sx` prop for styling based on the theme values.

### Example Component

```tsx
import { Box, Heading, Button } from 'theme-ui'

<Box sx={{ bg: 'background', p: 4 }}>
  <Heading variant="title" sx={{ color: 'red' }}>
    Hello World
  </Heading>
  <Button variant="lg">Click Me</Button>
</Box>
```

## Theme Values

The theme includes:
- **Colors**: red, orange, yellow, green, cyan, blue, purple, and semantic colors
- **Typography**: Multiple heading and text variants
- **Spacing**: Scale from 0-512px
- **Buttons**: primary, lg, outline, outlineLg, cta, ctaLg
- **Cards**: primary, sunken, interactive, translucent
- **Badges**: pill, outline

## Running the Project

```bash
npm run dev
```

Visit:
- Main page: http://localhost:3000
- Full example: http://localhost:3000/theme-example

## Resources

- [Theme UI Docs](https://theme-ui.com)
- [Hack Club Theme](https://theme.hackclub.com)
- [GitHub Repo](https://github.com/hackclub/theme)

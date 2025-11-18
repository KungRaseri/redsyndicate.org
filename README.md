# Red Syndicate

Professional software and website development services built with modern technologies.

## Tech Stack

- **[SvelteKit](https://kit.svelte.dev/)** - Full-stack framework
- **[Svelte 5](https://svelte.dev/)** - Reactive UI library with runes mode
- **[Skeleton v4](https://www.skeleton.dev/)** - Design system and component library
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Lucide Svelte](https://lucide.dev/)** - Beautiful icon library

## Features

- 🎨 Multiple themes (Skeleton presets + custom themes)
- 🌙 Dark mode support with data-mode attribute
- 📱 Fully responsive design
- ♿ Accessibility-first approach
- 🎯 Type-safe with TypeScript
- 🚀 Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Navigate to http://localhost:5173
```

## Development

```bash
# Start dev server
npm run dev

# Run type checking
npm run check

# Run linting
npm run lint

# Format code
npm run format

# Run tests
npm test

# Run unit tests
npm run test:unit
```

## Building

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable Svelte components
│   ├── stores/         # Svelte stores (theme, etc.)
│   └── types/          # TypeScript type definitions
├── routes/             # SvelteKit routes
│   ├── +layout.svelte  # Root layout with AppBar and footer
│   └── +page.svelte    # Homepage
├── app.postcss         # Global styles and theme imports
└── app.html            # HTML template

static/
└── themes/             # Custom theme CSS files
```

## Theming

The site supports multiple themes with a hybrid approach:

- **Preset Themes**: Imported from Skeleton (nouveau, crimson, vintage, terminus)
- **Custom Themes**: Dynamically loaded from `/static/themes/` directory

Switch themes using the theme store in `src/lib/stores/theme.ts`.

## Dark Mode

Dark mode is controlled by the `data-mode` attribute on the `<html>` element:
- Toggle using the LightSwitch component
- Preference stored in localStorage
- Use `dark:` Tailwind variant for dark mode styles

## License

All rights reserved © Red Syndicate

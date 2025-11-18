import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type ThemeName =
	| 'nouveau'
	| 'crimson'
	| 'vintage'
	| 'terminus'
	| 'gold-nouveau'
	| 'cyber-night'
	| 'forest-sage'
	| 'crimson-steel';

const ALLOWED_THEMES = new Set<ThemeName>([
	'nouveau',
	'crimson',
	'vintage',
	'terminus',
	'gold-nouveau',
	'cyber-night',
	'forest-sage',
	'crimson-steel'
]);

export const themes: Record<
	ThemeName,
	{ name: string; description: string; isPreset?: boolean }
> = {
	nouveau: {
		name: 'Nouveau',
		description: 'Art nouveau inspired with elegant curves',
		isPreset: true
	},
	crimson: {
		name: 'Crimson',
		description: 'Bold reds with strong contrast',
		isPreset: true
	},
	vintage: {
		name: 'Vintage',
		description: 'Retro styling with warm tones',
		isPreset: true
	},
	terminus: {
		name: 'Terminus',
		description: 'Dark terminal-inspired theme',
		isPreset: true
	},
	'gold-nouveau': {
		name: 'Gold Nouveau',
		description: 'Elegant gold and dark tones with luxurious feel',
		isPreset: false
	},
	'cyber-night': {
		name: 'Cyber Night',
		description: 'Neon blues and cyans with dark backgrounds',
		isPreset: false
	},
	'forest-sage': {
		name: 'Forest Sage',
		description: 'Natural greens and earthy tones',
		isPreset: false
	},
	'crimson-steel': {
		name: 'Crimson Steel',
		description: 'Bold reds with cool grays',
		isPreset: false
	}
};

function sanitizeThemeName(themeName: string): string {
	return themeName.replaceAll(/[^a-z0-9-]/gi, '');
}

export const currentTheme = writable<ThemeName>('nouveau');

export async function loadTheme(themeName: ThemeName) {
	if (!browser) return;

	// Validate against whitelist
	if (!ALLOWED_THEMES.has(themeName)) {
		console.error(`Invalid theme name: ${themeName}`);
		return;
	}

	// Sanitize to prevent CSS injection
	const sanitizedTheme = sanitizeThemeName(themeName);

	// Set data-theme attribute
	document.documentElement.dataset.theme = sanitizedTheme;

	// Only load CSS file for custom themes (presets are imported in app.postcss)
	const isPreset = themes[themeName]?.isPreset;
	if (!isPreset) {
		// Remove existing theme CSS if present
		const existingLink = document.getElementById('theme-css');
		if (existingLink) {
			existingLink.remove();
		}

		const link = document.createElement('link');
		link.id = 'theme-css';
		link.rel = 'stylesheet';
		link.href = `/themes/${sanitizedTheme}.css`;
		document.head.appendChild(link);
	}

	localStorage.setItem('selectedTheme', themeName);
	currentTheme.set(themeName);
}

// Initialize theme from localStorage
if (browser) {
	const savedTheme = (localStorage.getItem('selectedTheme') as ThemeName) || 'nouveau';
	loadTheme(savedTheme);
}

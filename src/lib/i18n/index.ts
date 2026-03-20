import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

register('fr', () => import('./fr.json'));
register('ar', () => import('./ar.json'));

const defaultLocale = 'fr';

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? (localStorage.getItem('bnidari-lang') ?? defaultLocale) : defaultLocale
});

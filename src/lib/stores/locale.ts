import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const STORAGE_KEY = 'bnidari-lang';

function getInitialLocale(): string {
	if (!browser) return 'fr';
	return localStorage.getItem(STORAGE_KEY) ?? 'fr';
}

function createLocaleStore() {
	const { subscribe, set } = writable<string>(getInitialLocale());

	return {
		subscribe,
		switch(locale: string) {
			set(locale);
			if (browser) {
				localStorage.setItem(STORAGE_KEY, locale);
				document.documentElement.lang = locale;
				document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
			}
		}
	};
}

export const appLocale = createLocaleStore();

export function isRtl(locale: string): boolean {
	return locale === 'ar';
}

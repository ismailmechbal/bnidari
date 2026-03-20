<script lang="ts">
	import { locale } from 'svelte-i18n';
	import { appLocale } from '$lib/stores/locale';
	import { Languages } from 'lucide-svelte';

	function toggle() {
		const next = $appLocale === 'fr' ? 'ar' : 'fr';
		appLocale.switch(next);
		locale.set(next);
	}
</script>

<button
	onclick={toggle}
	class="no-print flex items-center gap-2 rounded-lg border border-charcoal/10 bg-cream px-3 py-1.5 text-sm font-medium text-charcoal transition-colors hover:bg-cream-dark"
	aria-label="Switch language"
>
	<Languages size={16} />
	<span>{$appLocale === 'fr' ? 'العربية' : 'Français'}</span>
</button>

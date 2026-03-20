<script lang="ts">
	import { onMount } from 'svelte';
	import { locale, waitLocale } from 'svelte-i18n';
	import '$lib/i18n';
	import '../app.css';
	import { appLocale } from '$lib/stores/locale';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	let ready = $state(false);

	onMount(async () => {
		const savedLocale = $appLocale;
		locale.set(savedLocale);
		document.documentElement.lang = savedLocale;
		document.documentElement.dir = savedLocale === 'ar' ? 'rtl' : 'ltr';
		await waitLocale();
		ready = true;
	});
</script>

{#if ready}
	<div class="flex min-h-screen flex-col">
		<Navigation />
		<main class="flex-1">
			{@render children()}
		</main>
		<Footer />
	</div>
{:else}
	<div class="flex min-h-screen items-center justify-center bg-cream">
		<div class="text-center">
			<span class="font-serif text-2xl text-terracotta">بنيت داري</span>
		</div>
	</div>
{/if}

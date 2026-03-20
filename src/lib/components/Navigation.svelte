<script lang="ts">
	import { page } from '$app/state';
	import { _ } from 'svelte-i18n';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import { Menu, X } from 'lucide-svelte';

	let mobileOpen = $state(false);

	const links = [
		{ href: '/', key: 'nav.home' },
		{ href: '/guide', key: 'nav.guide' },
		{ href: '/about', key: 'nav.about' }
	];

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<nav class="no-print sticky top-0 z-50 border-b border-charcoal/5 bg-cream/90 backdrop-blur-md">
	<div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
		<a href="/" class="flex items-center gap-2" onclick={closeMobile}>
			<span class="font-serif text-xl font-bold text-terracotta">بنيت داري</span>
			<span class="hidden text-xs font-medium text-charcoal/50 sm:block">Bnit Dari</span>
		</a>

		<!-- Desktop nav -->
		<div class="hidden items-center gap-6 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="text-sm font-medium transition-colors {page.url.pathname === link.href
						? 'text-terracotta'
						: 'text-charcoal/60 hover:text-charcoal'}"
				>
					{$_(link.key)}
				</a>
			{/each}
			<LanguageSwitcher />
		</div>

		<!-- Mobile menu button -->
		<div class="flex items-center gap-3 md:hidden">
			<LanguageSwitcher />
			<button
				onclick={() => (mobileOpen = !mobileOpen)}
				class="text-charcoal/60"
				aria-label="Menu"
			>
				{#if mobileOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile nav -->
	{#if mobileOpen}
		<div class="border-t border-charcoal/5 bg-cream px-4 py-3 md:hidden" transition:slide={{ duration: 200 }}>
			{#each links as link}
				<a
					href={link.href}
					onclick={closeMobile}
					class="block rounded-lg px-3 py-2 text-sm font-medium transition-colors {page.url.pathname === link.href
						? 'bg-terracotta/10 text-terracotta'
						: 'text-charcoal/60 hover:bg-charcoal/5'}"
				>
					{$_(link.key)}
				</a>
			{/each}
		</div>
	{/if}
</nav>

<script module lang="ts">
	import { slide } from 'svelte/transition';
</script>

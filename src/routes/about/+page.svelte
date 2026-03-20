<script lang="ts">
	import { _ } from 'svelte-i18n';
	import LegalNote from '$lib/components/LegalNote.svelte';
	import { BookOpen, Compass, Wrench } from 'lucide-svelte';
</script>

<svelte:head>
	<title>{$_('about.title')} — Bani Dari</title>
	<meta name="description" content={$_('site.metaDescription')} />
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
	<h1 class="font-serif text-3xl font-bold text-charcoal sm:text-4xl">
		{$_('about.title')}
	</h1>
	<p class="mt-4 text-lg leading-relaxed text-charcoal/70">
		{$_('about.intro')}
	</p>

	<div class="mt-12 space-y-10">
		<!-- Why -->
		<section class="flex gap-4">
			<div class="flex-shrink-0">
				<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta/10">
					<Compass size={20} class="text-terracotta" />
				</div>
			</div>
			<div>
				<h2 class="font-serif text-xl font-bold text-charcoal">{$_('about.whyTitle')}</h2>
				<p class="mt-2 leading-relaxed text-charcoal/70">{$_('about.whyContent')}</p>
			</div>
		</section>

		<!-- How -->
		<section class="flex gap-4">
			<div class="flex-shrink-0">
				<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-forest/10">
					<BookOpen size={20} class="text-forest" />
				</div>
			</div>
			<div>
				<h2 class="font-serif text-xl font-bold text-charcoal">{$_('about.howTitle')}</h2>
				<p class="mt-2 leading-relaxed text-charcoal/70">{$_('about.howContent')}</p>
			</div>
		</section>

		<!-- Tech -->
		<section class="flex gap-4">
			<div class="flex-shrink-0">
				<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal/10">
					<Wrench size={20} class="text-charcoal/60" />
				</div>
			</div>
			<div>
				<h2 class="font-serif text-xl font-bold text-charcoal">{$_('about.techTitle')}</h2>
				<p class="mt-2 leading-relaxed text-charcoal/70">{$_('about.techContent')}</p>
			</div>
		</section>
	</div>

	<div class="mt-12">
		<LegalNote />
	</div>
</div>

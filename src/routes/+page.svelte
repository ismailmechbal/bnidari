<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { appLocale } from '$lib/stores/locale';
	import { phases } from '$lib/data/steps';
	import { totalSteps } from '$lib/stores/checklist';
	import { ArrowRight, ArrowLeft, CheckSquare, Globe, ShieldCheck } from 'lucide-svelte';

	const totalDocuments = phases.reduce(
		(acc, phase) => acc + phase.steps.reduce((a, s) => a + (s.documents?.length ?? 0), 0),
		0
	);
</script>

<svelte:head>
	<title>Bani Dari — {$_('site.description')}</title>
	<meta name="description" content={$_('site.metaDescription')} />
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden">
	<div class="zellige-pattern pointer-events-none absolute inset-0"></div>
	<div class="relative mx-auto max-w-5xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28">
		<div class="max-w-3xl {$appLocale === 'ar' ? 'ms-auto text-end' : ''}">
			<h1 class="font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
				{$_('home.heroTitle')}
				<span class="text-terracotta">{$_('home.heroTitleHighlight')}</span>
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-charcoal/60 sm:text-xl">
				{$_('home.heroSubtitle')}
			</p>
			<div class="mt-8 flex flex-wrap gap-4 {$appLocale === 'ar' ? 'justify-end' : ''}">
				<a
					href="/guide"
					class="inline-flex items-center gap-2 rounded-xl bg-terracotta px-6 py-3 font-semibold text-white shadow-lg shadow-terracotta/25 transition-all hover:bg-terracotta-dark hover:shadow-xl"
				>
					{$_('home.ctaStart')}
					{#if $appLocale === 'ar'}
						<ArrowLeft size={18} />
					{:else}
						<ArrowRight size={18} />
					{/if}
				</a>
				<a
					href="/about"
					class="inline-flex items-center gap-2 rounded-xl border border-charcoal/15 px-6 py-3 font-semibold text-charcoal transition-colors hover:bg-charcoal/5"
				>
					{$_('home.ctaLearnMore')}
				</a>
			</div>
		</div>

		<!-- Stats -->
		<div class="mt-16 grid grid-cols-3 gap-4 sm:gap-6">
			<div class="rounded-2xl border border-charcoal/8 bg-white p-4 text-center shadow-sm sm:p-6">
				<div class="font-serif text-3xl font-bold text-terracotta sm:text-4xl">
					{phases.length}
				</div>
				<div class="mt-1 text-sm text-charcoal/50">{$_('home.statsPhases')}</div>
			</div>
			<div class="rounded-2xl border border-charcoal/8 bg-white p-4 text-center shadow-sm sm:p-6">
				<div class="font-serif text-3xl font-bold text-terracotta sm:text-4xl">
					{totalSteps}
				</div>
				<div class="mt-1 text-sm text-charcoal/50">{$_('home.statsSteps')}</div>
			</div>
			<div class="rounded-2xl border border-charcoal/8 bg-white p-4 text-center shadow-sm sm:p-6">
				<div class="font-serif text-3xl font-bold text-terracotta sm:text-4xl">
					{totalDocuments}+
				</div>
				<div class="mt-1 text-sm text-charcoal/50">{$_('home.statsDocuments')}</div>
			</div>
		</div>
	</div>
</section>

<!-- Features -->
<section class="border-t border-charcoal/5 bg-white">
	<div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
		<h2 class="font-serif text-center text-2xl font-bold text-charcoal sm:text-3xl">
			{$_('home.featureTitle')}
		</h2>
		<div class="mt-12 grid gap-8 sm:grid-cols-3">
			<div class="text-center">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta/10">
					<CheckSquare size={24} class="text-terracotta" />
				</div>
				<h3 class="mt-4 text-lg font-semibold text-charcoal">{$_('home.feature1Title')}</h3>
				<p class="mt-2 text-sm leading-relaxed text-charcoal/60">{$_('home.feature1Desc')}</p>
			</div>
			<div class="text-center">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10">
					<Globe size={24} class="text-forest" />
				</div>
				<h3 class="mt-4 text-lg font-semibold text-charcoal">{$_('home.feature2Title')}</h3>
				<p class="mt-2 text-sm leading-relaxed text-charcoal/60">{$_('home.feature2Desc')}</p>
			</div>
			<div class="text-center">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta/10">
					<ShieldCheck size={24} class="text-terracotta" />
				</div>
				<h3 class="mt-4 text-lg font-semibold text-charcoal">{$_('home.feature3Title')}</h3>
				<p class="mt-2 text-sm leading-relaxed text-charcoal/60">{$_('home.feature3Desc')}</p>
			</div>
		</div>
	</div>
</section>

<!-- Phase Preview -->
<section class="border-t border-charcoal/5">
	<div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
		<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
			{#each phases as phase, i}
				<a
					href="/guide"
					class="group rounded-xl border border-charcoal/8 bg-white p-4 transition-all hover:border-terracotta/30 hover:shadow-md"
				>
					<div class="flex items-center gap-3">
						<span class="text-2xl">{phase.emoji}</span>
						<div>
							<span class="text-xs font-bold text-terracotta">{$_('common.phase')} {i + 1}</span>
							<h3 class="text-sm font-semibold text-charcoal">
								{$appLocale === 'ar' ? phase.titleAr : phase.titleFr}
							</h3>
						</div>
					</div>
					<p class="mt-2 text-xs text-charcoal/50">
						{phase.steps.length} {$_('common.steps')}
					</p>
				</a>
			{/each}
		</div>
	</div>
</section>

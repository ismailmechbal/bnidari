<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { phases } from '$lib/data/steps';
	import { checklist, globalProgress, completedSteps, totalSteps } from '$lib/stores/checklist';
	import PhaseCard from '$lib/components/PhaseCard.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import LegalNote from '$lib/components/LegalNote.svelte';
	import { RotateCcw } from 'lucide-svelte';

	let expandAll = $state(false);

	function handleReset() {
		if (confirm($_('guide.resetConfirm'))) {
			checklist.reset();
		}
	}

	function toggleExpandAll() {
		expandAll = !expandAll;
	}
</script>

<svelte:head>
	<title>{$_('guide.title')} — Bani Dari</title>
	<meta name="description" content={$_('site.metaDescription')} />
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
	<!-- Header -->
	<div class="mb-8">
		<h1 class="font-serif text-3xl font-bold text-charcoal sm:text-4xl">
			{$_('guide.title')}
		</h1>
		<p class="mt-2 text-charcoal/60">{$_('guide.subtitle')}</p>
	</div>

	<!-- Global Progress -->
	<div class="mb-8 rounded-2xl border border-charcoal/8 bg-white p-4 shadow-sm sm:p-5">
		<div class="mb-3 flex items-center justify-between">
			<div>
				<h2 class="font-medium text-charcoal">{$_('guide.overallProgress')}</h2>
				<p class="text-sm text-charcoal/50">
					{$completedSteps} {$_('common.of')} {totalSteps} {$_('guide.completed')}
				</p>
			</div>
			<button
				onclick={handleReset}
				class="flex items-center gap-1.5 rounded-lg border border-charcoal/10 px-3 py-1.5 text-xs font-medium text-charcoal/50 transition-colors hover:border-red-300 hover:text-red-500"
			>
				<RotateCcw size={12} />
				{$_('guide.resetProgress')}
			</button>
		</div>
		<ProgressBar percent={$globalProgress} size="lg" showLabel={false} />
		<div class="mt-2 text-end text-sm font-semibold text-terracotta">
			{$globalProgress}%
		</div>
	</div>

	<!-- Legal Note -->
	<div class="mb-8">
		<LegalNote />
	</div>

	<!-- Phase Cards -->
	<div class="space-y-4">
		{#each phases as phase, i}
			<PhaseCard {phase} phaseIndex={i + 1} initiallyExpanded={i === 0} />
		{/each}
	</div>

	<!-- Bottom Legal Note -->
	<div class="mt-8">
		<LegalNote />
	</div>
</div>

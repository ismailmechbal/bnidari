<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { appLocale } from '$lib/stores/locale';
	import { checklist, getPhaseProgress } from '$lib/stores/checklist';
	import type { Phase } from '$lib/data/steps';
	import ProgressBar from './ProgressBar.svelte';
	import StepItem from './StepItem.svelte';
	import { ChevronDown } from 'lucide-svelte';

	interface Props {
		phase: Phase;
		phaseIndex: number;
		initiallyExpanded?: boolean;
	}

	let { phase, phaseIndex, initiallyExpanded = false }: Props = $props();

	let expanded = $state(false);

	$effect(() => {
		if (initiallyExpanded) expanded = true;
	});
	let progress = $derived(getPhaseProgress($checklist, phase.id));
	let title = $derived($appLocale === 'ar' ? phase.titleAr : phase.titleFr);

	function toggle() {
		expanded = !expanded;
	}
</script>

<div class="phase-card overflow-hidden rounded-2xl border border-charcoal/8 bg-white shadow-sm transition-shadow hover:shadow-md">
	<!-- Phase Header -->
	<button
		onclick={toggle}
		class="flex w-full items-center gap-4 p-4 text-start sm:p-5"
	>
		<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-terracotta/10 text-2xl sm:h-14 sm:w-14">
			{phase.emoji}
		</div>
		<div class="min-w-0 flex-1">
			<div class="flex items-center gap-2">
				<span class="text-xs font-bold tracking-wider text-terracotta uppercase">
					{$_('common.phase')} {phaseIndex}
				</span>
				<span class="text-xs text-charcoal/40">
					{progress.completed}/{progress.total} {$_('guide.completed')}
				</span>
			</div>
			<h3 class="font-serif mt-0.5 text-lg font-bold text-charcoal sm:text-xl">
				{title}
			</h3>
			<div class="mt-2">
				<ProgressBar percent={progress.percent} size="sm" showLabel={false} />
			</div>
		</div>
		<span class="flex-shrink-0 text-charcoal/30 transition-transform {expanded ? 'rotate-180' : ''}">
			<ChevronDown size={20} />
		</span>
	</button>

	<!-- Steps -->
	{#if expanded}
		<div class="border-t border-charcoal/5" transition:slide={{ duration: 250 }}>
			{#each phase.steps as step, i}
				<StepItem
					{step}
					index={i + 1}
					status={checklist.getStatus($checklist, step.id)}
				/>
			{/each}
		</div>
	{/if}
</div>

<script module lang="ts">
	import { slide } from 'svelte/transition';
</script>

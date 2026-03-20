<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { appLocale } from '$lib/stores/locale';
	import { checklist } from '$lib/stores/checklist';
	import type { Step, StepStatus } from '$lib/data/steps';
	import {
		ChevronDown,
		ChevronLeft,
		FileText,
		Clock,
		Coins,
		Lightbulb,
		ExternalLink,
		Tag
	} from 'lucide-svelte';

	interface Props {
		step: Step;
		index: number;
		status: StepStatus;
	}

	let { step, index, status }: Props = $props();

	let expanded = $state(false);

	function toggleExpand() {
		expanded = !expanded;
	}

	function handleCheck() {
		checklist.toggleStep(step.id);
	}

	function handleSkip(e: MouseEvent) {
		e.preventDefault();
		checklist.skipStep(step.id);
	}

	let title = $derived($appLocale === 'ar' ? step.titleAr : step.titleFr);
	let description = $derived($appLocale === 'ar' ? step.descriptionAr : step.descriptionFr);
	let documents = $derived($appLocale === 'ar' ? step.documentsAr : step.documents);
	let duration = $derived(
		$appLocale === 'ar' ? step.estimatedDurationAr : step.estimatedDuration
	);
	let cost = $derived($appLocale === 'ar' ? step.estimatedCostAr : step.estimatedCost);
	let tips = $derived($appLocale === 'ar' ? step.tipsAr : step.tips);
</script>

<div
	class="group border-b border-charcoal/5 last:border-b-0 transition-colors {status === 'done'
		? 'bg-forest/5'
		: status === 'skipped'
			? 'bg-charcoal/5'
			: ''}"
>
	<div class="flex items-start gap-3 px-4 py-3 sm:px-5">
		<!-- Checkbox -->
		<button
			onclick={handleCheck}
			oncontextmenu={handleSkip}
			class="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-colors {status ===
			'done'
				? 'border-forest bg-forest text-white'
				: status === 'skipped'
					? 'border-charcoal/30 bg-charcoal/10 text-charcoal/50'
					: 'border-charcoal/20 hover:border-terracotta'}"
			aria-label={status === 'done' ? $_('common.done') : $_('common.pending')}
			title={$_('common.done')}
		>
			{#if status === 'done'}
				<svg class="h-3 w-3" viewBox="0 0 12 12" fill="none">
					<path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			{:else if status === 'skipped'}
				<svg class="h-3 w-3" viewBox="0 0 12 12" fill="none">
					<path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
				</svg>
			{/if}
		</button>

		<!-- Content -->
		<div class="min-w-0 flex-1">
			<button
				onclick={toggleExpand}
				class="flex w-full items-center justify-between text-start"
			>
				<div class="flex items-center gap-2">
					<span class="text-xs font-medium text-charcoal/40">{index}.</span>
					<h4
						class="text-sm font-medium sm:text-base {status === 'done'
							? 'text-charcoal/50 line-through'
							: status === 'skipped'
								? 'text-charcoal/40 line-through'
								: 'text-charcoal'}"
					>
						{title}
					</h4>
					{#if step.isOptional}
						<span class="rounded bg-charcoal/10 px-1.5 py-0.5 text-[10px] font-medium text-charcoal/50">
							{$_('guide.optional')}
						</span>
					{/if}
				</div>
				<span class="ms-2 flex-shrink-0 text-charcoal/30 transition-transform {expanded ? 'rotate-180' : ''}">
					{#if $appLocale === 'ar' && !expanded}
						<ChevronLeft size={16} />
					{:else}
						<ChevronDown size={16} />
					{/if}
				</span>
			</button>

			{#if expanded}
				<div class="mt-3 space-y-3 pb-1 text-sm text-charcoal/70" transition:slide={{ duration: 200 }}>
					<p>{description}</p>

					{#if documents && documents.length > 0}
						<div class="rounded-lg bg-cream-dark/50 p-3">
							<div class="mb-1.5 flex items-center gap-1.5 font-medium text-charcoal">
								<FileText size={14} />
								<span>{$_('guide.documents')}</span>
							</div>
							<ul class="space-y-1 ps-5">
								{#each documents as doc}
									<li class="list-disc">{doc}</li>
								{/each}
							</ul>
						</div>
					{/if}

					<div class="flex flex-wrap gap-3">
						{#if duration}
							<div class="flex items-center gap-1.5 rounded-md bg-cream-dark/50 px-2.5 py-1.5">
								<Clock size={13} class="text-terracotta" />
								<span class="text-xs">{duration}</span>
							</div>
						{/if}
						{#if cost}
							<div class="flex items-center gap-1.5 rounded-md bg-cream-dark/50 px-2.5 py-1.5">
								<Coins size={13} class="text-terracotta" />
								<span class="text-xs">{cost}</span>
							</div>
						{/if}
					</div>

					{#if tips}
						<div class="rounded-lg border border-terracotta/20 bg-terracotta/5 p-3">
							<div class="mb-1 flex items-center gap-1.5 font-medium text-terracotta">
								<Lightbulb size={14} />
								<span>{$_('guide.tips')}</span>
							</div>
							<p class="text-charcoal/60">{tips}</p>
						</div>
					{/if}

					{#if step.links && step.links.length > 0}
						<div class="flex flex-wrap gap-2">
							{#each step.links as link}
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1 rounded-md bg-forest/10 px-2.5 py-1.5 text-xs font-medium text-forest transition-colors hover:bg-forest/20"
								>
									<ExternalLink size={12} />
									{link.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

<script module lang="ts">
	import { slide } from 'svelte/transition';
</script>

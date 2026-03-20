<script lang="ts">
	interface Props {
		percent: number;
		size?: 'sm' | 'md' | 'lg';
		showLabel?: boolean;
		label?: string;
	}

	let { percent, size = 'md', showLabel = true, label = '' }: Props = $props();

	const heights: Record<string, string> = {
		sm: 'h-1.5',
		md: 'h-2.5',
		lg: 'h-4'
	};
</script>

<div class="w-full">
	{#if showLabel}
		<div class="mb-1 flex items-center justify-between text-sm">
			{#if label}
				<span class="text-charcoal/70">{label}</span>
			{/if}
			<span class="font-medium text-terracotta">{percent}%</span>
		</div>
	{/if}
	<div class="w-full overflow-hidden rounded-full bg-charcoal/10 {heights[size]}">
		<div
			class="rounded-full bg-gradient-to-r from-terracotta to-terracotta-light transition-all duration-500 ease-out {heights[size]}"
			style="width: {percent}%"
			role="progressbar"
			aria-valuenow={percent}
			aria-valuemin={0}
			aria-valuemax={100}
		></div>
	</div>
</div>

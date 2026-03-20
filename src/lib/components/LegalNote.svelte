<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { TriangleAlert } from 'lucide-svelte';
</script>

<div class="rounded-xl border border-terracotta/20 bg-terracotta/5 p-4 sm:p-5">
	<div class="flex items-start gap-3">
		<div class="flex-shrink-0 text-terracotta">
			<TriangleAlert size={20} />
		</div>
		<div class="text-sm text-charcoal/70">
			<p class="font-medium text-charcoal">{$_('about.disclaimerTitle')}</p>
			<p class="mt-1">{$_('about.disclaimerContent')}</p>
		</div>
	</div>
</div>

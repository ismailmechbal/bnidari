<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { Heart } from 'lucide-svelte';
</script>

<footer class="no-print mt-16 border-t border-charcoal/5 bg-white">
	<div class="mx-auto max-w-5xl px-4 py-8 sm:px-6">
		<div class="flex flex-col items-center gap-4 text-center">
			<div class="flex items-center gap-1.5 text-sm text-charcoal/50">
				<span>{$_('footer.madeWith')}</span>
				<Heart size={14} class="fill-terracotta text-terracotta" />
				<span>{$_('footer.forMorocco')} 🇲🇦</span>
			</div>
			<p class="text-xs text-charcoal/40">{$_('footer.disclaimer')}</p>
		</div>
	</div>
</footer>

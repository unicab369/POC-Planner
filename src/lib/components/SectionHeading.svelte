<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
	}

	let { title, subtitle }: Props = $props();
</script>

<div class="section-heading">
	<div class="accent-line"></div>
	<h2>{title}</h2>
	{#if subtitle}
		<p class="subtitle">{subtitle}</p>
	{/if}
</div>

<style>
	.section-heading {
		text-align: center;
		margin-bottom: var(--space-3xl);
	}

	.accent-line {
		width: 60px;
		height: 4px;
		background: var(--color-accent);
		border-radius: 2px;
		margin: 0 auto var(--space-lg);
	}

	h2 {
		font-size: 2.5rem;
		color: var(--color-primary);
		margin-bottom: var(--space-sm);
	}

	.subtitle {
		font-size: 1.125rem;
		color: var(--color-text-secondary);
		max-width: 600px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		h2 {
			font-size: 1.875rem;
		}
	}
</style>

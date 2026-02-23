<script lang="ts">
	import type { DayItinerary } from '$lib/data/trip';
	import { formatDate, getDayOfWeek } from '$lib/utils/format';
	import ActivityItem from './ActivityItem.svelte';
	import ScrollReveal from './ScrollReveal.svelte';

	interface Props {
		day: DayItinerary;
	}

	let { day }: Props = $props();
</script>

<div class="day-card">
	<div class="image-header" style="background-image: url('{day.heroImage}')">
		<div class="image-overlay"></div>
		<div class="day-info">
			<span class="day-number">Day {day.dayNumber}</span>
			<h3>{day.city}</h3>
			<p class="day-meta">{getDayOfWeek(day.date)} · {formatDate(day.date)}</p>
		</div>
	</div>
	<div class="day-body">
		<p class="day-summary">{day.summary}</p>
		<div class="items">
			{#each day.items as item, i}
				<ScrollReveal delay={i * 60}>
					<ActivityItem {item} />
				</ScrollReveal>
			{/each}
		</div>
	</div>
</div>

<style>
	.day-card {
		background: var(--color-surface);
		border-radius: var(--radius-lg);
		overflow: hidden;
		box-shadow: var(--shadow-md);
	}

	.image-header {
		position: relative;
		height: 200px;
		background-size: cover;
		background-position: center;
		display: flex;
		align-items: flex-end;
	}

	.image-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			transparent 30%,
			rgba(26, 31, 54, 0.8) 100%
		);
	}

	.day-info {
		position: relative;
		z-index: 1;
		padding: var(--space-lg) var(--space-xl);
		color: white;
	}

	.day-number {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 2px;
		opacity: 0.8;
	}

	h3 {
		font-size: 1.75rem;
		margin: 4px 0;
	}

	.day-meta {
		font-size: 0.875rem;
		opacity: 0.8;
	}

	.day-body {
		padding: var(--space-xl);
	}

	.day-summary {
		font-size: 1rem;
		color: var(--color-text-secondary);
		margin-bottom: var(--space-xl);
		line-height: 1.6;
	}

	.items {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}
</style>

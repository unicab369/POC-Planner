<script lang="ts">
	import type { DayItinerary } from '$lib/data/trip';
	import { formatDate } from '$lib/utils/format';

	interface Props {
		day: DayItinerary;
	}

	let { day }: Props = $props();
</script>

<article class="card">
	<div class="image" style="background-image: url('{day.heroImage}')">
		<div class="image-overlay"></div>
		<span class="badge">Day {day.dayNumber}</span>
	</div>
	<div class="body">
		<p class="date">{formatDate(day.date)}</p>
		<h3 class="city">{day.city}</h3>
		<p class="summary">{day.summary}</p>
		<div class="item-count">
			{day.items.length} {day.items.length === 1 ? 'activity' : 'activities'}
		</div>
	</div>
</article>

<style>
	.card {
		background: var(--color-surface);
		border-radius: var(--radius-lg);
		overflow: hidden;
		box-shadow: var(--shadow-sm);
		transition: transform var(--transition-base), box-shadow var(--transition-base);
		cursor: pointer;
	}

	.card:hover {
		transform: translateY(-6px);
		box-shadow: var(--shadow-lg);
	}

	.image {
		position: relative;
		height: 180px;
		background-size: cover;
		background-position: center;
	}

	.image-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			transparent 40%,
			rgba(26, 31, 54, 0.4) 100%
		);
	}

	.badge {
		position: absolute;
		top: var(--space-md);
		left: var(--space-md);
		background: var(--color-accent);
		color: white;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 500;
		padding: 4px 10px;
		border-radius: 20px;
		letter-spacing: 0.5px;
	}

	.body {
		padding: var(--space-lg);
	}

	.date {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--color-text-light);
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-bottom: var(--space-xs);
	}

	.city {
		font-size: 1.375rem;
		color: var(--color-primary);
		margin-bottom: var(--space-sm);
	}

	.summary {
		font-size: 0.9rem;
		color: var(--color-text-secondary);
		line-height: 1.5;
		margin-bottom: var(--space-md);
	}

	.item-count {
		font-size: 0.8rem;
		color: var(--color-text-light);
		font-family: var(--font-mono);
	}
</style>

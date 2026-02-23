<script lang="ts">
	import type { TripData } from '$lib/data/trip';
	import { formatCurrency } from '$lib/utils/format';

	interface Props {
		trip: TripData;
	}

	let { trip }: Props = $props();

	let totalActivities = $derived(trip.days.reduce((sum, day) => sum + day.items.length, 0));
	let cities = $derived([...new Set(trip.days.map(d => d.city))]);
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-brand">
				<h3>{trip.name}</h3>
				<p>{trip.days.length} days · {cities.length} cities · {totalActivities} activities</p>
			</div>
			<div class="footer-cities">
				{#each cities as city}
					<span class="city-tag">{city}</span>
				{/each}
			</div>
		</div>
		<div class="footer-bottom">
			<p>Built with SvelteKit</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-primary);
		color: white;
		padding: var(--space-3xl) 0 var(--space-xl);
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: start;
		margin-bottom: var(--space-2xl);
		gap: var(--space-xl);
	}

	.footer-brand h3 {
		font-size: 1.5rem;
		margin-bottom: var(--space-sm);
	}

	.footer-brand p {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.9rem;
	}

	.footer-cities {
		display: flex;
		gap: var(--space-sm);
		flex-wrap: wrap;
	}

	.city-tag {
		background: rgba(255, 255, 255, 0.1);
		padding: 4px 12px;
		border-radius: 20px;
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.8);
	}

	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding-top: var(--space-lg);
		text-align: center;
	}

	.footer-bottom p {
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.4);
	}

	@media (max-width: 768px) {
		.footer-content {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.footer-cities {
			justify-content: center;
		}
	}
</style>

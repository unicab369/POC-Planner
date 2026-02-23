<script lang="ts">
	import type { DayItinerary } from '$lib/data/trip';
	import SectionHeading from './SectionHeading.svelte';
	import OverviewCard from './OverviewCard.svelte';
	import ScrollReveal from './ScrollReveal.svelte';

	interface Props {
		days: DayItinerary[];
	}

	let { days }: Props = $props();
</script>

<section id="overview" class="trip-overview">
	<div class="container">
		<ScrollReveal>
			<SectionHeading
				title="Trip Overview"
				subtitle="10 days across Japan's most iconic destinations"
			/>
		</ScrollReveal>
		<div class="grid">
			{#each days as day, i}
				<ScrollReveal delay={i * 80}>
					<OverviewCard {day} />
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<style>
	.trip-overview {
		padding: var(--space-4xl) 0;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-xl);
	}

	@media (max-width: 1024px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>

<script lang="ts">
	import type { TripLeg } from '$lib/data/trip';
	import SectionHeading from './SectionHeading.svelte';
	import SummaryLeg from './SummaryLeg.svelte';
	import ScrollReveal from './ScrollReveal.svelte';

	interface Props {
		legs: TripLeg[];
	}

	let { legs }: Props = $props();
</script>

<section class="trip-summary">
	<div class="container">
		<ScrollReveal>
			<SectionHeading
				title="Journey Route"
				subtitle="Your path through Japan"
			/>
		</ScrollReveal>
		<ScrollReveal delay={200}>
			<div class="route-wrapper">
				<div class="route">
					{#each legs as leg, i}
						<SummaryLeg {leg} isLast={i === legs.length - 1} />
					{/each}
				</div>
			</div>
		</ScrollReveal>
	</div>
</section>

<style>
	.trip-summary {
		padding: var(--space-4xl) 0;
		background: var(--color-surface);
	}

	.route-wrapper {
		overflow-x: auto;
		padding: var(--space-xl) 0;
		-webkit-overflow-scrolling: touch;
	}

	.route {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: max-content;
		padding: var(--space-lg) var(--space-xl);
	}

	@media (max-width: 768px) {
		.route {
			flex-direction: column;
			min-width: auto;
		}
	}
</style>

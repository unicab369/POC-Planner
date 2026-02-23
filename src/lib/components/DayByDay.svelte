<script lang="ts">
	import type { DayItinerary } from '$lib/data/trip';
	import SectionHeading from './SectionHeading.svelte';
	import DayCard from './DayCard.svelte';
	import ScrollReveal from './ScrollReveal.svelte';

	interface Props {
		days: DayItinerary[];
	}

	let { days }: Props = $props();
</script>

<section class="day-by-day">
	<div class="container">
		<ScrollReveal>
			<SectionHeading
				title="Day by Day"
				subtitle="Your complete itinerary with every detail"
			/>
		</ScrollReveal>
		<div class="timeline-wrapper">
			<div class="timeline-line"></div>
			<div class="days">
				{#each days as day, i}
					<div class="day-row">
						<div class="timeline-dot">
							<div class="dot">{day.dayNumber}</div>
						</div>
						<div class="day-content">
							<ScrollReveal delay={100}>
								<DayCard {day} />
							</ScrollReveal>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.day-by-day {
		padding: var(--space-4xl) 0;
	}

	.timeline-wrapper {
		position: relative;
	}

	.timeline-line {
		position: absolute;
		left: 23px;
		top: 0;
		bottom: 0;
		width: 2px;
		background: var(--color-border);
	}

	.days {
		display: flex;
		flex-direction: column;
		gap: var(--space-3xl);
	}

	.day-row {
		display: flex;
		gap: var(--space-xl);
	}

	.timeline-dot {
		flex-shrink: 0;
		width: 48px;
		display: flex;
		justify-content: center;
		padding-top: var(--space-lg);
	}

	.dot {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: var(--color-primary);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		font-weight: 600;
		position: relative;
		z-index: 1;
		box-shadow: 0 0 0 4px var(--color-surface-alt);
	}

	.day-content {
		flex: 1;
		min-width: 0;
	}

	@media (max-width: 768px) {
		.timeline-line {
			display: none;
		}

		.timeline-dot {
			display: none;
		}

		.day-row {
			gap: 0;
		}
	}
</style>

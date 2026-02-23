<script lang="ts">
	import type { TripData } from '$lib/data/trip';
	import { formatDateRange } from '$lib/utils/format';
	import Icon from './Icon.svelte';

	interface Props {
		trip: TripData;
	}

	let { trip }: Props = $props();
</script>

<section class="hero" style="background-image: url('{trip.coverImage}')">
	<div class="overlay"></div>
	<div class="content">
		<p class="label">Your Upcoming Trip</p>
		<h1>{trip.name}</h1>
		<div class="meta">
			<span class="meta-item">
				<Icon name="calendar" size={18} />
				{formatDateRange(trip.startDate, trip.endDate)}
			</span>
			<span class="meta-item">
				<Icon name="users" size={18} />
				{trip.travelers.join(' & ')}
			</span>
			<span class="meta-item">
				<Icon name="map-pin" size={18} />
				{trip.days.length} Days · {new Set(trip.days.map(d => d.city)).size} Cities
			</span>
		</div>
	</div>
	<button class="scroll-hint" onclick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}>
		<Icon name="chevron" size={28} />
	</button>
</section>

<style>
	.hero {
		position: relative;
		height: 100vh;
		min-height: 600px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-size: cover;
		background-position: center;
		color: white;
		overflow: hidden;
	}

	.overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			rgba(26, 31, 54, 0.3) 0%,
			rgba(26, 31, 54, 0.6) 50%,
			rgba(26, 31, 54, 0.85) 100%
		);
	}

	.content {
		position: relative;
		z-index: 1;
		text-align: center;
		padding: var(--space-xl);
	}

	.label {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 3px;
		opacity: 0.8;
		margin-bottom: var(--space-md);
	}

	h1 {
		font-size: 4.5rem;
		font-weight: 700;
		letter-spacing: -1px;
		margin-bottom: var(--space-xl);
		text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
	}

	.meta {
		display: flex;
		gap: var(--space-xl);
		justify-content: center;
		flex-wrap: wrap;
	}

	.meta-item {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: 1.05rem;
		opacity: 0.9;
	}

	.scroll-hint {
		position: absolute;
		bottom: 2rem;
		z-index: 1;
		background: none;
		border: none;
		color: white;
		cursor: pointer;
		opacity: 0.7;
		animation: bounce 2s ease-in-out infinite;
		transition: opacity var(--transition-fast);
	}

	.scroll-hint:hover {
		opacity: 1;
	}

	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-12px);
		}
		60% {
			transform: translateY(-6px);
		}
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2.75rem;
		}

		.meta {
			flex-direction: column;
			align-items: center;
			gap: var(--space-md);
		}
	}
</style>

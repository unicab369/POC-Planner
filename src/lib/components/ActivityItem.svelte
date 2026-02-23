<script lang="ts">
	import type { ItineraryItem } from '$lib/data/trip';
	import { formatCurrency, formatTime } from '$lib/utils/format';
	import Icon from './Icon.svelte';

	interface Props {
		item: ItineraryItem;
	}

	let { item }: Props = $props();

	const typeColors: Record<string, string> = {
		flight: 'var(--color-flight)',
		hotel: 'var(--color-hotel)',
		car: 'var(--color-car)',
		activity: 'var(--color-activity)',
		food: 'var(--color-food)',
		sightseeing: 'var(--color-sightseeing)',
		transit: 'var(--color-transit)'
	};

	const typeLabels: Record<string, string> = {
		flight: 'Flight',
		hotel: 'Hotel',
		car: 'Car Rental',
		activity: 'Activity',
		food: 'Food & Drink',
		sightseeing: 'Sightseeing',
		transit: 'Transit'
	};

	function getIconName(type: string): 'flight' | 'hotel' | 'car' | 'activity' | 'food' | 'sightseeing' | 'transit' {
		return type as 'flight' | 'hotel' | 'car' | 'activity' | 'food' | 'sightseeing' | 'transit';
	}
</script>

<div class="activity-item" style="--type-color: {typeColors[item.type]}">
	<div class="type-indicator"></div>
	<div class="content">
		<div class="header">
			<div class="icon-badge">
				<Icon name={getIconName(item.type)} size={16} />
			</div>
			<span class="type-label">{typeLabels[item.type]}</span>
		</div>

		{#if item.type === 'flight'}
			<h4 class="title">{item.airline} {item.flightNumber}</h4>
			<div class="details">
				<div class="flight-route">
					<span class="airport">{item.departureAirport}</span>
					<span class="arrow">→</span>
					<span class="airport">{item.arrivalAirport}</span>
				</div>
				<div class="meta-row">
					<span><Icon name="clock" size={14} /> {item.duration}</span>
					<span class="confirmation">
						<code>{item.confirmation}</code>
					</span>
				</div>
				<div class="times">
					<span>Departs {formatTime(item.departureTime)}</span>
					<span>Arrives {formatTime(item.arrivalTime)}</span>
				</div>
			</div>
		{:else if item.type === 'hotel'}
			<h4 class="title">{item.name}</h4>
			<div class="details">
				<p class="location"><Icon name="map-pin" size={14} /> {item.address}</p>
				<div class="meta-row">
					<span>{formatCurrency(item.nightlyRate)}/night</span>
				</div>
			</div>
			{#if item.image}
				<div class="item-image" style="background-image: url('{item.image}')"></div>
			{/if}
		{:else if item.type === 'car'}
			<h4 class="title">{item.company} — {item.vehicle}</h4>
			<div class="details">
				<div class="meta-row">
					<span>{formatCurrency(item.dailyRate)}/day</span>
					<span class="confirmation">
						<code>{item.confirmation}</code>
					</span>
				</div>
			</div>
		{:else}
			<h4 class="title">{item.name}</h4>
			<div class="details">
				<p class="location"><Icon name="map-pin" size={14} /> {item.location}</p>
				<div class="meta-row">
					<span><Icon name="clock" size={14} /> {item.time} · {item.duration}</span>
					{#if item.cost !== undefined}
						<span class="cost">{formatCurrency(item.cost)}</span>
					{/if}
				</div>
				{#if item.description}
					<p class="description">{item.description}</p>
				{/if}
			</div>
			{#if item.image}
				<div class="item-image" style="background-image: url('{item.image}')"></div>
			{/if}
		{/if}
	</div>
</div>

<style>
	.activity-item {
		display: flex;
		gap: 0;
		background: var(--color-surface);
		border-radius: var(--radius-md);
		overflow: hidden;
		box-shadow: var(--shadow-sm);
		transition: box-shadow var(--transition-base), transform var(--transition-base);
	}

	.activity-item:hover {
		box-shadow: var(--shadow-md);
		transform: translateX(4px);
	}

	.type-indicator {
		width: 4px;
		flex-shrink: 0;
		background: var(--type-color);
	}

	.content {
		flex: 1;
		padding: var(--space-md) var(--space-lg);
		min-width: 0;
	}

	.header {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		margin-bottom: var(--space-sm);
	}

	.icon-badge {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
		border-radius: 6px;
		background: color-mix(in srgb, var(--type-color) 12%, transparent);
		color: var(--type-color);
	}

	.type-label {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--type-color);
		font-weight: 500;
	}

	.title {
		font-family: var(--font-body);
		font-size: 1.05rem;
		font-weight: 600;
		color: var(--color-primary);
		margin-bottom: var(--space-sm);
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.flight-route {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--color-primary);
	}

	.airport {
		font-family: var(--font-mono);
	}

	.arrow {
		color: var(--color-text-light);
	}

	.location {
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: 0.85rem;
		color: var(--color-text-secondary);
	}

	.meta-row {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		font-size: 0.8rem;
		color: var(--color-text-secondary);
		flex-wrap: wrap;
	}

	.meta-row span {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.confirmation code {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		background: var(--color-surface-alt);
		padding: 2px 8px;
		border-radius: 4px;
		color: var(--color-primary);
	}

	.cost {
		font-family: var(--font-mono);
		font-weight: 500;
		color: var(--color-primary);
	}

	.times {
		display: flex;
		gap: var(--space-lg);
		font-size: 0.8rem;
		color: var(--color-text-secondary);
	}

	.description {
		font-size: 0.85rem;
		color: var(--color-text-secondary);
		line-height: 1.5;
		margin-top: 4px;
	}

	.item-image {
		height: 120px;
		margin-top: var(--space-md);
		border-radius: var(--radius-sm);
		background-size: cover;
		background-position: center;
	}
</style>

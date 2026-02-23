<script lang="ts">
	import type { TripLeg } from '$lib/data/trip';
	import Icon from './Icon.svelte';

	interface Props {
		leg: TripLeg;
		isLast?: boolean;
	}

	let { leg, isLast = false }: Props = $props();

	let methodIcon = $derived(leg.method as 'flight' | 'car' | 'train');
</script>

<div class="leg" class:last={isLast}>
	<div class="city-dot">
		<div class="dot"></div>
		<span class="city-name">{leg.from}</span>
	</div>
	<div class="connector">
		<div class="line"></div>
		<div class="transport">
			<Icon name={methodIcon} size={16} />
			<span class="duration">{leg.duration}</span>
		</div>
	</div>
	{#if isLast}
		<div class="city-dot">
			<div class="dot"></div>
			<span class="city-name">{leg.to}</span>
		</div>
	{/if}
</div>

<style>
	.leg {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.city-dot {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-sm);
	}

	.dot {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--color-accent);
		border: 3px solid white;
		box-shadow: 0 0 0 2px var(--color-accent);
	}

	.city-name {
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--color-primary);
		white-space: nowrap;
	}

	.connector {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		padding: 0 var(--space-md);
		min-width: 100px;
	}

	.line {
		width: 100%;
		height: 2px;
		border-top: 2px dashed var(--color-text-light);
	}

	.transport {
		display: flex;
		align-items: center;
		gap: 4px;
		color: var(--color-text-secondary);
	}

	.duration {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--color-text-light);
	}

	@media (max-width: 768px) {
		.leg {
			flex-direction: column;
		}

		.connector {
			padding: var(--space-sm) 0;
			min-width: auto;
			flex-direction: row;
		}

		.line {
			width: 2px;
			height: 30px;
			border-top: none;
			border-left: 2px dashed var(--color-text-light);
		}
	}
</style>

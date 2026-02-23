<script lang="ts">
	interface Props {
		dayCount: number;
	}

	let { dayCount }: Props = $props();
</script>

<div class="timeline">
	{#each Array(dayCount) as _, i}
		<div class="dot-wrapper">
			<div class="dot">{i + 1}</div>
			{#if i < dayCount - 1}
				<div class="line"></div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.timeline {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 48px;
	}

	.dot-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
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
		font-size: 0.75rem;
		font-weight: 600;
		flex-shrink: 0;
		z-index: 1;
	}

	.line {
		width: 2px;
		flex: 1;
		background: var(--color-border);
		min-height: 40px;
	}

	@media (max-width: 768px) {
		.timeline {
			display: none;
		}
	}
</style>

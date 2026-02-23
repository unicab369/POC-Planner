<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		delay?: number;
		children: Snippet;
	}

	let { delay = 0, children }: Props = $props();
	let visible = $state(false);
	let element: HTMLDivElement;

	$effect(() => {
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		observer.observe(element);

		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	class="scroll-reveal"
	class:visible
	style="transition-delay: {delay}ms"
>
	{@render children()}
</div>

<style>
	.scroll-reveal {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.6s ease, transform 0.6s ease;
	}

	.scroll-reveal.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>

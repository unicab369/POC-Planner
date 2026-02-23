<script lang="ts">
	interface Props {
		name: 'flight' | 'hotel' | 'car' | 'activity' | 'food' | 'sightseeing' | 'transit' | 'train' | 'chevron' | 'calendar' | 'clock' | 'map-pin' | 'users';
		size?: number;
	}

	let { name, size = 20 }: Props = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class="icon icon-{name}"
	aria-hidden="true"
>
	{#if name === 'flight'}
		<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.4-.1.9.3 1.1L11 12l-2 3H6l-2 2 4-1 4-1 2-2 4.3 7.3c.2.4.7.6 1.1.3l.5-.3c.4-.2.5-.7.3-1.1z" />
	{:else if name === 'hotel'}
		<path d="M3 21V7a2 2 0 012-2h6v16" />
		<path d="M21 21V11a2 2 0 00-2-2h-4v12" />
		<path d="M7 9h2" />
		<path d="M7 13h2" />
		<path d="M7 17h2" />
		<path d="M15 13h2" />
		<path d="M15 17h2" />
	{:else if name === 'car'}
		<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A1 1 0 0014.5 6h-5a1 1 0 00-.8.4L6 10l-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2" />
		<circle cx="7" cy="17" r="2" />
		<circle cx="17" cy="17" r="2" />
	{:else if name === 'activity'}
		<circle cx="12" cy="12" r="10" />
		<path d="M12 6v6l4 2" />
	{:else if name === 'food'}
		<path d="M18 8h1a4 4 0 010 8h-1" />
		<path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
		<line x1="6" y1="1" x2="6" y2="4" />
		<line x1="10" y1="1" x2="10" y2="4" />
		<line x1="14" y1="1" x2="14" y2="4" />
	{:else if name === 'sightseeing'}
		<circle cx="12" cy="12" r="10" />
		<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
	{:else if name === 'transit'}
		<rect x="4" y="3" width="16" height="16" rx="2" />
		<path d="M4 11h16" />
		<path d="M12 3v8" />
		<path d="M8 19l-2 3" />
		<path d="M16 19l2 3" />
	{:else if name === 'train'}
		<rect x="4" y="3" width="16" height="16" rx="2" />
		<path d="M4 11h16" />
		<path d="M12 3v8" />
		<path d="M8 19l-2 3" />
		<path d="M16 19l2 3" />
	{:else if name === 'chevron'}
		<polyline points="6 9 12 15 18 9" />
	{:else if name === 'calendar'}
		<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
		<line x1="16" y1="2" x2="16" y2="6" />
		<line x1="8" y1="2" x2="8" y2="6" />
		<line x1="3" y1="10" x2="21" y2="10" />
	{:else if name === 'clock'}
		<circle cx="12" cy="12" r="10" />
		<polyline points="12 6 12 12 16 14" />
	{:else if name === 'map-pin'}
		<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
		<circle cx="12" cy="10" r="3" />
	{:else if name === 'users'}
		<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
		<circle cx="9" cy="7" r="4" />
		<path d="M23 21v-2a4 4 0 00-3-3.87" />
		<path d="M16 3.13a4 4 0 010 7.75" />
	{/if}
</svg>

<style>
	.icon {
		display: inline-block;
		vertical-align: middle;
		flex-shrink: 0;
	}
</style>

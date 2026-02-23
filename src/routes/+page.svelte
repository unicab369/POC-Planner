<script lang="ts">
	import { tripData } from '$lib/data/trip';
	import Hero from '$lib/components/Hero.svelte';
	import TripOverview from '$lib/components/TripOverview.svelte';
	import TripSummary from '$lib/components/TripSummary.svelte';
	import DayByDay from '$lib/components/DayByDay.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>{tripData.name} — Trip Planner</title>
	<meta name="description" content="A 10-day adventure through Japan" />
</svelte:head>

<main>
	<Hero trip={tripData} />
	<TripOverview days={tripData.days} />
	<TripSummary legs={tripData.legs} />
	<DayByDay days={tripData.days} />
	<Footer trip={tripData} />
</main>

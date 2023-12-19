<script>
	import { Text, Timeline } from '@svelteuidev/core';
	import { Button } from '@svelteuidev/core';
	// import { typewriter } from '@svelteuidev/motion';

	const events_day1 = [
		{ event: 'Inauguration', time: '9:00 A.M - 10:00 A.M' },
		{ event: 'Speaker Session 1', time: '10:00-11:00' },
		{ event: 'Panel Discussion', time: '11:30-1:00' },
		{ event: 'Quiz Prelims', time: '1:30-3:00' },
		{ event: 'Speaker Session 2', time: '2:30-3:30' },
		{ event: 'Speaker Session 3', time: '3:45-4:45' }
	];
	const events_day2 = [
		{ event: 'Drone Session/Treasure Hunt', time: '10:00' },
		{ event: 'Keynote Address', time: '12:00-1:30' },
		{ event: 'Speaker Session 1', time: '2:30-3:30' },
		{ event: 'Quiz Final', time: '3:30-5:00' },
		{ event: 'Closing Ceremony', time: '5:00' }
	];
	const val = '3px solid #339af0';
	let events = events_day1;
	let buttonBorder1 = {
		border: '3px solid #339af0'
	};
	let buttonBorder2 = {};
	function handleclick1(event) {
		buttonBorder1.border = val;
		delete buttonBorder2.border;
		events = events_day1;
	}
	function handleclick2(event) {
		buttonBorder2.border = val;
		delete buttonBorder1.border;
		events = events_day2;
	}
</script>

<section class="home">
	<div class="section-title">
		<div class="title-pre">Agenda</div>
		<div class="title-body">Event Schedule</div>
	</div>
	<div class="button-container">
		<Button
			on:click={handleclick1}
			override={buttonBorder1}
			variant="subtle"
			radius="md"
			size="xl"
            id="bt1"
			uppercase
			ripple>Day 1</Button
		>
		<Button
			on:click={handleclick2}
			override={buttonBorder2}
			variant="subtle"
			radius="md"
			size="xl"
            id="bt2"
			uppercase
			ripple>Day 2</Button
		>
	</div>
	<Timeline active={100} lineWidth={4} bulletSize={30}>
		{#each events as event, index (event.event)}
			<Timeline.Item>
				<div class="title">{event.event}</div>
				<div class="timings">{event.time}</div>
			</Timeline.Item>
		{/each}
	</Timeline>
</section>

<style>
	section {
		overflow: hidden;
		display: block;
	}
	.home {
		background-color: white;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
		z-index: 1;
	}
	.title {
		font-size: 3rem;
		font-family: 'Ostrich-Sans-black', Courier, monospace;
	}
	.section-title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 30px;
	}
	.title-pre {
		color: #0048ff;
		font-weight: 800;
		font-size: 1.5rem;
		line-height: 1.2;
		font-variant: normal;
		font-family: 'Ostrich-Sans-black', Courier, monospace;

		@media screen and (max-width: 576px) {
			font-size: 10vw;
		}
	}
	.title-body {
		color: black;
		font-weight: 800;
		font-size: 5rem;
		line-height: 1.2;
		font-variant: normal;
		font-family: 'Ostrich-Sans-bold', Courier, monospace;

		@media screen and (max-width: 576px) {
			font-size: 10vw;
		}
	}
	.button-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		gap: 50px;
		font-family: 'Ostrich-Sans-bold', Courier, monospace;
		font-size: 2rem;
		margin-bottom: 30px;
	}
</style>

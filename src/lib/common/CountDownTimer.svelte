<script>
	import { onDestroy } from 'svelte';

	export let eventDate;

	let timeLeft = calculateTimeLeft();

	function calculateTimeLeft() {
		const now = new Date().getTime();
		const eventTime = new Date(eventDate);
		// console.log(eventTime);
		const difference = eventTime - now;

		if (difference <= 0) {
			// Event has already occurred
			return { days: 0, hours: 0, minutes: 0 };
		}

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		return { days, hours, minutes, seconds };
	}

	function updateTimer() {
		timeLeft = calculateTimeLeft();
	}

	const interval = setInterval(updateTimer, 1000);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<section data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
	<ul id="countdown">
		<li>
			<span class="days timenumbers">{timeLeft.days}</span>
			<p class="timeRefDays timedescription">days</p>
		</li>
		<li>
			<span class="hours timenumbers">{timeLeft.hours}</span>
			<p class="timeRefHours timedescription">hours</p>
		</li>
		<li>
			<span class="minutes timenumbers">{timeLeft.minutes}</span>
			<p class="timeRefMinutes timedescription">minutes</p>
		</li>
		<li>
			<span class="minutes timenumbers">{timeLeft.seconds}</span>
			<p class="timeRefMinutes timedescription">seconds</p>
		</li>
	</ul>
</section>

<style>
	section {
		color: #fff;
		margin: 0 auto;
		line-height: 24px;
		font-size: 1rem;
		font-weight: 700;
	}
	section ul {
		list-style-type: none;
		margin-bottom: 0;
		margin-left: 0;
		@media screen and (max-width:479px) {
			margin: 0 auto;
		}
	}
	section ul li {
		display: inline-block;
		margin-right: 3.5rem;
		width: 6rem;
		padding-top: 10px;
		background-color: rgba(33, 37, 41, 0.3);
		@media screen and (max-width: 479px) {
			margin-right: 0.5rem;
			width: 4rem;
		}
	}
	section .timenumbers {
		display: block;
		font-size: 4rem;
		font-weight: 400;
		line-height: 3rem;
		margin: 0 auto;
		text-align: center;
		@media screen and (max-width:479px) {
			font-size: 3rem;
			line-height: 2rem;
		}
	}
	section p.timedescription {
		font-size: 1.5rem;
		font-variant: small-caps;
		line-height: 3rem;
		margin: 0 auto;
		text-align: center;
		position: relative;
		top: 0px;
		@media screen and (max-width:479px) {
			font-size: 2rem;
		}
	}
</style>

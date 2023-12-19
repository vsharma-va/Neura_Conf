<script>
	import CountDownTimer from '../components/CountDownTimer.svelte';
    const eventDate = "2024-01-15T00:00:00";
</script>

<section class="home">
	<div class="hero-container" style="margin-left: 20px;">
		<div class="hero-text">
			<span class="landing-title" data-aos="fade-up" data-aos-duration="800" >Industry Conclave 2.0</span>
			<span class="text-loc" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" > Bengaluru, India | January 2024</span>
			<span class="title-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"> Coming Soon!!</span>
		</div>
		<CountDownTimer {eventDate}/>
	</div>
</section>

<style>
	section {
		overflow: hidden;
		display: block;
	}
	.home {
		background-image: url(./landing_img.webp);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		min-height: 100vh;
		max-height: 100vh;
        box-shadow:  inset 0px 4px 20px 10px #060f4e;
	}
	.hero-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.hero-text {
		color: white;
		margin-top: 24rem;
		display: flex;
		flex: 1;
		flex-direction: column;
		flex-wrap: wrap;
	}
	.landing-title {
		text-align: center;
		font-weight: 800;
		font-size: 6.5vw;
		display: inline-block;
		line-height: 1;
	}
	.title-full {
		text-align: center;
		font-weight: 400;
		font-size: 1.5vw;
		flex-wrap: wrap;
		display: inline-block;
		line-height: 1;
        margin-bottom: 15px;
	}
	.text-loc {
		text-align: center;
		font-weight: 500;
		font-size: 2vw;
		flex-wrap: wrap;
		display: inline-block;
		line-height: 1;
		margin: 15px;
	}
</style>

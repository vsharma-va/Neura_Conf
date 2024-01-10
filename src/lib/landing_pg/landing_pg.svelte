<script>
	import { signIn } from '@auth/sveltekit/client';
	import displayImageBackground from '../../assets/images/landing_img.webp';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const eventDate = '2024-01-15T00:00:00';
</script>

<div class="w-full h-fit bg-gradient-to-r from-[#000428] to-[#000046]">
	<div class="w-full h-fit flex overflow-hidden">
		<img src="{displayImageBackground}" alt="photo background"
				 class="h-full w-full object-cover inline-block absolute top-0 bottom-0">
	</div>
	<div class="w-full h-[100vh] flex flex-col items-center justify-center px-2 sm:px-5 md:px-5 gap-3 md:gap-5">
		<p
			class="text-[3.4rem] sm:text-[4.5em] md:text-[5.5rem] font-normal tracking-wider text-center primary-font text-on-primary-hover-color leading-[1.1] sm:leading-[1.15]"
			data-aos="fade-up"
			data-aos-duration="800"
		>
			<span
				class="gradient-text">Industry Conclave 2.0</span>
		</p>

		<p
			class="text-[2.4rem] sm:text-[3em] md:text-[4rem] font-normal text-center tracking-wide primary-font text-gray-300 leading-[1.1] sm:leading-[1.15]"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="100"
		>
			MIT Bengaluru, India<br>12th-13th<br>January 2024
		</p>

		<span class="title-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
				<div class="flex flex-col w-full h-fit items-center justify-center mt-3">
					<button
						class="text-[1.4rem] sm:text-[2.4em] md:text-[2.4rem] px-4 py-3 border-2 tracking-wide border-gray-300 text-gray-300 rounded-[2rem] text-blue primary-font hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,72,225,0.3)] transition-all duration-300 ease-in-out"
						on:click={async () => { !$page.data.session ? await signIn("google", {
                          callbackUrl: "/auth/?signedIn",
                      }) : goto("/auth") }}
					>
						{#if $page.data.session}
							Go To Dashboard
						{:else}
								Register Now
						{/if}
					</button>
				</div>
			</span>
		<!--		<CountDownTimer {eventDate} />-->
	</div>
</div>

<!--<section class="home">-->
<!--	<div class="hero-container" style="margin-left: 20px;">-->
<!--		<div class="hero-text">-->
<!--			<span class="landing-title" data-aos="fade-up" data-aos-duration="800">Industry Conclave 2.0</span>-->
<!--			<span class="text-loc" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"> Bengaluru, India | January 2024</span>-->
<!--			<span class="title-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">-->
<!--				<div class="flex flex-col w-full h-fit items-center justify-center">-->
<!--					<button-->
<!--						class="px-4 py-3 border-2 border-[#0048ff] bg-blend-multiply rounded-[2rem] text-blue primary-font hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,72,225,0.3)] transition-all duration-300 ease-in-out"-->
<!--						on:click={async () => { await signIn("google", {-->
<!--                          callbackUrl: "/auth/?signedIn",-->
<!--                      }); }}-->
<!--					>-->
<!--						Register Now-->
<!--					</button>-->
<!--				</div>-->
<!--			</span>-->
<!--		</div>-->
<!--		<CountDownTimer {eventDate} />-->
<!--	</div>-->
<!--</section>-->

<style>
    section {
        overflow: hidden;
        display: block;
    }

    .home {
        background-image: url(../../assets/images/landing_img.webp);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        min-height: 100vh;
        max-height: 100vh;
        box-shadow: inset 0px 4px 20px 10px #060f4e;
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

    .frame {
        position: relative;
    }

    .frame::before {
        content: '';
        position: absolute;
        top: 0;
        left: 19%;
        width: 63%;
        height: 100%;
        z-index: 2;
        box-sizing: border-box;
        border: 2px solid #0048ff;
        transform: translate(10px, -10px);
        transition: transform 250ms;
    }

    .frame:hover::before {
        transform: translate(5px, -5px);
    }
</style>

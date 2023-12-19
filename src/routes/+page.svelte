<script>
	import LandingPg from '../components/landing_pg.svelte';
	import ContentWImg from '../components/contentWImg.svelte';
	import TimelineComponent from '../components/timelineComponent.svelte';

	import imgSrc from '$lib/images/intro_img.jpg';
	const para_pre = "What's going on?";
	const para_header = "AI CONFLUENCE-WHERE MIND MEETS MACHINES";
	const para_body = "Whether you're a student with a groundbreaking idea or an industry professional seeking fresh perspectives, the conclave is your space for meaningful connections. Building on the success of the previous conclave, we will once again ignite discussions and collaborations that rejuvenate research and development prospects. we aim to foster better understanding, communication. For our students and researchers, the conclave offers a unique opportunity to gain a deeper industry perspective. Through engaging with seasoned professionals, participating in discussions, and hands-on experiences, they can better prepare themselves for the challenges and opportunities of the corporate world";

</script>

<LandingPg />

<ContentWImg {para_pre} {para_header} {para_body} {imgSrc}/>

<TimelineComponent/>
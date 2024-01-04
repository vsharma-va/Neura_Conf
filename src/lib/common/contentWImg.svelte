<script>
    export let para_body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque at saepe commodi perspiciatis excepturi assumenda modi quia et repellendus porro quidem, ea libero quam autem officia veniam laborum placeat! Minus?";
	export let para_header="Header",para_pre;
	export let imgSrc;
</script>

<section class="home">
	<div class="row">
		<div class="para" data-aos="fade-up" data-aos-duration="1000">
			<p class="text">
				{#if para_pre != undefined}
				<span class="header-pre">{para_pre}</span><br />
				{/if}
				<span class="header-main">{para_header}</span><br />
				{para_body}
			</p>
		</div>
		<div class="img-container frame" data-aos="zoom-in-up" data-aos-duration="1000">
			<img src={imgSrc} alt="Conference_img" class="image" />
		</div>
	</div>
</section>

<style>
	section {
		overflow: hidden;
		display: block;
	}
	.home {
		background: rgb(6, 15, 78);
		background: linear-gradient(180deg, rgba(6, 15, 78, 1) 0%, rgba(0, 0, 0, 1) 30%);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
		z-index: 1;
	}
	.row {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-top: 150px;
		margin-bottom: 50px;
	}
	.img-container {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.para {
		flex: 1;
		flex-wrap: wrap;
	}
	p.text {
		flex: 1;
		flex-wrap: wrap;
		font-size: 1.5rem;
		padding: 10px;
		margin-left: 180px;
		margin-right: -80px;
		text-align: justify;
		font-variant: normal;
		font-family: 'Ostrich-Sans-rounded', Courier, monospace;
		font-weight: 600;
		color: white;
	}
	.header-main {
		color: white;
		font-weight: 800;
		font-size: 3rem;
		line-height: 1.2;
		font-variant: normal;
		text-align: left;

		@media screen and (max-width: 576px) {
			font-size: 10vw;
		}
	}
	.header-pre {
		color: #0048ff;
		font-weight: 800;
		font-size: 1.5rem;
		line-height: 1.2;
		font-variant: normal;
		font-family: 'Ostrich-Sans-rounded', Courier, monospace;

		@media screen and (max-width: 576px) {
			font-size: 10vw;
		}
	}
	.image {
		width: 30vw;
		height: auto;
		display: block;
		z-index: 4;
		transition: transform 150ms;
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

	.image:hover {
		transform: translate(2px,-2px);
	}
</style>

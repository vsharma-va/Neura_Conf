<script>
	import logo3 from '../../assets/images/logo3.png';
	import { signIn } from '@auth/sveltekit/client';

	let isactive = false;
	function menuToggle(event) {
		isactive = !isactive;
	}
</script>

<header>
	<nav class="navbar navbar-dark fixed-top">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">
				<span class="logo"><img src={logo3} alt="Neura logo" class="logo-img" /></span>
				<span class="logo-text">Neura AI</span>
			</a>
			<button
				on:click={menuToggle}
				class="hamburger hamburger--collapse"
				class:is-active={isactive}
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasDarkNavbar"
				aria-controls="offcanvasDarkNavbar"
				aria-label="Toggle navigation"
			>
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>

			<div
				class="offcanvas offcanvas-end text-bg-dark"
				tabindex="-1"
				id="offcanvasDarkNavbar"
				aria-labelledby="offcanvasDarkNavbarLabel"
			>
				<div class="offcanvas-header">
					<div class="flex items-center justify-center gap-x-2">
						<span><img src={logo3} alt="Neura logo" class="logo-img" /></span>
						<h1 class="offcanvas-title text-5xl" id="offcanvasDarkNavbarLabel">Neura AI</h1>
					</div>
					<button
						type="button"
						class="hamburger hamburger--collapse"
						on:click={menuToggle}
						class:is-active={isactive}
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					>
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
					</button>
				</div>
				<div class="offcanvas-body">
					<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
						<li class="nav-item">
							<a class="nav-link active text-3xl" aria-current="page" href="/">Home</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link text-3xl"
								on:click={() => async () => {
									await signIn('google', {
										callbackUrl: '/auth/?signedIn'
									});
								}}>Sign Up</a
							>
						</li>
						<!-- <li class="nav-item dropdown text-3xl">
							<a
								class="nav-link dropdown-toggle"
								href=""
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<ul class="dropdown-menu dropdown-menu-dark">
								<li><a class="dropdown-item text-2xl" href="">Action</a></li>
								<li><a class="dropdown-item text-2xl" href="">Another action</a></li>
								<li>
									<hr class="dropdown-divider" />
								</li>
								<li><a class="dropdown-item text-2xl" href="">Something else here</a></li>
							</ul>
						</li> -->
					</ul>
				</div>
			</div>
		</div>
	</nav>
</header>

<style>
	.logo-text {
		display: inline;
		font-size: 2.5rem;
		font-family: 'Ostrich-Sans-bold', Courier, monospace;
	}
	.navbar {
		background-color: transparent;
	}
	.navbar-brand {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}
	.navbar-nav .nav-item {
		padding: 0rem 0.75rem;
		font-weight: 500;
	}

	.navbar-nav .nav-item {
		padding: 0rem 0.75rem;
		font-weight: 500;
	}

	.navbar-brand {
		margin-left: 30px;
		@media screen and (max-width:479px) {
			margin-left: 0;
		}
	}

	.offcanvas-header {
		background-color: #212529;
		color: white;
	}
	.offcanvas-body {
		background-color: #212529;
	}

	/* Hamburger menu styles */
	.hamburger {
		font: inherit;
		display: inline-block;
		overflow: visible;
		margin: 0;
		padding: 15px;
		cursor: pointer;
		transition-timing-function: linear;
		transition-duration: 0.15s;
		transition-property: opacity, filter;
		text-transform: none;
		color: inherit;
		border: 0;
		background-color: transparent;
	}
	.hamburger.is-active:hover,
	.hamburger:hover {
		opacity: 0.7;
	}

	.hamburger.is-active .hamburger-inner,
	.hamburger.is-active .hamburger-inner:after,
	.hamburger.is-active .hamburger-inner:before {
		background-color: white;
	}

	.hamburger-box {
		position: relative;
		display: inline-block;
		width: 40px;
		height: 24px;
	}

	.hamburger-inner {
		top: 50%;
		display: block;
		margin-top: -2px;
	}

	.hamburger-inner,
	.hamburger-inner:after,
	.hamburger-inner:before {
		position: absolute;
		width: 40px;
		height: 4px;
		transition-timing-function: ease;
		transition-duration: 0.15s;
		transition-property: transform;
		border-radius: 4px;
		background-color: white;
	}

	.hamburger-inner:after,
	.hamburger-inner:before {
		display: block;
		content: '';
	}

	.hamburger-inner:before {
		top: -10px;
	}

	.hamburger-inner:after {
		bottom: -10px;
	}
	.hamburger-box {
		position: relative;
		display: inline-block;
		width: 40px;
		height: 24px;
	}
	.hamburger-inner {
		top: 50%;
		display: block;
		margin-top: -2px;
	}
	.hamburger--collapse .hamburger-inner {
		top: auto;
		bottom: 0;
		transition-delay: 0.13s;
		transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
		transition-duration: 0.13s;
	}

	.hamburger--collapse .hamburger-inner:after {
		top: -20px;
		transition:
			top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
			opacity 0.1s linear;
	}

	.hamburger--collapse .hamburger-inner:before {
		transition:
			top 0.12s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
			transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}

	.hamburger--collapse.is-active .hamburger-inner {
		transition-delay: 0.22s;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		transform: translate3d(0, -10px, 0) rotate(-45deg);
	}

	.hamburger--collapse.is-active .hamburger-inner:after {
		top: 0;
		transition:
			top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
			opacity 0.1s linear 0.22s;
		opacity: 0;
	}

	.hamburger--collapse.is-active .hamburger-inner:before {
		top: 0;
		transition:
			top 0.1s cubic-bezier(0.33333, 0, 0.66667, 0.33333) 0.16s,
			transform 0.13s cubic-bezier(0.215, 0.61, 0.355, 1) 0.25s;
		transform: rotate(-90deg);
	}
	.logo-img {
		object-fit: cover;
		width: 3.5rem;
		height: 3.5rem;
	}
</style>

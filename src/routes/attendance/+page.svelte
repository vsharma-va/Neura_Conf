<script>
	import { enhance } from '$app/forms';

	export let form;

	let eventType = '';
	let userIdentifier = '';
	let successDiv;
	let error = { eventTypeError: '', identifierError: '' };

	function submitForm({ formData }) {
		if (!error.eventTypeError && !error.identifierError && eventType && userIdentifier) {
			console.log('HELLo');
			formData.set('userCode', userIdentifier);
			formData.set('eventType', eventType);
		}
	}

	function handleEvents() {
		if (!eventType) {
			error.eventTypeError = 'Please select an event from the drop down box';
		} else {
			error.eventTypeError = '';
		}
	}

	function handleIdentifier() {
		if (!/^\d+$/.test(userIdentifier)) {
			error.identifierError = 'Please enter integers only';
		} else if (userIdentifier.length !== 6) {
			error.identifierError = 'The code is exactly 6 digits long';
		} else {
			error.identifierError = '';
		}
	}

	$: if (form) {
		if (form.internalFormStatus === 'error' || form.internalFormStatus === 'success' || form.status === 'error') {
			setTimeout(() => {
				form = undefined;
			}, 3000);
		}
	}
</script>

<div class="w-full h-[100vh] bg-gradient-to-r from-[#000428] to-[#000046] px-3">
	<div class="flex flex-col w-full h-full items-center justify-center">
		<form action="?/lookup" class="relative" method="post" use:enhance={(event) => {
			submitForm(event);}}>
			<p class="primary-font text-gray-300 gradient-text text-[5rem]">Attendance</p>
			<label class="relative">
				<p class={eventType ? " above" : " center"}>Event Type</p>
				<!--			<input-->
				<!--				bind:value={branch}-->
				<!--				type="text"-->
				<!--				placeholder="Branch"-->
				<!--				on:input={handleBranch}-->
				<!--			/>-->
				<select on:change={(event) => {eventType = event.currentTarget.value; handleEvents()}}
								class="w-full p-3 bg-transparent text-gray-500 outline-[#070e4f] border-[#070e4f] accent-[#070e4f]">
					<option value="" disabled selected>Event Type</option>
					<option value="INAUGURATION">INAUGURATION</option>
					<option value="BHARGAVA">Mr. BHARGAVA RAMANA</option>
					<option value="PANEL">PANEL DISCUSSION</option>
					<option value="QUIZ">QUIZ PRELIMS</option>
					<option value="RAMIT">Mr. RAMIT SAWHNEY</option>
					<option value="VENKATESWARAN">Mr. VENKATESWARAN KRISHNAN</option>
					<option value="TREASURE">TREASURE HUNT</option>
					<option value="SARAN">Mr. SARNA JOSEPH</option>
					<option value="ABHIJIT">Mr. ABHIJIT CHINCHOLKAR</option>
					<option value="QUIZ FINAL">QUIZ FINAL</option>
					<option value="CLOSING">CLOSING CEREMONY</option>
				</select>
				{#if error.eventTypeError}
					<p class="error">{error.eventTypeError}</p>
				{/if}
				<!--				<p class="primary-font gradient-text absolute -top-7 left-0 text-">Mark Attendance</p>-->
			</label>
			<label>
				<p class={userIdentifier ? " above" : " center"}>User Identifier</p>
				<input bind:value={userIdentifier} type="text" placeholder="User Identifier Code (6 digits)"
							 on:input={handleIdentifier} />
				{#if error.identifierError}
					<p class="error">{error.identifierError}</p>
				{/if}
			</label>
			<button type="submit" class="submitBtn">
				Submit
			</button>
		</form>
		{#if form}
			{form}
			{#if form.status === "success"}
				<form action="?/markAttendance" method="post" use:enhance={(event) => {
			submitForm(event);}}>
					<div
						class="flex flex-col py-4 px-3 bg-[#000044] rounded-[2rem] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[45%] xl:w-[35%] z-[5] absolute left-5 top-[28%] md:left-[18%] lg:left-[25%] xl:left-[32%] gap-2">
						<div class="flex flex-col items-center justify-center">
							<input type="text" value="{eventType}" class="hidden">
							<p class="primary-font text-center text-2xl lg:text-4xl text-white mb-2 gradient-text-opp">Confirm Details</p>
						</div>
						<div class="flex flex-col">
							<p class="primary-font text-white text-left text-4xl">Name</p>
							<p class="primary-font gradient-text text-left text-4xl">{form.user.name}</p>
						</div>
						<div class="flex flex-col">
							<p class="primary-font text-left text-4xl text-white">Branch</p>
							<p class="primary-font gradient-text text-left text-4xl">{form.user.branch}</p>
						</div>
						<div class="flex flex-col">
							<p class="primary-font text-left text-4xl text-white">Year</p>
							<p class="primary-font gradient-text text-left text-4xl">{form.user.year}</p>
						</div>
						<div class="flex flex-col gap-2 w-full">
							<button type="submit" class="submitBtn primary-font">
								Mark Attendance
							</button>
							<button type="button" on:click={() => {form = undefined;}} class="submitBtn primary-font">
								Decline
							</button>
						</div>
					</div>
				</form>
			{:else if form.status === "error"}
				<div
					class="flex flex-col w-fit z-[5] gap-2 gradient-text-opp"
					data-aos="fade-up"
					data-aos-duration="300">
					<p class="primary-font text-4xl text-white">{form.statement}</p>
				</div>
			{/if}
			{#if form.internalFormStatus === "success"}
				<div
					class="flex flex-col w-fit z-[5] gap-2 gradient-text-opp"
					data-aos="fade-up"
					data-aos-duration="300">
					<p class="primary-font text-4xl text-white">SUCCESS</p>
				</div>
			{:else if form.internalFormStatus === "error"}
				<div
					class="flex flex-col w-fit z-[5] gap-2 gradient-text-opp"
					data-aos="fade-up"
					data-aos-duration="300">
					<p class="primary-font text-4xl text-white">{form.statement}</p>
				</div>
			{/if}
		{/if}
	</div>
</div>

<style>
    .authContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        padding: 24px;
        /* transition: all 0.9s ease-in-out; */
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    form,
    .options {
        width: 400px;
        max-width: 100%;
        margin: 0 auto;
    }

    form input {
        width: 100%;
    }

    h1 {
        text-align: center;
        font-size: 3rem;
    }

    form label {
        position: relative;
        border: 1px solid navy;
        border-radius: 5px;
    }

    form input {
        border: none;
        background: transparent;
        color: white;
        padding: 14px;
    }

    form input:focus {
        border: none;
        outline: none;
    }

    form label:focus-within {
        border-color: blue;
    }

    form button {
        background: navy;
        color: white;
        border: none;
        padding: 14px 0;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        display: grid;
        place-items: center;
    }

    form button:hover {
        background: blue;
    }

    .above,
    .center {
        position: absolute;
        transform: translateY(-50%);
        pointer-events: none;
        color: white;
        border-radius: 4px;
        padding: 0 6px;
        font-size: 0.8rem;
        transition: all 200ms ease;
    }

    .above {
        top: 0;
        left: 24px;
        background: navy;
        border: 1px solid blue;
        font-size: 1.1rem;
    }

    .center {
        top: 50%;
        left: 6px;
        border: 1px solid transparent;
        opacity: 0;
    }

    .error {
        color: coral;
        font-size: 0.9rem;
        text-align: center;
    }

    .options {
        padding: 14px 0;
        overflow: hidden;
        font-size: 0.9rem;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .options > p {
        position: relative;
        text-align: center;
        width: fit-content;
        font-size: 1.5rem;
        margin: 0 auto;
        padding: 0 8px;
    }

    .options > p::after,
    .options > p::before {
        position: absolute;
        content: "";
        top: 50%;
        transform: translateY(-50%);
        width: 100vw;
        height: 1.5px;
        background: white;
    }

    .options > p::after {
        right: 100%;
    }

    .options > p::before {
        left: 100%;
    }

    .options div {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
        font-size: 1.1rem;
    }

    .options div p:last-of-type {
        color: cyan;
        cursor: pointer;
    }

    .loadingSpinner {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
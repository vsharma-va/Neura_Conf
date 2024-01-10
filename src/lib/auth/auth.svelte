<script>
	// import { authHandlers } from "../store/store";
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { enhance } from '$app/forms';

	export let form;

	let email = '';
	let branch = undefined;
	let year = '';
	let error = { emailError: '', branchError: '', yearError: '' };
	let register = true;
	let authenticating = false;
	let name = '';

	// async function handleAuthenticate() {
	//     if (authenticating) {
	//         return;
	//     }
	//     if (!email || !password || (register && !confirmPass)) {
	//         error = true;
	//         return;
	//     }
	//     authenticating = true;

	//     try {
	//         if (!register) {
	//             await authHandlers.login(email, password);
	//         } else {
	//             await authHandlers.signup(email, password);
	//         }
	//     } catch (err) {
	//         console.log("There was an auth error", err);
	//         error = true;
	//         authenticating = false;
	//     }
	// }

	function handleRegister() {
		register = !register;
	}

	function handleLearner() {
		if (!email.includes('@learner.manipal.edu')) {
			error.emailError = 'Input a valid learner ID';
		} else {
			error.emailError = '';
		}
	}

	function handleBranch() {
		console.log(branch);
		if (!branch) {
			error.branchError = 'Enter a valid branch';
		} else {
			error.branchError = '';
		}
	}

	function handleYear() {
		if (!/^\d+$/.test(year)) {
			error.yearError = 'Enter a valid year';
		} else if (year > 3) {
			error.yearError = 'Enter a valid year';
		} else {
			error.yearError = '';
		}
	}

	function handleName() {
		if (!name) {
			error.nameError = 'Can\'t leave this empty';
		} else {
			error.nameError = '';
		}
	}

	function submitForm({ formData }) {
		console.log(error);
		if ((!error.emailError && !error.yearError && !error.branchError) && (email && branch && year && name)) {
			formData.set('learnerEmailId', email);
			formData.set('branch', branch);
			formData.set('year', year);
			formData.set('name', name);
			authenticating = true;
			console.log('EHLLO');
		}
	}
</script>

<div class="flex flex-col w-full h-fit px-3 md:px-5">
	<form action="?/register" method="post" use:enhance={(event) => {
			submitForm(event);}}>
		<p class="primary-font text-gray-300 gradient-text text-[5rem]">{register ? "Register" : "Login"}</p>
		{#if form}
			{#if form.inputError}
				<p class="error">The information you have entered is not correct</p>
			{/if}
		{/if}
		<label class="">
			<p class={email ? " above" : " center"}>Learner Id</p>
			<input bind:value={email} type="email" placeholder="Learner Id" on:input={handleLearner} />
			{#if error.emailError}
				<p class="error">{error.emailError}</p>
			{/if}
		</label>
		<label class="">
			<p class={name ? " above" : " center"}>Full Name</p>
			<input bind:value={name} type="text" placeholder="Full Name" on:input={handleName} />
			{#if error.nameError}
				<p class="error">{error.nameError}</p>
			{/if}
		</label>
		<label>
			<p class={branch ? " above" : " center"}>Branch</p>
			<!--			<input-->
			<!--				bind:value={branch}-->
			<!--				type="text"-->
			<!--				placeholder="Branch"-->
			<!--				on:input={handleBranch}-->
			<!--			/>-->
			<select on:change={(event) => {branch = event.currentTarget.value; handleBranch()}}
							class="w-full p-3 bg-transparent text-gray-500 outline-[#070e4f] border-[#070e4f] accent-[#070e4f]">
				<option value="" disabled selected>Branch</option>
				<option value="CSE CORE">CSE CORE</option>
				<option value="CSE AI">CSE AI</option>
				<option value="CSE CYBER">CSE CYBER</option>
				<option value="DATA SCIENCE">DATA SCIENCE</option>
				<option value="IT">IT</option>
				<option value="ECE">ECE</option>
				<option value="ENC">ENC</option>
			</select>
			{#if error.branchError}
				<p class="error">{error.branchError}</p>
			{/if}
		</label>
		<label>
			<p class={year ? " above" : " center"}>Year</p>
			<select on:change={(event) => {year = event.currentTarget.value; handleYear();}}
							class="w-full p-3 bg-transparent text-gray-500 outline-[#070e4f] border-[#070e4f] accent-[#070e4f]">
				<option value="" disabled selected>Current Year</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
			</select>
			{#if error.yearError}
				<p class="error">{error.yearError}</p>
			{/if}
		</label>
		<!--{#if register}-->
		<!--    <label>-->
		<!--        <p class={confirmPass ? " above" : " center"}>-->
		<!--            Confirm Password-->
		<!--        </p>-->
		<!--        <input-->
		<!--            bind:value={confirmPass}-->
		<!--            type="password"-->
		<!--            placeholder="Confirm Password"-->
		<!--        />-->
		<!--    </label>-->
		<!--{/if}-->

		<button type="submit" class="submitBtn">
			{#if authenticating}
				<i class="fa-solid fa-spinner loadingSpinner" />
			{:else}
				Submit
			{/if}
		</button>
	</form>
	<!--	<div class="options">-->
	<!--		<p>Or</p>-->
	<!--		{#if register}-->
	<!--			<div>-->
	<!--				<p>Already have an account?</p>-->
	<!--				<p on:click={handleRegister} on:keydown={() => {}}>Login</p>-->
	<!--			</div>-->
	<!--		{:else}-->
	<!--			<div>-->
	<!--				<p>Don't have an account?</p>-->
	<!--				<p on:click={handleRegister} on:keydown={() => {}}>Register</p>-->
	<!--			</div>-->
	<!--		{/if}-->
	<!--	</div>-->
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
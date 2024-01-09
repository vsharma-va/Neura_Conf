<script>
	export let data;
</script>

<div class="flex flex-col w-full h-[100vh] bg-gradient-to-r from-[#000428] to-[#000046] items-center justify-center">
	<div class="flex flex-col w-full h-full gap-[105px]">
		<div class="flex flex-col w-full h-fit items-center justify-start pt-[80px]">
			<p
				class="text-[2.4rem] sm:text-[3em] md:text-[4rem] font-normal text-center primary-font text-on-primary-hover-color leading-[1.1] sm:leading-[1.15] text-white">
				Thank you for registering for <br><span
				class="gradient-text">Industry Conclave 2.0</span>
			</p>
		</div>
		<div class="flex flex-col w-full h-full items-center justify-start gap-7">
			<p
				class="text-[1.8rem] sm:text-[2.4em] md:text-[3.4rem] font-normal text-center primary-font text-white leading-[1.1] sm:leading-[1.15]">
				Your Unique Identifier Code is <br><span
				class="gradient-text">{data.userFound.user_code}</span>
			</p>
			<p
				class="text-[1.2rem] sm:text-[1.8em] md:text-[2.4rem] font-normal text-center primary-font text-gray-400 leading-[1.1] sm:leading-[1.15]">
				Please show this code at the entrance of an event for registration purposes <br>
				This code is valid for all events
			</p>
		</div>
	</div>
</div>

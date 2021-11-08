<script>
	import Login from './Components/Users/Login.svelte'
	import Todos from './Components/Todo/Todos.svelte'
	let isLoggedIn = false


	const submitHandler = () =>{
		isLoggedIn = true
	}
</script>


<style>
	main {
		width: 100%;
	}
</style>


<main>
	{#if isLoggedIn}
		<Todos />
	{:else}
		<Login on:submit={submitHandler}/>
	{/if}

</main>

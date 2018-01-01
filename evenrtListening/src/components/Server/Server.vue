<template>
	<li 
			class = 'list-group-item'
		 	style="cursor:pointer"
		 	v-on:click = "serverSelected">

		 Server # {{ Server.id }}

		
	</li>
</template>

<script>
	import {serveBus} from "../../main.js";
	export default{
		props: ['Server'],
		methods: {
			serverSelected(){
				serveBus.$emit("serverSelected",this.Server);
			}
		}
	}
</script>
<style>

</style>

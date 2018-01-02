<template>
	<div class='row'>
		<appQuote v-for= "(quote,index) in quotes" v-on:click.native="deleteQuote(index)">{{ quote}} </appQuote>
	</div>
</template>

<script>
	import quote from "./quote.vue"
	export default{
		props: ['quotes'],
		components: {
			appQuote: quote
		},
		methods:{
			deleteQuote(index){
				this.quotes.splice(index,1);
			}
		}
	}
</script>

<style>

</style>
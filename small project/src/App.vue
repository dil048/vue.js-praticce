<template>
    <div class="container">
    	<appHeader v-bind:quoteCount = "quotes.length" v-bind:maxQuotes = "maxQuotes"></appHeader>
    	<appnewQuote v-on:quoteAdded = "newQuoteEvent"></appnewQuote>
    	<appQuoteGrid v-bind:quotes = "quotes" ></appQuoteGrid>
    	<div class = "row">
    		<div class="col-sm-12 text-center">
    			<div class = "alert alert-info">
    				Info:Click to delete
    			</div>
    		</div>
    	</div>
    </div>
</template>

<script>
	import quoteGrid from "./component/quoteGrid.vue";
	import newQuote from "./component/newQuote.vue";
	import header from "./component/header.vue"
    export default {
        data(){
        	return{
        		quotes: ['testing quote','asdf'],
        		maxQuotes: 10
        	};
        },
        components: {
        	appnewQuote:newQuote,
        	appQuoteGrid:quoteGrid,
        	appHeader:header
        },
        methods:{
        	newQuoteEvent(quote){
        		if(this.quotes.length<10){
        			this.quotes.push(quote);
        		}else{
        			alert("Please delete quotes");
        		}
        	}
        }
    }
</script>

<style>
</style>

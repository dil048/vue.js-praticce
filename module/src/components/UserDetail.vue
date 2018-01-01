<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ currentVal }} </p>
        <p>{{userAge}}</p>
        <button v-on:click = "resetName"> Reset Name</button>
        <button v-on:click = "resetFn()"> Reset Name</button>
    </div>
</template>

<script>
	import {eb} from '../main.js'
	export default{
		props: ['myName','resetFn','userAge'],
		computed:{
			currentVal:function() {
					return this.myName;
			}
		},
		methods: {
			resetName(){
				this.$emit("resetName",  "Dian");
			}
		},
		created(){
			eb.$on("ageChange",(data)=>{
				this.userAge = data;
			})
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

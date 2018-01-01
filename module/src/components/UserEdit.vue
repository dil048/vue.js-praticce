<template>
    <div class="component">
    	<div>
	        <h3>You may edit the User here</h3>
	        <p>Edit me!</p>
	        <p>{{userAge}}</p>
	        <button v-on:click = "changeAge">change age</button>
        </div>
    </div>
</template>

<script>
import {eb} from '../main.js'
export default{
	props:['userAge'],
	methods:{
		changeAge(){
			this.userAge = 30;
			eb.$emit("ageChange",this.userAge);
		}
	}
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>

<template>
	<div>
	 <div class="form-group">
	 	<label for="firstName">First Name</label>
	 	<input
	 		type="text"
	 		id="firstName"
	 		class="form-control"
	 		v-bind:value = "firstName"
	 		v-on:input = "nameChange(true)">
	 	</div>
	 	<div class="form-group">
	 		<label for="lastName">Last Name</label>
	 			<input
	 				type="text"
	 				id="lastName"
	 				class="form-control"
	 				v-bind:value = "lastName"
	 				v-on:input = "nameChange(false)">
	 	</div>	
	 </div>
</template>
	
<script>
	export default{
		props:['value'],
		methods:{
			nameChange(firstChange){
				var name = '';
				if(firstChange){
					name = event.target.value + ' ' + this.lastName;
				}else{
					name = this.firstName + ' '  + event.target.value;
				}
				this.value = name;
				this.$emit('input', name);
			}
		},
		computed:{
			firstName(){
				return this.value.split(" ")[0];				
			},
			lastName(){
				return this.value.split(" ")[1];
			}
		}
	}
</script>


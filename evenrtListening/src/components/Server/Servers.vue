<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-Server
            	v-for = "server in Servers"
            	:Server = "server">
            </app-Server>
        </ul>
    </div>
</template>

<script>
	import server from './Server.vue'
	export default{
		data(){
			return{
				Servers: [
					{id: 1, status: 'Normal'},
					{id: 2, status: 'Critical'},
					{id: 3, status: 'Unknown'},
					{id: 4, status: 'What'},
					{id: 5, status: 'Normal'},
				]
			};
		},
		components:{
			appServer : server
		},
	}
</script>

<style>

</style>

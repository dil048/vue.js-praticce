<template>
    <div class="col-xs-12 col-sm-2">
        <p v-if = "!server">Server Details are currently not updated</p>
        <p v-else> Server # {{ server.id}} and Server status: {{server.status}}</p>
        <hr>
        <div >
          <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
            <b-dropdown-item>xsaxAction</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Something else here...</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
        </div>
        <button v-on:click = "ChangeToNormal"> Change</button>
    </div>



</template>

<script>
  import {serveBus} from "../../main.js";
  export default{
    data:function() {
      return{
        server:null
      }
    },
    methods: {
      ChangeToNormal(){
        this.server.status = 'Normal';
      }
    },
    created() {
      serveBus.$on("serverSelected",(server) => {
        this.server = server;
      });
    }
  }
</script>

<style>

</style>

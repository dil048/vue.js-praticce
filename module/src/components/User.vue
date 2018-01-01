<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome {{ name }}!</p>
        <p> {{age}}</p>
        <button v-on:click="changeName">change name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail v-bind:myName = "name" v-on:resetName = "name = $event" 
                        v-bind:resetFn = "resetFunction" v-bind:userAge ="age" ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit  v-bind:userAge ="age"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return{
                name : "Dian",
                age : 20
            };
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeName(){
                this.name = "other";
            },
            resetFunction(){
                this.name = "Dian";
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>

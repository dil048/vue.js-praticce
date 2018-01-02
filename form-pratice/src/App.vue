<template>
    <div class="container">
        <form v-if = "displaySurvey">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1> Survey</h1>
                    <hr>
                    <appfullName v-model = "userInfo.name"></appfullName>
                    <div class="form-group">

                        <label for="email">Email</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model = "userInfo.mail">
                    </div>
                    <div class="form-group">

                        <label for="password">Password</label>
                        <input
                                type="text"
                                id="password"
                                class="form-control"
                                v-model = "userInfo.password">
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-md-6 form-group">
                            <label>Store Data?</label>
                            <label>
                                <input
                                        type="radio"
                                        id="store"
                                        value="Yes"
                                        v-model = "storeInDatabase"> Yes
                            </label>
                            <label >
                                <input
                                        type="radio"
                                        id="dontStore"
                                        value="No"
                                        v-model = "storeInDatabase"> No
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <button v-on:click.prevent = "displaySurvey = !displaySurvey"> Submit</button>
            </div>
        </form>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
        <div class="row" v-else>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userInfo.name}} </p>
                        <p>Mail: {{userInfo.mail}} </p>
                        <p>Password: {{userInfo.password}}</p>
                        <p>Store in Database?: {{storeInDatabase}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import fullName from "./fullName.vue"
    export default {
        data(){
            return{
                userInfo:{
                    name: 'asdfdas fdf',
                    mail: '',
                    password: ''
                },
                storeInDatabase: 'No',
                displaySurvey : true
            };
        },
        components:{
            appfullName : fullName
        }
    }
</script>

<style>
</style>

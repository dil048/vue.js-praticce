<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-body></app-body>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    import header from './header.vue'
    import body from './body.vue'
    export default{
        components:{
            'app-header': header,
            'app-body': body,

        }
    }
</script>

<style>

</style>

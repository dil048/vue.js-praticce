<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-body></app-body>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import header from './header.vue'
    import body from './body.vue'
    import footer from './footer.vue'
    export default{
        components:{
          'app-header': header,
          'app-body': body,
          'app-footer': footer

        }
    }
</script>

<style>
</style>

<template>
	<div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5">
                        Servers #{{ index }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently updated</p>
            </div>
        </div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
    div{
        border: 1px solid blue;
    }
</style>
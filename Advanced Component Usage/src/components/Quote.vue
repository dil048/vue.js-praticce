<template>
	<div>
        <div class= "title">
		  <slot name = "title"> </slot>
          <span ><slot name= "title">subtitle</slot></span>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
	</div>
</template>

<script>

</script>

<style scoped>
	div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    h2{
        color : red;
    }

	
</style>
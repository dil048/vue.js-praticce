<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-highLight:background.delayed.blacked = " 'red'"> Color This</p>
                <p v-localDirective:background.blink = "{mainColor : 'red', secoColor : 'green', interval : 0}"> this should be orange</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    	directives:{
    		localDirective:{
    			bind(el,binding){
    				if(binding.modifiers['blink']){
    					var main = binding.value.mainColor;
    					var seco = binding.value.secoColor;
    					var interval = binding.value.interval;
    					var curColor = main;
    					setTimeout(()=>{
    						setInterval(()=>{
    							curColor = (curColor != main) ? main:seco;
    							el.style.backgroundColor = curColor;
    						},interval);
    					},interval);
    				}
    			}
    		}
    	}
    }
</script>

<style>

</style>

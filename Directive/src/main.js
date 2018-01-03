import Vue from 'vue'
import App from './App.vue'

Vue.directive('highLight',{
	bind(el,binding,vnode){
		var delayed = 0;
		if(binding.modifiers['delayed']){
			delayed = 3000;
		}
		var color = 'red';
		if(binding.modifiers['blacked']){
			color = 'black';
		}
		setTimeout(()=>{
			if(binding.arg == 'background'){
				el.style.backgroundColor = color;
				}
		},delayed);
	}
});
new Vue({
  el: '#app',
  render: h => h(App)
})

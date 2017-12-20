new Vue({
    el: "#exercise",
    data: {
        name : "Dian",
        age : 20,
    },
    methods:{
    	random: function(){
    		return Math.random();
    	},
    	changeName: function(event){
    		this.name = event.target.value;
    	},
    	increase: function(e){
    		this.age++;

    	}

    }
});
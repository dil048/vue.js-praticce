new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
        	buttonClicked : function(){
        		alert("button pressed");
        	},
        	keyPressed : function(event){
        		this.value = event.target.value;
        	},
        	enterInfo: function(event){
        		this.value = event.target.value;
        	}
        }
    });
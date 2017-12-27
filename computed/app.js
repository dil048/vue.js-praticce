new Vue({
        el: '#exercise',
        data: {
            value: 0,
        },
        computed: {
        	result: function(){
        		if(this.value<37){
        			return "not 37 yet";
        		}else if(this.value>37){
        			return "greater than 37";
        		}else
        		{
        			return "37";
        		}

        	}

        },
        watch: {
        	result: function(val){
        		var v = this;
        		setTimeout(function(){
        			v.value = 0;
        		},5000)
        	}
        }
    });
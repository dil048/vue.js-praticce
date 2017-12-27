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
var temp = new Vue({
    el: "#testing",
    data:{
        title : "old title"
    },
    methods:{
        testss: function(){
            setTimeout(function(){
                this.title = "new title";
                alert("safs");
            }, 5000);
        }
    }
});


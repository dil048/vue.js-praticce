new Vue({
	el: '#app',
	data: {
		myHealth:100,
		monsterHealth:100,
		myAttack:0,
		monsterAttack:0,
		inGame:false,
	},
	methods:{
		attack:function(){
			this.myAttack = Math.random()*10;
			this.monsterAttack = Math.random()*10;
			this.myHealth = Math.round(this.myHealth - this.monsterAttack);
			this.monsterHealth = Math.round(this.monsterHealth - this.myAttack);
			
		},
		reset:function(){
			this.myHealth = 100;
			this.monsterHealth = 100;
			this.inGame = false;
			this.myAttack = 0;
			this.monsterAttack = 0;
		}
	}
});
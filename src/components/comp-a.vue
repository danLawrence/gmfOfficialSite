<template>
	<div id="compA">
	<h1>GMF X 占山为王</h1>
	<h2>新春赛—青柠山头</h2>
	<h3>2017.3.19 战报</h3>
	<p class="text">GMF的新春赛已经打响，<br>19日的下午，伴着细雨，青柠的占山之战拉开了帷幕。<br></p>
	<p class="text">球场如战场，选手们制定战术，各展所长，</p>
	<img src="../assets/compA/1.jpeg" width="100%">
	<img src="../assets/compA/2.jpeg" width="100%">
	<img src="../assets/compA/3.jpeg" width="100%">
	<img src="../assets/compA/4.jpeg" width="100%">
	<p class="text">暂时没有比赛的大家也踊跃参与了我们的现场活动，各个在网前刀光剑影的高手在小游戏面前完全欢脱，尽情吐槽队友，</p>
	<p class="text">大家在我们的APP“GMF运动”里发了好多现场的照片和心情，现场由一群陌生人变成了球场朋友圈里的互赞之友~</p>
	<p class="text">附上昨日的众多小福利一角</p>
	<img src="../assets/compA/5.jpeg" width="100%">
	<h3 class="sub-title">让我们来总结一下赛事比分！！！</h3>
	<h2 class="sub-title2"><br>冠军：<span class="span-color1">吴凯源</span> & <span class="span-color1">倪昊苏</span></h2>
	<h2 class="sub-title2"><br>亚军：<span class="span-color2">蔡兴颖</span> & <span class="span-color2">周志远</span></h2>
	<h2 class="sub-title2"><br>季军：<span class="span-color3">朱伟</span> & <span class="span-color3">陈志峰</span></h2>
	<h2 class="sub-title2"><br></h2>
	<p class="text">感谢所有到场的各位带给我们的精彩，<br>输赢都是愉快的玩耍，全身心享受这个午后的大家，感谢！</p>
	<img src="../assets/compA/6.jpeg" width="100%">
	<img src="../assets/compA/7.jpeg" width="100%">
	<img src="../assets/compA/8.jpeg" width="100%">
	<h3 style="color: #C00000;"><br><br>再次热烈祝贺本次的冠军得主！</h3>
	<h3 class="sub-title">真的很强啊大兄弟！</h3>
	<img src="../assets/compA/9.jpeg" width="100%">
	<p class="text">以上就是青柠的报道，</p>
	<p class="text">关注朋友们我们下期再见~</p>
	<p class="text footer"><br>更详细的赛事报道请关注官方公众号：GMF运动平台</p>
	</div>
</template>

<script>
export default {
  name: 'compA',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App comp-a'
    }
  },
  methods: {
  	init: function(){
  		
  	}		
  },
  mounted: function(){
  	this.init();
  }
}
</script>

<style scoped>
	#compA {
		text-align: center;
		font-family:微软雅黑;
		font-size: 0.32rem;
		padding: 1.2rem 0.3rem;
		line-height: .48rem;
	}
	h1 {
		font-size: .56rem;
		line-height: 0.56rem;
	}
	h2 {
		line-height: 0.56rem;
		font-size: 0.32rem;
		color: #76923C;
	}
	h3 {
		line-height: 0.56rem;
		font-size: 0.32rem;
		color: #E36C09;
	}
	.sub-title {
		color: #595959;
	}
	.sub-title2 {
		color: #595959;
		font-size: 0.36rem;
		font-weight: bold;
	}
	.sub-title2>.span-color1 {
		color: #FF6827;
	}
	.sub-title2>.span-color2 {
		color: #7B0C00;
	}
	.sub-title2>.span-color3 {
		color: #797BAA;
	}
	.text {
		text-align: left;
		line-height: .48rem;
		color: #595959;
	}
	.footer {
		color: #7F7F7F;
	}
</style>
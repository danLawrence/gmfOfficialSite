<template>
	<div id="compC">
		<h1>GMF X 占山为王 第二季足球联赛</h1>
		<h2>火车头赛区</h2>
		<!-- <h3>2017.3.19 战报</h3> -->
		<div class="m_head">
		</div>
		<div class="m_head2">
			<p class="text">主办单位：上海北溟文化传播有限公司<br></p>
			<p class="text">比赛场地：上海火车头体育场<br></p>
			<p class="text">赛事活动安排：3月12日-4月6日每周日进行<br></p>
		</div>
		<p class="text">火车头赛区战火已经燃起，感谢大家的踊跃和信任。<br><br><br><br><br></p>
		<h3 class="sub-title">3.26赛况简阅</h3>
		<div class="m_pk">
			<img src="../assets/compC/1.jpg" width="40%">
			<p class="text">PK</p>
			<img src="../assets/compC/2.jpg" width="40%">
		</div>
		<p class="text"><br></p>
		<!-- <p class="text">火车头赛区战火已经燃起，感谢大家的踊跃和信任。</p> -->
		<img src="../assets/compC/3.jpg" width="100%">
		<img src="../assets/compC/4.jpg" width="100%">
		<p class="text"><br><br></p>
		<img src="../assets/compC/mid.png" width="20%">
		<p class="text"><br></p>
		<div class="m_pk">
			<img src="../assets/compC/5.jpg" width="40%">
			<p class="text">PK</p>
			<img src="../assets/compC/6.jpg" width="40%">
		</div>
		<p class="text"><br></p>
		<img src="../assets/compC/7.jpg" width="100%">
		<p class="text"><br><br></p>
		<img src="../assets/compC/mid.png" width="20%">
		<p class="text"><br></p>
		<div class="m_pk">
			<img src="../assets/compC/8.jpg" width="40%">
			<p class="text">PK</p>
			<img src="../assets/compC/9.jpg" width="40%">
		</div>
		<p class="text"><br></p>
		<img src="../assets/compC/10.jpg" width="100%">
		<img src="../assets/compC/11.jpg" width="100%">
		<p class="text"><br><br></p>
		<img src="../assets/compC/mid.png" width="20%">
		<p class="text"><br></p>
		<div class="m_pk">
			<img src="../assets/compC/12.jpg" width="40%">
			<p class="text">PK</p>
			<img src="../assets/compC/13.jpg" width="40%">
		</div>
		<p class="text"><br></p>
		<img src="../assets/compC/14.jpg" width="100%">
		<img src="../assets/compC/15.jpg" width="100%">
		<h3 class="sub-title2">本场比分</h3>
		<img src="../assets/compC/16.png" width="100%">
		<h3 class="sub-title2">积分排行榜</h3>
		<img src="../assets/compC/17.png" width="100%">
		<p class="text2">最后积分＝常规比分（胜3，平1，输0）+点球输赢分（1，0）</p>
		<h3 class="sub-title2"><br>射手榜</h3>
		<img src="../assets/compC/18.jpg" width="60%">
		<div class="match-order">
			<p class="text">"4.9日比赛顺序</p>
			<img src="../assets/compC/19.png" width="100%">			
		</div>
		<p class="text"><br><br></p>
		<p class="footer">——//  See you next match 2017.4.9  //——</p>
		<p class="text"><br><br></p>
		<p class="text">更多赛况报道，请持续关注GMF官方微信——GMF运动平台</p>
		<p class="text"><br><br></p>
		<img src="../assets/compC/20.gif" width="10%">
		<p class="footer"><br>集结梦想</p>
		<p class="footer">这里是最纯粹的赛场</p><br>
		<img src="../assets/compC/21.jpeg" width="100%">
	</div>
</template>

<script>
export default {
  name: 'compC',
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
	#compC {
		text-align: center;
		font-family:微软雅黑;
		font-size: 0.32rem;
		padding: 1.2rem 0.3rem;
		line-height: .48rem;
	}
	h1 {
		font-size: .2rem;
		line-height: 0.28rem;
	}
	h2 {
		line-height: 0.28rem;
		font-size: 0.28rem;
		color: #ffa900;
	}
	.m_head {
		border-top: solid #ffa900 .2rem;
		border-left: solid #bbb .2rem;
		border-right: solid #bbb .2rem;
		height: .4rem;
	}
	.m_head2 {
		padding: 0 .2rem;
		border: solid transparent .1rem;
	}
	.m_head2 .text {
		font-size: .16rem;
		font-weight: bold;
		line-height: .24rem;
	}
	.m_pk {
	}
	.m_pk img {
		vertical-align: middle;
	}
	.m_pk p {
		display: inline-block;
		vertical-align: middle;
	}
	.match-order {
		border: solid black 4px;
		margin-top: .5rem;
		padding: .2rem;
	}
	.match-order .text {
		color: #d99694;
		font-size: .16rem;
	}
	h3 {
		line-height: 0.56rem;
		font-size: 0.32rem;
		color: #E36C09;
	}
	.sub-title {
		font-size: .2rem;
		font-weight: bold;
		color: #595959;
	}
	.sub-title2 {
		color: #595959;
		font-size: 0.24rem;
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
		font-size: .16rem;
		line-height: .24rem;
		color: #595959;
	}
	.text2 {
		font-size: .12rem;
		color: #244061;
	}
	.footer {
		font-size: .16rem;
		margin: 0 auto;
		font-weight: bold;
	}
</style>
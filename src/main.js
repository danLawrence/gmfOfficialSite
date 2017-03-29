// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  methods: {
  	init: function(){
  		(function (doc, win) {
	        //取得html的引用
	        var docEl = doc.documentElement,
	                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	                recalc = function () {
	                    var clientWidth = docEl.clientWidth;
	                    if (!clientWidth) return;
	                    clientWidth = (clientWidth > 768 )  ?  768 : clientWidth ;
	                    docEl.style.fontSize = 100 * (clientWidth / 375 ) + 'px';
	                };
	        if (!doc.addEventListener) return;
	        win.addEventListener(resizeEvt, recalc, false);
	       recalc();

	    })(document, window);
  	}		
  },
  mounted: function(){
  	this.init();
  }
})

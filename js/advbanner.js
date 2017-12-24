// function AdvBanner(id) {
// 	Banner.call(this, id)//继承属性
// 	var _this=this
// 	this.AdvBanner = document.getElementById('adv_banner')
// 	this.AdvSlideBanner = this.AdvBanner.getElementsByClassName('adv-slide-banner')
// 	//初始化
// }

// for (var i in Banner.prototype) {
//   AdvBanner.prototype[i] = Banner.prototype[i];
// }
function AdvBanner(id){
	var _this=this
	var AdvBannerWrapper = document.getElementById(id)
	this.AdvBanner = document.getElementById('adv_banner')
	this.AdvSlideBanner = this.AdvBanner.getElementsByClassName('adv-slide-banner')
	this.Advcircle = document.getElementById('adv_circle')
	this.aLi = this.Advcircle.getElementsByTagName('li')
	//初始化
	this.Timer = null
	this.num = 0

		for (var i = 0; i < this.aLi.length; i++) {
		this.aLi[i].index = i
		this.aLi[i].onclick = function() {
			_this.aLiActive(this)

		}
	}
}

AdvBanner.prototype.aLiActive=function(oli){
	for (var i = 0; i < this.aLi.length; i++) {
		this.aLi[i].className = ''
		this.AdvSlideBanner[i].style.display='none'
	}
	this.num=oli.index
	oli.className = 'active'
	this.AdvSlideBanner[this.num].style.display='block'
}

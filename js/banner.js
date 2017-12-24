function Banner(id) {
	var _this = this
	var BannerWrapper = document.getElementById(id)
	this.SlideContent = document.getElementById('slide_content')
	this.SlideBanner = this.SlideContent.getElementsByClassName('slide-banner')
	this.prevBtn = document.getElementById('prev')
	this.nextBtn = document.getElementById('next')
	this.circle = document.getElementById('circle')
	this.aLi = this.circle.getElementsByTagName('li')
		//初始化
	this.SlideBanner[0].style.opacity = "1"
	this.SlideBanner[0].style.zIndex = "1"
	this.aLi[0].style.className = "active"
	this.Interval = 3000
	this.Timer = null
	this.num = 0

	this.nextBtn.onclick = function() {
		_this.nextClick(this)
	}
	this.prevBtn.onclick = function() {
		_this.prevClick(this)
	}
	autoPlay = function() {
		_this.autoPlay(this)
	}
	BannerWrapper.onmouseover = function() {
		clearInterval(_this.Timer)
	}
	BannerWrapper.onmouseout = function() {
		_this.autoPlay(this)
	}
	_this.autoPlay(this)

	for (var i = 0; i < this.aLi.length; i++) {
		this.aLi[i].index = i
		this.aLi[i].onclick = function() {
			_this.aLiActive(this)

		}
	}
}

Banner.prototype.nextClick = function() {
	this.num++
		if (this.num == 5) {
			this.num = 0
			this.SlideBanner[this.num].style.opacity = '0'
			this.SlideBanner[this.num].style.zIndex = '0'
			this.aLi[this.num].className = ''
		}
	for (var i = this.aLi.length - 1; i >= 0; i--) {
		this.SlideBanner[i].style.opacity = '0'
		this.SlideBanner[i].style.zIndex = '0'
		this.aLi[i].className = ''
	}
	this.SlideBanner[this.num].style.opacity = '1'
	this.SlideBanner[this.num].style.zIndex = '1'
	this.aLi[this.num].className = 'active'
}

Banner.prototype.prevClick = function() {
	this.num--
		if (this.num == -1) {
			this.num = 4
			this.SlideBanner[this.num].style.opacity = '0'
			this.SlideBanner[this.num].style.zIndex = '0'
			this.aLi[this.num].className = ''
		}
	for (var i = this.aLi.length - 1; i >= 0; i--) {
		this.SlideBanner[i].style.opacity = '0'
		this.SlideBanner[i].style.zIndex = '0'
		this.aLi[i].className = ''
	}
	this.SlideBanner[this.num].style.opacity = '1'
	this.SlideBanner[this.num].style.zIndex = '1'
	this.aLi[this.num].className = 'active'
}

Banner.prototype.autoPlay = function() {
	var _this = this;
	_this.Timer = setInterval(function() {
		_this.nextClick(this)
	}, this.Interval)
}
Banner.prototype.aLiActive = function(oLi) {
	for (var i = this.aLi.length - 1; i >= 0; i--) {
		this.SlideBanner[i].style.opacity = '0'
		this.SlideBanner[i].style.zIndex = '0'
		this.aLi[i].className = ''
	}
	this.num = oLi.index
	this.SlideBanner[this.num].style.opacity = '1'
	this.SlideBanner[this.num].style.zIndex = '1'
	oLi.className = 'active'

}
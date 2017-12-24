function BackTop(id) {
  var _this = this
  var ToolbarBtn = document.getElementById(id);

  //获取页面可视区的高度
  this.clientHeight = document.documentElement.clientHeight;
  this.timer = null;
  this.isTop = true;

  //滚动条滚动时触发
  window.onscroll = function() {
    this.osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (this.osTop >= this.clientHeight) {
      ToolbarBtn.style.display = 'block';
    } else {
      ToolbarBtn.style.display = 'none';
    }

    if (!this.isTop) {
      clearInterval(_this.timer);
    }
    this.isTop = false;
  }

  ToolbarBtn.onclick = function() {
    _this.toolbarClick(this)
  }
}
BackTop.prototype.toolbarClick = function() {
    var _this = this;
    _this.timer = setInterval(function() { //定时器
    //获取滚动条距离顶部的高度
    this.osTop = document.documentElement.scrollTop || document.body.scrollTop;

    this.ispeed = Math.floor(-this.osTop / 5);

    document.documentElement.scrollTop = document.body.scrollTop = this.osTop + this.ispeed;
    this.isTop = true;
    console.log(this.osTop - this.ispeed);

    if (this.osTop == 0) {
      clearInterval(_this.timer);
    }
  }, 30);
}
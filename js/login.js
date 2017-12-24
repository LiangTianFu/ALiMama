    window.onload = function() {
    var oDiv = document.getElementById('j_modal');
    var disX = 0;
    var disY = 0;
    oDiv.onmousedown = function(ev) {
    var oEvent = ev || event;
    disX = oEvent.clientX - oDiv.offsetLeft;
    disY = oEvent.clientY - oDiv.offsetTop;
    document.onmousemove = function(ev) {
    var oEvent = ev || event;
    var l = oEvent.clientX - disX;
    var t = oEvent.clientY - disY;
    if (l < 200) {
    l = 200;
    } else if (l > document.documentElement.clientWidth - oDiv.offsetWidth+200) {
    l = document.documentElement.clientWidth - oDiv.offsetWidth+200;
    }
    if (t < 0) {
    t = 0;
    } else if (t > document.documentElement.clientHeight - oDiv.offsetHeight) {
    t = document.documentElement.clientHeight - oDiv.offsetHeight;
    }
    oDiv.style.left = l + 'px';
    oDiv.style.top = t + 'px';
    };
    document.onmouseup = function() {
    document.onmousemove = null;
    document.onmouseup = null;
    }
    return false;
    }
    var oLogin = document.getElementById('j_login');
    var oModal = document.getElementById('j_modal');
    var oMask = document.getElementById('j_mask');
    var oClose = document.getElementById('j_close');
    function LoginBox(){
    oModal.style.display = 'block';
    oMask.style.display = 'block';
    }
    function CloseBox(){
    oModal.style.display = 'none';
    oMask.style.display = 'none';
    }
    oLogin.onclick = function(){
    LoginBox();
    }
    oClose.onclick = function(){
    CloseBox();
    }
    }
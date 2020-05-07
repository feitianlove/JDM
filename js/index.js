// 倒计时
downTime()
function downTime(){
  var spans = document.querySelectorAll('.time span:nth-child(odd)')
  var target = new Date('2020-05-04 18:00:00')
  var timer = setInterval(function(){
    var t = (target - new Date())/1000
    if (t <= 0) {
      clearInterval(timer)
      return
    }
    var h = Math.floor(t / 3600)
    var m = Math.floor(t % 3600 / 60)
    var s = Math.floor(t % 60)
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : h
    s = s < 10 ? '0' + s : s
    spans[0].innerText = h
    spans[1].innerText = m
    spans[2].innerText = s
  },1000)
}

// 头部变色
header()
function header(){
  var jd_header = document.querySelector('.jd_header')
  window.onscroll = function(){
    var target = 500
    var opacity = window.pageYOffset / target
    if (opacity > 0.8) {
      opacity = 0.8
    }
    jd_header.style.backgroundColor = "rgba(222, 24, 27, "+ opacity+")"
  }
}
// news
news()
function news(){
  var ul = document.querySelector('.cut ul')
  var lis = document.querySelectorAll('.cut li')
  var index = 0
  // console.log(lis.length)
  setInterval(function(){
    // console.log(index)
    index ++
    var y = -index * 30
    ul.style.transition = 'transform .5s'
    ul.style.transfrom = 'translateY('+ y+'px)'
    ul.style.webkitTransform = 'translateY('+ y +'px)';
    // console.log('translateY('+index*30+'px)')
  },1000)
  ul.addEventListener('transitionend',function(){
    if (index >= lis.length - 1){
      index = 0
      ul.style.transition = 'none';
      ul.style.webkitTransition = 'none';
      ul.style.transfrom = 'translateY('+ 0 +'px)';
      ul.style.webkitTransform = 'translateY('+ 0 +'px)';
    }
  })
}
// banner 
banner()
function banner(){
  var index = 1
  var ul = document.querySelector(".jd_banner ul")
  var lis = document.querySelectorAll('.jd_banner ul li')
  var banner = document.querySelector('.jd_banner')
  var w = banner.offsetWidth
  var timer = setInterval(function(){
    index ++
    var x = -index * w
    ul.style.transition = 'transform .4s'
    ul.style.webkitTransition = 'transform .4xs'
    ul.style.transfrom = 'translateX('+ x +'px)'
    ul.style.webkitTransform = 'translateX('+  x +'px)'
  },2000)
  ul.addEventListener('transitionend',function () {
    if(index >= lis.length - 1 ) {
      index = 1
    }
    if(index <= 0 ) {
      index = lis.length - 2
    }
    var x = -index * w
    ul.style.transition = 'none'
    ul.style.webkitTransition = 'none'
    ul.style.transfrom = 'translateX('+ x +'px)'
    ul.style.webkitTransform = 'translateX('+  x +'px)'
    setPoints( index - 1)
  })
  ul.addEventListener('webkitTransitionEnd',function () {
    if(index >= lis.length - 1 ) {
      index = lis.length - 1
      var x = index * w
      ul.style.transition = 'none'
      ul.style.webkitTransition = 'none'
      ul.style.transfrom = 'translateX('+ x +'px)'
      ul.style.webkitTransform = 'translateX('+  x +'px)'
    }
    if(index <= 0 ) {
      index = lis.length - 2
      var x = - index * w
      ul.style.transition = 'none'
      ul.style.webkitTransition = 'none'
      ul.style.transfrom = 'translateX('+ x +'px)'
      ul.style.webkitTransform = 'translateX('+  x +'px)'
    }
    setPoints( index - 1)
  })
    //3-触屏滑动切换轮播图
    // 1-触屏开始
        // 1-清除定时器
        // 2-记录触屏起始位置 
    // 2-触屏移动
        // 1-获取移动后坐标位置
        // 2-计算距离差值 
        // 3-ul跟随手指移动， 移动距离 = 距离差
    // 3-触屏结束
        // 判断触屏滑动距离是否大于屏幕宽度1/3 
            // 如果小于  不切换
            //  大于1/3 切换  
                //判断左滑： 下一张 index++
                //右滑：  上一张 index --
                // 让轮播图进行切换
        // 数据重置
        // 开启定时器
    // 定义容器存储数据
  var startX = 0
  var moveX = 0
  var distance = 0
  banner.ontouchstart = function(e){
    clearInterval(timer)
    startX = e.targetTouches[0].clientX
  }
  banner.ontouchmove = function(e){
    moveX = e.changedTouches[0].clientX
    distance = moveX - startX
    var x = -w * index + distance
    ul.style.transform = 'translateX('+ x +'px)';
    ul.style.webkitTransform = 'translateX('+ x +'px)';
  }
  banner.ontouchend = function(){
    if (Math.abs(distance) > w/3) {
      if (distance > 0){
        index --
      }
      if (distance < 0 ){
        index ++
      }
    }
    var x = -index * w
    ul.style.transition = 'transform .4s'
    ul.style.webkitTransition = 'transform .4s'
    ul.style.transfrom = 'translateX('+ x +'px)'
    ul.style.webkitTransform = 'translateX('+  x +'px)' 
    startX = 0;
    moveX = 0;
    distanceX = 0;

    //开启定时器
    timer = setInterval(function () {
        //累加index
        index++;
        //计算ul移动距离 = -index * 一屏宽度
        var x = -index * w; 
        // 添加过渡
        var x = -index * w
        ul.style.transition = 'transform .4s'
        ul.style.webkitTransition = 'transform .4s'
        ul.style.transfrom = 'translateX('+ x +'px)'
        ul.style.webkitTransform = 'translateX('+  x +'px)' 
    }, 2000);
  }
    // //当屏幕宽度变换时， 动态设置w的宽度
    // // onresize 当浏览器可视区域宽度发生变化是触发
    // window.onresize = function () {
    //   w = banner.offsetWidth;        
    //   // 立即以最新屏幕宽度让ul调整位置
    //   var x = -index * w; 
    //   //删除过渡
    //   removeTransition();
    //   // ul移动
    //   setTranslateX(x);  
    // }
}
function setPoints(index){
  var lis = document.querySelectorAll('.jd_banner ol li')
  lis.forEach(function(item, i){
    item.classList.remove('current')
    
  })
  lis[index].classList.add('current')

}
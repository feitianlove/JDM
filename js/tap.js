
(function (window) {
    var itcast = {
        // div.onclick = function () {}
        // selector 要绑定事件元素的选择器  
        // callback 触发事件后要执行的回调函数
        tap: function (selector, callback) {
            // 1-根据选择器获取元素
            var ele = document.querySelector(selector);
            // 2-在获取到元素的情况下，给盒子绑定tap事件
            if (ele) {
                //用touch事件来优化点击事件
                var isMove = false; //记录手指是否移动
                var start = 0; //记录触屏起始时间戳
    
                ele.ontouchstart = function () {
                    start = Date.now(); //记录触屏起始时间
                }
                ele.ontouchmove = function () {
                    isMove = true; //记录触屏移动
                }
                ele.ontouchend = function (e) {
                    // var e = 100;
                    // 判断用户的行为是否属于点击
                    if (!isMove && Date.now() - start < 150) {
                        //执行点击逻辑
                        callback && callback(e);
                    }
    
                    //数据重置
                    isMove = false;
                    start = 0;
                }
            }
        },
    
        ajax: function () {}
    }

    window.itcast = itcast;
})(window);

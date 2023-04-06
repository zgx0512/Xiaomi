// 缓动效果原理
// 缓动动画就是让元素运动速度有所变化，最常见的是让速度慢慢停下来
// 思路:
//     1.让盒子每次移动的距离慢慢变小，速度就会慢慢落下来
//     2.核心算法: (目标值 - 现在的位置) / 10 做为每次移动的距离步长
//     3.停止的条件是: 让当前盒子位置等于目标位置就停止定时器

// 动画函数添加回调函数
// 回调函数原理: 函数可以作为一个参数。将这个函数作为参数传到另一个函数里面，当那个函数执行完之后，再执行传进去的这个函数，这个过程就叫做回调。

function animate(obj, target, callback) {
    // callback = function() {}
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // callback() 回调函数, 写到计时器结束里面
            callback();
        } else {
            // 步长：(目标值 - 现在的位置) / 10
            var step = (target - obj.offsetLeft) / 10;
            // 步长为正数，证明往前走，让步长向上取整，否则，证明往后走，那就让步长向下取整
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15)
}
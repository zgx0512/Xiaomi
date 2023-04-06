window.addEventListener('load', function () {
    const search = this.document.querySelector('#search')
    const searchDown = this.document.querySelector('.search-down')
    // 文本框点击后，推荐列表 显示
    search.addEventListener('click', function (e) {
        searchDown.style.display = 'block'
        // 阻止冒泡，使其不会触发到文档的点击事件上去
        e.stopPropagation()
    })
    // 点击文本框以外的所有地方，推荐列表 隐藏
    this.document.addEventListener('click', function () {
        searchDown.style.display = 'none'
        search.blur()
    })
    const backTop = this.document.querySelector('.backTop')
    const banner = this.document.querySelector('.img-box')
    const bannerTop = banner.offsetTop;
    // 页面滑动到某个距离后，显示返回顶部按钮
    document.addEventListener('scroll', function () {
        // window.scrollY 页面被卷去的头部
        if (window.scrollY >= bannerTop) {
            backTop.style.display = 'block'
        } else {
            backTop.style.display = 'none'
        }
    })
    backTop.addEventListener('click', function () {
        // 以平滑的动画返回顶部
        window.scrollTo(0, 0)
    })
})
window.addEventListener('load', function() {
    var fixSideNav = document.querySelector('.fix-sidenav');
    var lis = fixSideNav.querySelectorAll('li');
    var banner = this.document.querySelector('.img-box');
    var bannerTop = banner.offsetTop;
    document.addEventListener('scroll', function() {
        if (window.scrollY >= bannerTop) {
            lis[lis.length - 1].style.display = 'block';
        } else {
            lis[lis.length - 1].style.display = 'none';
        }
    })
    // 返回顶部
    lis[lis.length - 1].addEventListener('click', function() {
        console.log(window.scrollY);
        window.scrollY = 0;
    })
})
let lrw = window.matchMedia("(max-width: 735px)");
let law = window.matchMedia("(min-width: 735px)");

function toggleLogo(){
    if (lrw.matches) {
        document.getElementById("logo-mobile").classList.remove("hidden");
        document.getElementById("logo-desktop").classList.add("hidden");
    }
    else if (law.matches) {
        document.getElementById("logo-mobile").classList.add("hidden");
        document.getElementById("logo-desktop").classList.remove("hidden");
    }
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', toggleLogo);

// 窗口大小改变时执行
window.addEventListener('resize', toggleLogo);

// 媒体查询变化时执行
lrw.addListener(toggleLogo);
law.addListener(toggleLogo);
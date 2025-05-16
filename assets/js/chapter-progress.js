// 检查是否是课程章节页面
function isChapterPage() {
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(Boolean);
    return pathParts.length === 3 && pathParts[0] === 'collections';
}

// 只在课程章节页面初始化进度条
if (isChapterPage()) {
    window.addEventListener("scroll", updateChapterProgress);

    const chapterProgressBar = document.getElementById("chapterProgressBar");
    const chapterScrollProgress = document.getElementById("chapterProgressIndicator");

    let chapterArticleSubscription = 0;
    let chapterArticleNext = 0;
    let chapterFooterSection = 150;

    if (document.getElementById("subscriptionSection")) {
        chapterArticleSubscription = document.getElementById("subscriptionSection").offsetHeight;
    }

    if (document.getElementById("articleNext")) {
        chapterArticleNext = document.getElementById("articleNext").offsetHeight;
    }

    const chapterBottomOffset = ((chapterArticleSubscription + chapterArticleNext + chapterFooterSection) / document.body.scrollHeight) * 100;

    function updateChapterProgress() {
        let percentScrolled = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
        
        percentScrolled = Math.min(percentScrolled, 100);
        
        chapterScrollProgress.style.transform = "translateY(" + percentScrolled + "%)";

        if (percentScrolled >= 95) {
            chapterProgressBar.style.animationName = "chapter-progress-fade-out";
            setTimeout(function() {
                chapterProgressBar.style.opacity = "0";
            }, 500);
        } else {
            chapterProgressBar.style.animationName = "chapter-progress-fade-in";
            setTimeout(function() {
                chapterProgressBar.style.opacity = "1";
            }, 500);
        }
    }
} 
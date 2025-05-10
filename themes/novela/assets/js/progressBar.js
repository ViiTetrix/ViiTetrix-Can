window.addEventListener("scroll", updateProgress);
    
progressBar = document.getElementById("progressBar");
scrollProgress = document.getElementById("progressIndicator");

if (document.getElementById("subscriptionSection")){
    articleSubscription = document.getElementById("subscriptionSection").offsetHeight;
}
else{
    articleSubscription = 0;
}

if(document.getElementById("articleNext")){
    articleNext = document.getElementById("articleNext").offsetHeight;
}
else{
    articleNext = 0;
}

footerSection = 150;

bottomOffset = ((articleSubscription + articleNext + footerSection) / document.body.scrollHeight) * 100;

function updateProgress(){
    let percentScrolled = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    percentScrolled = Math.min(percentScrolled, 100);
    
    scrollProgress.style.transform = "translateY(" + percentScrolled + "%)";

    if (percentScrolled >= 95){
        progressBar.style.animationName = "progress-fade-out";
        setTimeout(function(){
            progressBar.style.opacity = "0";
        }, 500);
    }
    else{
        progressBar.style.animationName = "progress-fade-in";
        setTimeout(function(){
            progressBar.style.opacity = "1";
        }, 500);
    }
}

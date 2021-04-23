document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("load", function(e) {
        document.body.style.display = 'block';

        var tl = new TimelineMax();
        tl.staggerFrom('h1', .5, {
            opacity: 0,
            y: -40,
            ease: Power2.easeInOut
            }, 0.2, "-=2")
        tl.staggerFrom('p', 1, {
            opacity: 0,
            y: -40,
            ease: Power2.easeInOut
            }, 0.2, "-=1.5")
        
    }, false);
});
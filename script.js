let cursor = document.getElementById("cursor");
let blur = document.getElementById("cursor-blur");
document.addEventListener("mousemove", (e) => {
    // console.log(e.x, e.y);
    cursor.style.left = (e.x - 10) + "px";
    cursor.style.top = (e.y - 10) + "px";
    blur.style.left = (e.x - 125) + "px";
    blur.style.top = (e.y - 125) + "px";
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})

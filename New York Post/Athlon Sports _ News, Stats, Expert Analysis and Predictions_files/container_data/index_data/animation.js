let cadillac = new TimelineMax;

function init() {
    main_animation();
}

function main_animation() {
    add_hover();
    cadillac.to(cta_text, 0.01, { force3D: true, backfaceVisibility: 'hidden', rotationZ: '0.01deg', z: 0.01 }, "pre_start");

    cadillac.to(black_frame, 1.0, { opacity: 0, ease: Power1.easeInOut }, "part1");

    cadillac.from([copy1, logo, disclaimer ], 1.5, { opacity:0,  ease: Power1.easeInOut }, "part1+=0.5");

    cadillac.from([cta_text], 0.75, { opacity:0,  ease: Power1.easeInOut }, "part1+=1.1");
    cadillac.to(".cta_border_left", 2, { strokeDashoffset: 298,  ease: Power2.easeInOut }, "part1+=1.2");
    cadillac.to(".cta_border_right", 2, { strokeDashoffset: 0,  ease: Power2.easeInOut }, "part1+=1.2");

}

function add_hover() {
    document.getElementById("main_wrapper").onmouseover = function () {
        gsap.to(cta_text, .25, { scale:1.1 , ease: Power1.easeInOut, transformOrigin:'85% 50%', overwrite: "auto" });

    };

    document.getElementById("main_wrapper").onmouseout = function () {
        gsap.to(cta_text, .25, { scale:1, ease: Power1.easeInOut, transformOrigin:'85% 50%', overwrite: "auto" });

    };
}


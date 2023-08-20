// Code sourced and adapted from:
// https://animejs.com/documentation/#motionPath
// https://animejs.com/documentation/#lineDrawing
// https://www.youtube.com/watch?v=NWKxgDpJQBA&t=529s
// https://greensock.com/docs/v3/Plugins/ScrollTrigger

let paperPlanePath = anime.path('#route');

// The settings for the motion path animation of the paper plane on the home screen.
let flyingPaperPlaneMotionPath = anime({
    targets: '#flyingPaperPlane',
    translateX: paperPlanePath('x'),
    translateY: paperPlanePath('y'),
    rotate: paperPlanePath('angle'),
    easing: 'linear',
    duration: 30000,
    loop: true
});

let radarEllipseDrawing = anime({
    targets: '.ellipse',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'linear',
    duration: 5000,
    delay: function(el, i) { return i * 4000 },
    direction: 'alternate',
    loop: true
});

let radarLineDrawing = anime({
    targets: '.line',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 6000,
    delay: function(el, i) { return i * 1000 },
    direction: 'alternate',
    loop: true
});

let aerodynamicsChartsDrawing = anime({
    targets: '#liftLine, #weightLine',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    direction: 'alternate-reverse',
    loop: true
});

gsap.to("#mainHeading", {
    scrollTrigger : {
        scrub: 1
    },
    scale: 3,
});

gsap.to("#homeClouds", {
    scrollTrigger : {
        scrub: 1
    },
    scaleX: 4
});

gsap.to("#aerodynamicsClouds", {
    scrollTrigger : {
        scrub: 1
    },
    scaleX: 2
});
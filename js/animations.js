// Code sourced and adapted from:
// https://animejs.com/documentation/#motionPath
// https://animejs.com/documentation/#lineDrawing
let paperPlanePath = anime.path('#route');

// The settings for the motion path animation of the paper plane on the home screen.
let paperPlaneMotionPath = anime({
    targets: '#paperPlane',
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
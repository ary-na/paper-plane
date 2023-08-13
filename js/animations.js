// Code sourced and adapted from:
// https://animejs.com/documentation/#motionPath
let polygonPath = anime.path('#route');

// The settings for the motion path animation of the paper plane on the home screen.
let paperPlaneMotionPath = anime({
    targets: '#polygon',
    translateX: polygonPath('x'),
    translateY: polygonPath('y'),
    rotate: polygonPath('angle'),
    easing: 'linear',
    duration: 25000,
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
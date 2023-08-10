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
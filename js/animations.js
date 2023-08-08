// Code sourced and adapted from:
// https://animejs.com/documentation/#motionPath
let paperPlanePath = anime.path('#route');

// The settings for the motion path animation of the paper plane on the home screen.
let paperPlaneMotionPath = anime({
    targets: '#paperPlane',
    translateX: paperPlanePath('x'),
    translateY: paperPlanePath('y'),
    rotate: paperPlanePath('angle'),
    easing: 'linear',
    duration: 20000,
    loop: true
});
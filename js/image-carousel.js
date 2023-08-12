

let splide = new Splide( '.splide' );
let bar    = splide.root.querySelector( '.slider-progress-bar' );

// Updates the bar width whenever the carousel moves:
splide.on( 'mounted move', function () {
    let end  = splide.Components.Controller.getEnd() + 1;
    let rate = Math.min( ( splide.index + 1 ) / end, 1 );
    bar.style.width = String( 100 * rate ) + '%';
} );

splide.mount();
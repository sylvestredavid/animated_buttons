
function addAnimation(element, animation) {
    element.classList.add(animation);
    setTimeout(() => {
        element.classList.remove(animation)
    }, 2010)
}

function anim(element) {
    element.animate([
        // keyframes
        { transform: 'scale(1)', background: 'blue' },
        { transform: 'scale(1.1)', background: 'red' },
        { transform: 'scale(0.9)', background: 'green' },
        { transform: 'scale(1.1)', background: 'yellow' },
        { transform: 'scale(1)', background: 'blue' },
    ], {
        // timing options
        duration: 1000,
        iterations: 2
    })
}
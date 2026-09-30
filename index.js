let donut = document.querySelector('img')
donut.addEventListener('click', function() {
    anime({
        targets: donut,
        keyframes: [
            {scale: 1},
            {scale: 1.5},
            {scale: 1}
        ],
        duration: 600,
        easing: 'linear'
    })
})

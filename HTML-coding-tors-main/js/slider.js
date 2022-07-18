const images = document.querySelectorAll('.item');
const container = document.querySelector('.container');

const next = document.querySelector('#next');
const prev = document.querySelector('#previous');

if (window.getComputedStyle(next).display !== 'none' || window.getComputedStyle(prev).display !== 'none') {
    container.style.left = "0";

    container.style.width = (images[0].offsetWidth + 16) * 4 + 'px';
    console.log(container.offsetWidth)

    if (window.screen.width < 400) {
        next.addEventListener('click', function () {
            let left = container.style.left.replace(/px/, '');

            if (Number(left) > -1 * Number(container.offsetWidth) * (3 / 4)) {
                container.style.left = Number(container.style.left.replace(/px/, '')) - Number(container.offsetWidth / 4) + 'px';
            } else {
                container.style.left = '0px';
            }
            console.log(left, container.offsetWidth)
        });

        parent.addEventListener('click', function () {
            let left = container.style.left.replace(/px/, '');

            if (Number(left) < 0) {
                container.style.left = Number(container.style.left.replace(/px/, '')) + Number(container.offsetWidth / 4) + 'px';
            } else {
                container.style.left = Number(container.offsetWidth) * (-3 / 4) + 'px';
            }
            console.log(left, container.offsetWidth)
        });
    } else if (window.screen.width < 640 && window.screen.width > 400) {
        next.addEventListener('click', function () {
            let left = container.style.left.replace(/px/, '');

            if (Number(left) > -1 * Number(container.offsetWidth) * (1 / 2)) {
                container.style.left = Number(container.style.left.replace(/px/, '')) - Number(container.offsetWidth / 4) + 'px';
            } else {
                container.style.left = '0px';
            }
            console.log(left, container.offsetWidth)
        });

        prev.addEventListener('click', function () {
            let left = container.style.left.replace(/px/, '');

            if (Number(left) < 0) {
                container.style.left = Number(container.style.left.replace(/px/, '')) + Number(container.offsetWidth / 4) + 'px';
            } else {
                container.style.left = Number(container.offsetWidth) * (-1 / 2) + 'px';
            }
            console.log(left, container.offsetWidth)
        });
    } else {
        next.addEventListener('click', function () {
            let left = container.style.left.replace(/px/, '');

            if (Number(left) > -1 * Number(container.offsetWidth) * (1 / 4)) {
                container.style.left = Number(container.style.left.replace(/px/, '')) - Number(container.offsetWidth / 4) + 'px';
            } else {
                container.style.left = '0px';
            }
            console.log(left, container.offsetWidth)
        });

        prev.addEventListener('click', function () {
            let left = container.style.left.replace(/px/, '');

            if (Number(left) < 0) {
                container.style.left = Number(container.style.left.replace(/px/, '')) + Number(container.offsetWidth / 4) + 'px';
            } else {
                container.style.left = Number(container.offsetWidth) * (-1 / 4) + 'px';
            }
            console.log(left, container.offsetWidth)
        });
    }
}
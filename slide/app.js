function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(event) {
    sliderImages.forEach(slideImg => {
        const slideInAt =  (window.scrollY + window.innerHeight) - slideImg.height / 2;
        const imageBottom = slideImg.offsetTop + slideImg.height;
        const isHalfShown = slideInAt > slideImg.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            slideImg.classList.add('active');
        } else {
            slideImg.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));
let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
}

const loadImages = (img) => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => {img.removeAttribute('data-src');};
}


    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if(!item.isIntersecting){
                return;
            } else {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach(image => {
        imgObserver.observe(image);
    })
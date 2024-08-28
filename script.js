document.querySelectorAll('.carousel').forEach(function(carousel) {
    let images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    showImage(currentIndex);

    carousel.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
});

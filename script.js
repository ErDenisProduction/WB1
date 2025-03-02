document.getElementById('clickMe').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    if (imageContainer.style.display === 'none') {
        imageContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'none';
    }
});
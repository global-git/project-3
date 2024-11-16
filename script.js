// Array of images for the gallery
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

// Current image index
let currentImageIndex = 0;

// Get DOM elements
const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the image displayed
function updateImage() {
    galleryImage.src = images[currentImageIndex];
}

// Event listener for Previous button
prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    updateImage();
});

// Event listener for Next button
nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    updateImage();
});
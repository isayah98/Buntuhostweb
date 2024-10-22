let currentService = 0;
const services = document.querySelectorAll('.service');
const totalServices = services.length;
const intervalTime = 5000; // Change service every 5 seconds

// Function to show the next service
function showNextService() {
    services[currentService].classList.remove('active');
    currentService = (currentService + 1) % totalServices;
    services[currentService].classList.add('active');
}

// Automatic rotation
let serviceInterval = setInterval(showNextService, intervalTime);

// Stop the rotation on hover and restart it when the mouse leaves
services.forEach(service => {
    service.addEventListener('mouseenter', () => {
        clearInterval(serviceInterval);
    });
    service.addEventListener('mouseleave', () => {
        serviceInterval = setInterval(showNextService, intervalTime);
    });
});

// Initialize the first service as active
services[0].classList.add('active');

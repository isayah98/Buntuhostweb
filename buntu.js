let currentService = 0;
const services = document.querySelectorAll('.service');
const totalServices = services.length;
const intervalTime = 3000; // Change service every 5 seconds

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


// tje js for services

const servicesInfom = {
    web_hosting: [
        {
            title: "Small businesses",
            features: [
                "Reliable hosting with 99.9% Uptime \nto keep your website accessible",
                "SSL certificate for secure online \ntransactions",
                "Daily backups and automatic updates to \nensure your data is safe.",
                "Scalable plans to grow as your business \nexpands."
            ],
            price: "R349/pm"
        },
        {
            title: "Individuals",
            features: [
                "Personal website hosting",
                "Custom email addresses",
                "99.9% uptime guarantee",
                "Basic support"
            ],
            price: "R199/pm"
        },
        {
            title: "Developers",
            features: [
                "Developer-friendly tools",
                "Git integration",
                "Staging environments",
                "99.9% Uptime"
            ],
            price: "R499/pm"
        }
    ],
    web_development: [
        {
            title: "Small businesses",
            features: [
                "Custom website development",
                "Mobile-friendly design",
                "SEO optimization",
                "Content management system"
            ],
            price: "R10000"
        },
        {
            title: "Individuals",
            features: [
                "Personal portfolio site",
                "Blog development",
                "SEO optimization",
                "Social media integration"
            ],
            price: "R5000"
        },
        {
            title: "Developers",
            features: [
                "Custom API integration",
                "Web app development",
                "Code reviews",
                "Performance optimization"
            ],
            price: "R15000"
        }
    ],
    web_design: [
        {
            title: "Small businesses",
            features: [
                "Professional web design",
                "Responsive layouts",
                "UI/UX optimization",
                "Graphic design integration"
            ],
            price: "R1500"
        },
        {
            title: "Individuals",
            features: [
                "Personalized design",
                "Basic graphic design",
                "Responsive layout",
                "Social media graphics"
            ],
            price: "R800"
        },
        {
            title: "Developers",
            features: [
                "UI/UX consulting",
                "Design for web applications",
                "Design system creation",
                "User journey mapping"
            ],
            price: "R2500"
        }
    ]
};


let currentIndex = {
    web_hosting: 0,
    web_development: 0,
    web_design: 0
};

function updateService(serviceId) {
    const service = servicesInfom[serviceId][currentIndex[serviceId]];
    const container = document.getElementById(serviceId);
    container.querySelector('.target-title').textContent = service.title;
    container.querySelector('.target-features').innerHTML = service.features.map(f => `<li>${f}</li>`).join('');
    container.querySelector('.price-btn').textContent = service.price;
}

function nextTarget(serviceId) {
    currentIndex[serviceId] = (currentIndex[serviceId] + 1) % servicesInfom[serviceId].length;
    updateService(serviceId);
}

function prevTarget(serviceId) {
    currentIndex[serviceId] = (currentIndex[serviceId] - 1 + servicesInfom[serviceId].length) % servicesInfom[serviceId].length;
    updateService(serviceId);
}

// whatever login



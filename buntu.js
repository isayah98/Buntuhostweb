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
                
                document.getElementById('list1').innerHTML = "Reliable hosting with 99.9% Uptime <br/> to keep your website accessible",
                document.getElementById('list2').innerHTML ="SSL certificate for secure online <br/>transactions",
                document.getElementById('list3').innerHTML ="Daily backups and automatic updates to <br/>ensure your data is safe.",
                document.getElementById('list4').innerHTML ="Scalable plans to grow as your business <br/>expands."
            ],
            price: "R349/pm"
        },
        {
            title: "Individuals",
            features: [
                document.getElementById('list1').innerHTML = "Affordable hosting plans for personal <br/>projects or blogs.",
                document.getElementById('list2').innerHTML = "Easy-to-use control panel for <br/>managing your website.",
                document.getElementById('list3').innerHTML = "24/7 support to assist with any <br/>technical issues.",
                document.getElementById('list4').innerHTML = "Free domain name registration for the <br/>first year."
            
            ],
            price: "R199/pm"
        },
        {
            title: "Developers",
            features: [
                document.getElementById('list1').innerHTML = "Flexible hosting environments with <br/>SSH access for custom configurations.",
                document.getElementById('list2').innerHTML = "Support for various programming languages <br/>(e.g., PHP, Python, Node.js).",
                document.getElementById('list3').innerHTML = "Git integration for seamless version <br/>control and deployment.",
                document.getElementById('list4').innerHTML = "Staging environments for testing changes <br/>before going live."
            
            
            ],
            price: "R499/pm"
        }
    ],
    web_development: [
        {
            title: "Small businesses",
            features: [
                document.getElementById('list5').innerHTML = "Custom website development tailored <br/>to your business needs.",
                document.getElementById('list6').innerHTML = "E-commerce solutions for online stores <br/>(shopping carts, payment gateways).",
                document.getElementById('list7').innerHTML = "Integration with third-party <br/>services (CRM, marketing tools).",
                document.getElementById('list8').innerHTML = "Performance optimization for faster loading <br/>times."
            
            
            ],
            price: "R10000"
        },
        {
            title: "Individuals",
            features: [
                document.getElementById('list5').innerHTML = "Personal websites or portfolio <br/>development to showcase your work.",
                document.getElementById('list6').innerHTML = "Blog creation with content management <br/>systems (e.g., WordPress).",
                document.getElementById('list7').innerHTML = "One-page sites for events, hobbies, <br/>or small projects.",
                document.getElementById('list8').innerHTML = "SEO-friendly development to improve search <br/>engine visibility."
            
            
            ],
            price: "R5000"
        },
        {
            title: "Developers",
            features: [
                document.getElementById('list5').innerHTML = "Collaboration on complex web projects <br/>(APIs, web apps).",
                document.getElementById('list6').innerHTML = "Custom scripts and functionalities <br/>based on project requirements.",
                document.getElementById('list7').innerHTML = "Development tools integration <br/>(code editors, project management).",
                document.getElementById('list8').innerHTML = "Backend and frontend development <br/>support."
            
            
            ],
            price: "R15000"
        }
    ],
    web_design: [
        {
            title: "Small businesses",
            features: [
                document.getElementById('list9').innerHTML = "Professional designs that reflect <br/>your brand identity.",
                document.getElementById('list10').innerHTML = "Mobile-responsive layouts for optimal<br/> viewing on all devices.",
                document.getElementById('list11').innerHTML = "User experience (UX) enhancements <br/>for higher customer satisfaction.",
                document.getElementById('list12').innerHTML = "Design consistency across marketing<br/> materials (logos, flyers, etc.)."
            
            
            ],
            price: "R1500"
        },
        {
            title: "Individuals",
            features: [
                document.getElementById('list9').innerHTML = "Personalized designs for blogs, portfolios, <br/>or personal projects.",
                document.getElementById('list10').innerHTML = "User interface (UI) designs that <br/>are easy to navigate.",
                document.getElementById('list11').innerHTML = "Creative graphic design services for <br/>custom illustrations or artwork.",
                document.getElementById('list12').innerHTML = "Templates for personal use, adaptable <br/>to different content."
            
            
            ],
            price: "R800"
        },
        {
            title: "Developers",
            features: [
                document.getElementById('list9').innerHTML = "Wireframing and prototyping for <br/>quick design iterations.",
                document.getElementById('list10').innerHTML = "Custom UI kits and components for <br/>development projects.",
                document.getElementById('list11').innerHTML = "Design system creation for <br/>consistent styling across applications.",
                document.getElementById('list12').innerHTML = "Collaboration on user testing and <br/>feedback integration."
            
            
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


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust this value as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})
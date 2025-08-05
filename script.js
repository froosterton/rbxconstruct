// Particle System Generator
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning and animation delay
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        
        // Random colors
        const colors = ['#ff00ff', '#00ffff', '#ff0080', '#8000ff', '#00ff80', '#ff8000'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = `radial-gradient(circle, ${color}, transparent)`;
        
        particlesContainer.appendChild(particle);
    }
}

// Interactive Card Effects
document.querySelectorAll('.nav-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `translateY(-10px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
    });
});

// CTA Button Function
function startExperience() {
    // Create explosion effect
    const button = document.querySelector('.cta-button');
    button.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        button.style.transform = 'scale(1.1)';
        button.textContent = 'WELCOME TO THE FUTURE!';
        
        // Add screen flash effect
        document.body.style.animation = 'none';
        document.body.style.background = '#ffffff';
        
        setTimeout(() => {
            document.body.style.background = '#0a0a0a';
            button.textContent = 'BEGIN JOURNEY';
            button.style.transform = 'scale(1)';
        }, 200);
    }, 100);
}

// Dynamic Background Color Shift
function dynamicColorShift() {
    const gradientBg = document.querySelector('.gradient-bg');
    let hue = 0;
    
    setInterval(() => {
        hue = (hue + 1) % 360;
        gradientBg.style.filter = `hue-rotate(${hue}deg)`;
    }, 100);
}

// Initialize Effects
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    dynamicColorShift();
    
    // Add entrance animation
    document.querySelector('.container').style.opacity = '0';
    document.querySelector('.container').style.transform = 'translateY(50px)';
    
    setTimeout(() => {
        document.querySelector('.container').style.transition = 'all 1s ease';
        document.querySelector('.container').style.opacity = '1';
        document.querySelector('.container').style.transform = 'translateY(0)';
    }, 100);
});

// Cursor Trail Effect
let mouseX = 0;
let mouseY = 0;
let trail = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function createTrail() {
    if (trail.length > 20) {
        trail.shift();
    }
    
    trail.push({ x: mouseX, y: mouseY });
    
    trail.forEach((point, index) => {
        const trailElement = document.createElement('div');
        trailElement.style.position = 'fixed';
        trailElement.style.left = point.x + 'px';
        trailElement.style.top = point.y + 'px';
        trailElement.style.width = '4px';
        trailElement.style.height = '4px';
        trailElement.style.background = `rgba(0, 255, 255, ${0.8 - (index * 0.04)})`;
        trailElement.style.borderRadius = '50%';
        trailElement.style.pointerEvents = 'none';
        trailElement.style.zIndex = '1000';
        
        document.body.appendChild(trailElement);
        
        setTimeout(() => {
            document.body.removeChild(trailElement);
        }, 500);
    });
}

setInterval(createTrail, 50);
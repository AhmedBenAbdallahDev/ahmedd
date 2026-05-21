// Terminal interface loaded
console.log("SYSTEM://AHMED_DEV.EXE initialized");

// Boot sequence animation
document.addEventListener('DOMContentLoaded', function() {
    const bootLines = document.querySelectorAll('.boot-line');
    
    bootLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.5}s`;
        line.style.opacity = '0';
        
        setTimeout(() => {
            line.style.opacity = '0.7';
        }, (index * 500) + 500);
    });
    
    // Show main interface after boot sequence
    const mainInterface = document.querySelector('.main-interface');
    mainInterface.style.opacity = '0';
    
    setTimeout(() => {
        mainInterface.style.animation = 'fadeIn 1s ease-in forwards';
    }, bootLines.length * 500 + 1000);
    
    // Typing effect for commands
    setTimeout(() => {
        animateCommands();
    }, bootLines.length * 500 + 2000);
});

// Add fade in keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .command {
        border-right: 2px solid #4a9eff;
        white-space: nowrap;
        overflow: hidden;
        width: 0;
        animation: typing 2s steps(20, end) forwards, blink-caret 1s step-end infinite;
    }
    
    @keyframes typing {
        from { width: 0; }
        to { width: auto; }
    }
    
    @keyframes blink-caret {
        from, to { border-color: transparent; }
        50% { border-color: #4a9eff; }
    }
`;
document.head.appendChild(style);

function animateCommands() {
    const commands = document.querySelectorAll('.command');
    
    commands.forEach((command, index) => {
        const text = command.textContent;
        command.textContent = '';
        command.style.width = '0';
        
        setTimeout(() => {
            typeText(command, text, 50);
        }, index * 1500);
    });
}

function typeText(element, text, speed) {
    let i = 0;
    element.style.borderRight = '2px solid #4a9eff';
    
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            element.style.borderRight = 'none';
        }
    }, speed);
}

// Interactive project items
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 0.08)';
        this.style.transform = 'translateX(10px)';
        
        // Add very subtle white glow effect
        this.style.boxShadow = '0 2px 10px rgba(255, 255, 255, 0.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.03)';
        this.style.transform = 'translateX(0)';
        this.style.boxShadow = 'none';
    });
    
    item.addEventListener('click', function() {
        // Simulate terminal command execution
        const projectName = this.querySelector('.project-name').textContent;
        showTerminalMessage(`Accessing ${projectName}...`);
        
        setTimeout(() => {
            showTerminalMessage(`Access denied. Project classified.`);
        }, 1000);
    });
});

function showTerminalMessage(message) {
    const outputDiv = document.createElement('div');
    outputDiv.className = 'output';
    outputDiv.style.color = '#ff6b6b';
    outputDiv.style.fontSize = '0.85rem';
    outputDiv.textContent = message;
    
    const activeLine = document.querySelector('.prompt-line.active');
    activeLine.parentNode.insertBefore(outputDiv, activeLine);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        outputDiv.remove();
    }, 3000);
}

// Subtle matrix-like background effect
function createMatrixRain() {
    const chars = '01';
    const columns = Math.floor(window.innerWidth / 20);
    const drops = Array(columns).fill(1);
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.03';
    canvas.style.pointerEvents = 'none';
    
    document.body.appendChild(canvas);
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#4a9eff';
        ctx.font = '12px JetBrains Mono';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * 20, drops[i] * 20);
            
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 100);
}

// Initialize matrix effect (very subtle)
setTimeout(createMatrixRain, 3000);

// Terminal-style keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl+C to clear "screen"
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        showTerminalMessage('^C');
        setTimeout(() => {
            showTerminalMessage('Process interrupted.');
        }, 200);
    }
    
    // Ctrl+L to "clear" (just add some space)
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        const spacer = document.createElement('div');
        spacer.style.height = '2rem';
        const activeLine = document.querySelector('.prompt-line.active');
        activeLine.parentNode.insertBefore(spacer, activeLine);
    }
});

// Smooth scrolling for terminal content
const terminalContent = document.querySelector('.terminal-content');
let isScrolling = false;

terminalContent.addEventListener('wheel', function(e) {
    e.preventDefault();
    
    if (!isScrolling) {
        isScrolling = true;
        
        const delta = Math.sign(e.deltaY) * 50;
        const targetScroll = this.scrollTop + delta;
        
        this.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            isScrolling = false;
        }, 100);
    }
});

// Add ambient sound effect (optional - commented out)
/*
function playAmbientSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.01, audioContext.currentTime);
    
    oscillator.start();
    setTimeout(() => oscillator.stop(), 100);
}
*/

console.log("All systems operational. Welcome to the matrix.");
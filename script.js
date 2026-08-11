// ========================================
// Navbar Scroll
// ========================================

(function() {
    const navbar = document.getElementById('navbar');
    const hero = document.getElementById('hero');
    
    if (!navbar || !hero) return;
    
    function handleNavbarScroll() {
        const heroHeight = hero.offsetHeight;
        const scrollY = window.scrollY || window.pageYOffset;
        
        if (scrollY > heroHeight * 0.8) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll();
})();

// ========================================
// Hero Play / Unmute Button
// ========================================

(function() {
    const iframe = document.getElementById('hero-video');
    const btn = document.getElementById('hero-play-btn');
    
    if (!iframe || !btn) return;
    
    const player = new Vimeo.Player(iframe);
    let isMuted = true;
    const icon = btn.querySelector('img');
    
    btn.addEventListener('click', function() {
        if (isMuted) {
            player.setVolume(1);
            icon.src = 'imgs/icons/sound.svg';
            btn.setAttribute('aria-label', 'Mute');
            isMuted = false;
        } else {
            player.setVolume(0);
            icon.src = 'imgs/icons/no-sound.svg';
            btn.setAttribute('aria-label', 'Unmute');
            isMuted = true;
        }
    });

    const fullscreenBtn = document.getElementById('hero-fullscreen-btn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', function() {
            player.requestFullscreen();
        });
    }
})();

// ========================================
// Fade-in Animations on Scroll
// ========================================

function initFadeAnimations() {
    const sections = document.querySelectorAll('.fade-section');
    
    if (!sections.length) return;
    
    function checkVisibility() {
        sections.forEach(function(section) {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top < windowHeight * 0.85) {
                section.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
}

initFadeAnimations();

// ========================================
// Script Show More / Less
// ========================================

(function() {
    const boxes = document.querySelectorAll('.script-box');

    if (!boxes.length) return;

    boxes.forEach(function(box) {
        const toggle = box.querySelector('.script-toggle');
        const content = box.querySelector('.script-content');

        if (!toggle || !content) return;

        toggle.addEventListener('click', function() {
            const isOpen = box.classList.toggle('open');

            if (isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
                toggle.textContent = 'إخفاء النص';
                toggle.setAttribute('aria-expanded', 'true');
            } else {
                content.style.maxHeight = '260px';
                toggle.textContent = 'عرض النص الكامل';
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
})();

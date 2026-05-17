document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. DYNAMIC NAVIGATION ON SCROLL
    // ==========================================
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {

            navbar.classList.add(
                'py-4',
                'bg-black/80',
                'border-b',
                'border-white/10'
            );
            navbar.classList.remove(
                'py-8',
                'bg-white/5'
            );
        } else {
            navbar.classList.add(
                'py-8',
                'bg-white/5'
            );
            navbar.classList.remove(
                'py-4',
                'bg-black/80'
            );
        }
    });

    // ==========================================
    // 2. SCROLL SPY (INDIKATOR MENU AKTIF)
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav div.hidden a');

    function scrollSpy() {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove(
                'text-secondary',
                'border-b',
                'border-secondary'
            );
            link.classList.add('text-on-surface/60');

            // Kecualikan "Outer Planets" jika mencakup Mars dan Saturn
            const href = link.getAttribute('href');
            if (
                href === `#${currentSectionId}` ||
                (href === '#saturn' && currentSectionId === 'mars')
            ) {
                link.classList.add(
                    'text-secondary',
                    'border-b',
                    'border-secondary'
                );
               link.classList.remove('text-on-surface/60');
            }
        });
    }

    window.addEventListener('scroll', scrollSpy);
    scrollSpy();

    // ==========================================
    // 3. PARALLAX EFFECT FOR PLANET IMAGES
    // ==========================================
    const bgImages = document.querySelectorAll('section img');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        bgImages.forEach(img => {
            const parentSection = img.closest('section');
            if (parentSection) {
                const sectionTop = parentSection.offsetTop;
                const viewShift = scrolled - sectionTop;

                // Berikan pergeseran Y transisi lambat jika section mendekati viewport
                if (Math.abs(viewShift) < window.innerHeight) {
                    img.style.transform =
                        `translateY(${viewShift * 0.08}px) scale(1.05)`;
                }
            }
        });
    });

    // ==========================================
    // 4. INTERACTIVE BUTTON CLICKS
    // ==========================================
    const primaryButtons = document.querySelectorAll('button');
    primaryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnText = e.target.innerText.trim();
            if (
                btnText === "MISSION" ||
                btnText === "START EXPLORATION"
            ) {
                const target = document.getElementById('earth');
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } else if (
                btnText === "VIEW TOPOGRAPHY" ||
                btnText === "RESEARCH ARCHIVES"
            ) {

               alert(
                    `CELESTIA: Membuka enkripsi data ${btnText}...`
                );
            }
        });
    });

    // ==========================================
    // 5. TYPING EFFECT HERO TITLE
    // ==========================================
    const heroTitle = document.querySelector('h1');
    if (heroTitle) {
        const originalText = heroTitle.innerText;
        heroTitle.innerText = '';
        let index = 0;
        function typingEffect() {
            if (index < originalText.length) {
                heroTitle.innerText += originalText.charAt(index);
                index++;
                setTimeout(typingEffect, 40);
            }
        }
        typingEffect();
    }

    // ==========================================
    // 6. LOADING ANIMATION
    // ==========================================
    document.body.style.opacity = "0";
    window.addEventListener("load", () => {
        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "1";
    });

    // ==========================================
    // 7. CONSOLE STATUS
    // ==========================================
    console.log("CELESTIA SYSTEM ACTIVE 🚀");
    console.log("Planet navigation initialized...");
});
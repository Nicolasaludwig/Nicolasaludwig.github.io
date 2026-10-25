// Geração dinâmica de estrelas de fundo
for (let i = 0; i < 25; i++) {
    const star = document.createElement('div');
    star.className = 'star-particle';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    const size = Math.random() * 12 + 6 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(star);
}

// Efeito 3D tilt no card da foto
const photoCard = document.getElementById('photoCard');

if (photoCard) {
    photoCard.addEventListener('mousemove', (e) => {
        const rect = photoCard.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        photoCard.style.transform = `perspective(1000px) rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) scale(1.02)`;
    });

    photoCard.addEventListener('mouseleave', () => {
        photoCard.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
    });
}

// Efeito Ripple nos botões e cards
const buttons = document.querySelectorAll('.btn-primary, .btn-glass, .project-card');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;
        
        let ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'translate(-50%, -50%) scale(0)';
        ripple.style.animation = 'rippleAnim 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Regra CSS dinâmica para o ripple
const styleSheet = document.styleSheets[0];
if (styleSheet) {
    try {
        styleSheet.insertRule(`
            @keyframes rippleAnim {
                to {
                    transform: translate(-50%, -50%) scale(15);
                    opacity: 0;
                }
            }
        `, styleSheet.cssRules.length);
    } catch(err) {}
}

console.log("%c✦ Arquivos separados carregados com sucesso! ✦", "background: #020817; color: #93c5fd; padding: 10px; font-weight: bold; border-radius: 5px;");
document.addEventListener('DOMContentLoaded', function() {
    // Configuração do slider de fotos
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;
    
    // Função para mostrar slide
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Event listeners para os botões
    prevBtn.addEventListener('click', () => {
        resetInterval();
        showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        resetInterval();
        showSlide(currentSlide + 1);
    });
    
    // Auto-avanço dos slides
    function startSlideShow() {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000); // Muda a cada 5 segundos
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        startSlideShow();
    }
    
    // Inicia com o primeiro slide visível e inicia o slideshow
    showSlide(0);
    startSlideShow();
    
    // ... (mantenha o restante do código existente) ...
});
document.addEventListener('DOMContentLoaded', function() {
    // Configuração do slider de fotos
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    
    // Inicializa o slider
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Event listeners para os botões
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    
    // Inicia com o primeiro slide visível
    showSlide(0);
    
    // Adiciona corações aleatórios que flutuam
    function createHearts() {
        const container = document.querySelector('.hearts-container');
        const colors = ['#ff6b8b', '#ff8fab', '#ffb3c6', '#ffcad4', '#ff758f'];
        
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            const size = Math.random() * 20 + 10;
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 15;
            const left = Math.random() * 100;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            heart.style.left = `${left}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.animationDuration = `${duration}s`;
            heart.style.animationDelay = `${delay}s`;
            heart.style.backgroundColor = color;
            
            container.appendChild(heart);
        }
    }
    
    createHearts();
    
    // Animação de piscar para o título
    const title = document.querySelector('.title');
    setInterval(() => {
        title.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.1)';
        setTimeout(() => {
            title.style.textShadow = '0 0 10px rgba(210, 60, 119, 0.7), 0 0 20px rgba(210, 60, 119, 0.5)';
        }, 500);
    }, 2000);
    
    // Efeito de digitação para a mensagem (opcional)
    const message = document.querySelector('.message');
    const originalText = message.innerHTML;
    message.innerHTML = '';
    
    let i = 0;
    const typingSpeed = 30;
    
    function typeWriter() {
        if (i < originalText.length) {
            message.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    
    // Inicia o efeito de digitação quando a página carrega
    setTimeout(typeWriter, 2500);
});

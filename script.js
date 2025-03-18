document.addEventListener('DOMContentLoaded', () => {
    // 移动端菜单切换
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 滚动动画
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // 时间轴交互
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.02)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // 技能徽章点击效果
    document.querySelectorAll('.badge').forEach(badge => {
        badge.addEventListener('click', () => {
            badge.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                badge.style.transform = 'rotate(0deg)';
            }, 500);
            console.log(`Clicked skill: ${badge.textContent}`);
        });
    });

    // 导航栏滚动效果
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const nav = document.querySelector('.main-nav');
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.style.top = '-70px';
        } else {
            nav.style.top = '0';
        }
        lastScroll = currentScroll;
    });

    // 移动端自动隐藏菜单
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });

    // 初始化隐藏移动端菜单
    if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
    }
});

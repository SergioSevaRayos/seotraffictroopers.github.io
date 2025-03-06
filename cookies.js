document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const rejectCookiesButton = document.getElementById('reject-cookies');
    const configCookiesButton = document.getElementById('config-cookies');
    const cookieConfig = document.getElementById('cookie-config');
    const saveCookiesButton = document.getElementById('save-cookies');
    const cookiesAnaliticas = document.getElementById('cookies-analiticas');
    const cookiesMarketing = document.getElementById('cookies-marketing');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.add('show');
    }

    acceptCookiesButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', JSON.stringify({ necesarias: true, analiticas: true, marketing: true }));
        cookieBanner.classList.remove('show');
    });

    rejectCookiesButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', JSON.stringify({ necesarias: true, analiticas: false, marketing: false }));
        cookieBanner.classList.remove('show');
    });

    configCookiesButton.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
        cookieConfig.style.display = 'block';
    });

    saveCookiesButton.addEventListener('click', function() {
        const config = {
            necesarias: true,
            analiticas: cookiesAnaliticas.checked,
            marketing: cookiesMarketing.checked
        };
        localStorage.setItem('cookiesAccepted', JSON.stringify(config));
        cookieConfig.style.display = 'none';
    });
});
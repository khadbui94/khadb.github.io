function toTop(event) {
    if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function setupNavigationToggle() {
    const toggle = document.getElementById('navToggle');
    const navigation = document.getElementById('primary-navigation');

    if (!toggle || !navigation) {
        return;
    }

    toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isExpanded));
        navigation.classList.toggle('is-open');
    });

    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            toggle.setAttribute('aria-expanded', 'false');
            navigation.classList.remove('is-open');
        });
    });
}

function setupScrollButton() {
    const toTopButton = document.getElementById('topBtn');

    if (!toTopButton) {
        return;
    }

    toTopButton.addEventListener('click', toTop);

    const toggleButtonVisibility = () => {
        if (window.scrollY > 200) {
            toTopButton.classList.add('show');
        } else {
            toTopButton.classList.remove('show');
        }
    };

    toggleButtonVisibility();
    window.addEventListener('scroll', toggleButtonVisibility);
}

window.addEventListener('DOMContentLoaded', () => {
    updateCurrentYear();
    setupNavigationToggle();
    setupScrollButton();
});

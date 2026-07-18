/**
 * Maria Asad — Portfolio
 * Vanilla JS — no dependencies
 */

document.addEventListener('DOMContentLoaded', function () {

    // ===== DOM REFS =====
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const allNavLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section, header');

    // ===== MOBILE MENU TOGGLE =====
    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('nav__toggle--open');
        navLinks.classList.toggle('nav__links--open');
    });

    // Close mobile menu when a link is clicked
    allNavLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navToggle.classList.remove('nav__toggle--open');
            navLinks.classList.remove('nav__links--open');
        });
    });

    // ===== ACTIVE NAV LINK ON SCROLL =====
    function updateActiveLink() {
        var scrollPos = window.scrollY + 100;

        sections.forEach(function (section) {
            var id = section.getAttribute('id');
            if (!id) return;

            var top = section.offsetTop;
            var height = section.offsetHeight;

            if (scrollPos >= top && scrollPos < top + height) {
                allNavLinks.forEach(function (link) {
                    link.classList.remove('nav__link--active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('nav__link--active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // ===== SCROLL REVEAL =====
    var revealElements = document.querySelectorAll(
        '.timeline__item, .skills__group, .education__card, .certifications__badge, .languages__card, .publications__card, .contact__item'
    );

    revealElements.forEach(function (el) {
        el.classList.add('reveal');
    });

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal--visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    revealElements.forEach(function (el) {
        observer.observe(el);
    });

    // ===== STAGGER TIMELINE ITEMS =====
    var timelineItems = document.querySelectorAll('.timeline__item.reveal');
    timelineItems.forEach(function (item, index) {
        item.style.transitionDelay = (index * 0.1) + 's';
    });

});

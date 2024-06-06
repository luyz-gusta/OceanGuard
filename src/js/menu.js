document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('open');
        const spans = menuToggle.getElementsByClassName('menu-span');
        for (let span of spans) {
            span.classList.toggle('clicked');
            span.classList.toggle('unclicked');
        }
    });

    const links = document.querySelectorAll('.link-menu');
    links.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('open');
            const spans = menuToggle.getElementsByClassName('menu-span');
            for (let span of spans) {
                span.classList.remove('clicked');
                span.classList.add('unclicked');
            }
        });
    });
});

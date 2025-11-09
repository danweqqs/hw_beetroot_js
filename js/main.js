$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4500,
        slidesToShow: 1,
        speed: 1400,
        dots: true,
        arrows: false,
        fade: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                    autoplaySpeed: 1000,
                }
            }
        ]
    });

    $('.news__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        prevArrow: `
        <button type="button" class="slick-prev">
            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.27009 0.502223C8.32589 0.558027 8.3538 0.622201 8.3538 0.694745C8.3538 0.76729 8.32589 0.831464 8.27009 0.887268L4.36942 4.78794C4.31362 4.84374 4.24944 4.87164 4.1769 4.87164C4.10435 4.87164 4.04018 4.84374 3.98438 4.78794L0.0837054 0.887268C0.0279018 0.831464 0 0.76729 0 0.694745C0 0.622201 0.0279018 0.558027 0.0837054 0.502223L0.502232 0.0836961C0.558036 0.0278928 0.62221 0 0.694754 0C0.767299 0 0.831473 0.0278928 0.887277 0.0836961L4.1769 3.37332L7.46652 0.0836961C7.52232 0.0278928 7.5865 0 7.65904 0C7.73159 0 7.79576 0.0278928 7.85156 0.0836961L8.27009 0.502223Z"
                    fill="white"/>
            </svg>
        </button>`,
        nextArrow: `
        <button type="button" class="slick-next">
            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.27009 0.502223C8.32589 0.558027 8.3538 0.622201 8.3538 0.694745C8.3538 0.76729 8.32589 0.831464 8.27009 0.887268L4.36942 4.78794C4.31362 4.84374 4.24944 4.87164 4.1769 4.87164C4.10435 4.87164 4.04018 4.84374 3.98438 4.78794L0.0837054 0.887268C0.0279018 0.831464 0 0.76729 0 0.694745C0 0.622201 0.0279018 0.558027 0.0837054 0.502223L0.502232 0.0836961C0.558036 0.0278928 0.62221 0 0.694754 0C0.767299 0 0.831473 0.0278928 0.887277 0.0836961L4.1769 3.37332L7.46652 0.0836961C7.52232 0.0278928 7.5865 0 7.65904 0C7.73159 0 7.79576 0.0278928 7.85156 0.0836961L8.27009 0.502223Z"
                    fill="white"/>
            </svg>
        </button>`,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    });
});


document.querySelector('.slider-arrow').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});


const images = document.querySelectorAll('.project__image img');
function moveImagesOnScroll() {
    const screenHeight = window.innerHeight;

    images.forEach(img => {
        const top = img.getBoundingClientRect().top;
        const visible = top < screenHeight * 0.8;

        if (visible) {
            const moveX = img.closest('.project__reverse') ? -100 : 100;
            img.style.transform = `translate(${moveX}px, 50px)`;
        } else {
            img.style.transform = 'translate(0, 0)';
        }
    });
}
window.addEventListener('scroll', moveImagesOnScroll);
moveImagesOnScroll();


document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".gallery__toggle");
    const extra = document.querySelector(".gallery__extra");

    btn.addEventListener("click", () => {
        extra.classList.toggle("visible");
        btn.textContent = extra.classList.contains("visible") ? "SEE LESS" : "SEE MORE";
    });
});


const map = L.map('map').setView([35.84217, 14.48942], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([35.858802, 14.488365])
    .addTo(map)
    .bindPopup('Central office, Malta')
    .openPopup();

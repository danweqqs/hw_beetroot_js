import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CountrySlider.scss";

const countries = [
    {
        id: 1,
        name: "France",
        fact: "France is the most visited country in the world, with over 89 million tourists annually.",
        img: "https://images.unsplash.com/photo-1471623432079-b009d30b6729?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        name: "Italy",
        fact: "Italy has more UNESCO World Heritage Sites than any other country in the world.",
        img: "https://images.unsplash.com/photo-1549893072-4bc678117f45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Ukraine",
        fact: "The geographic center of Europe is located in Ukraine, near the town of Rakhiv.",
        img: "https://images.unsplash.com/photo-1559588512-cae70b7dd3d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        name: "Germany",
        fact: "There are over 20,000 castles in Germany, some dating back to the Middle Ages.",
        img: "https://images.unsplash.com/photo-1554072675-66db59dba46f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        name: "Spain",
        fact: "Spain produces over 40% of the world's olive oil, more than Italy and Greece combined.",
        img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

export default function CountrySlider() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 4500,
        slidesToShow: 1,
        speed: 1400,
        dots: true,
        arrows: false,
        fade: true,
        adaptiveHeight: false,
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
    };

    return (
        <section className="country-slider-section">
            <h2 className="section-title">Discover the World</h2>

            <div className="slider-wrapper">
                <Slider {...settings}>
                    {countries.map((country) => (
                        <div key={country.id} className="slide-item">
                            <img src={country.img} alt={country.name} className="slide-bg" />
                            <div className="slide-content">
                                <h3>{country.name}</h3>
                                <p>{country.fact}</p>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
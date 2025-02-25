import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft, faCircle} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useRef, useState} from "react";

function Slider({ slides }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        updateSlidePosition();
    }, [currentIndex]);

    function updateSlidePosition() {
        const sliderWrapper = sliderRef.current;
        if (sliderWrapper) {
            const slideElements = document.querySelectorAll(".slide");
            if (slideElements.length === 0 || !sliderWrapper) return;
            const slideWidthElement = slideElements[0].getBoundingClientRect().width;
            const gap = parseFloat(getComputedStyle(sliderWrapper).gap) || 0;
            const slideWidth = slideWidthElement + gap;
            const offset = (sliderWrapper.parentElement.offsetWidth - slideWidthElement) / 2;
            sliderWrapper.style.transform = `translateX(${offset - currentIndex * slideWidth}px)`;
        }
    }

    function nextSlide() {
        setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1));
    }

    function prevSlide() {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }

    function goToSlide(index) {
        setCurrentIndex(index);
    }

    return (
        <div className="slider">
            <div className="slider-wrapper" ref={sliderRef}>
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <div className="slide-text">
                            <p>{slide.text}</p>
                        </div>
                        <div className="slide-info">
                            <h3>{slide.name}</h3>
                            <span>{slide.subtitle}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="slider-buttons">
                <button className='arrow-button-slider' onClick={prevSlide} disabled={currentIndex === 0}>
                    <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon-slider" />
                </button>
                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} onClick={() => goToSlide(index)}>
                            <FontAwesomeIcon icon={faCircle} />
                        </span>
                    ))}
                </div>
                <button className='arrow-button-slider' onClick={nextSlide} disabled={currentIndex === slides.length - 1}>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-icon-slider" />
                </button>
            </div>
        </div>
    );
}

export default Slider;
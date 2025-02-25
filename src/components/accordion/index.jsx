import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";

function Accordion({ blocks }) {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (openIndex !== null && !event.target.closest('.accordion')) {
                setOpenIndex(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [openIndex]);

    return (
        <div className="accordion" onClick={(e) => e.stopPropagation()}>
            {blocks.map((block, i) => (
                <div key={i} className={`accordion__item ${openIndex === i ? "open" : ""}`}>
                    <div className="accordion__header" onClick={() => toggleAccordion(i)}>
                        <h2>
                            <span className="accordion__index">{block.index}</span>
                            <span className="accordion__title">{block.title}</span>
                        </h2>
                        <div className="accordion__header-button">
                            <FontAwesomeIcon
                                icon={openIndex === i ? faMinus : faPlus}
                                className={`accordion__icon ${openIndex === i ? "rotate-open" : "rotate-close"}`}
                            />
                        </div>
                    </div>
                    <div className="accordion__wrapper">
                        <div className="accordion__content">
                            {block.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
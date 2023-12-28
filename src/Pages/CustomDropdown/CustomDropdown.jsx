import React, { useState } from 'react';
import '../ListPropertys/Listing.css';


const CustomDropdown = ({ options, defaultOption }) => {
    const [selectedOption, setSelectedOption] = useState(defaultOption);

    const handleItemClick = (option) => {
        setSelectedOption(option);
        console.log('Selected Option:', option);
    };

    return (
        <div className="dropdown-center drop__down">
            <button className="dropdown__btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedOption}<i className="fa-solid fa-chevron-down" />
            </button>
            <ul className="dropdown-menu dropdown__menu__listing">
                {options.map((option) => (
                    <li key={option}>
                        <a className="dropdown-item dropdown__item__listing" href="#" onClick={() => handleItemClick(option)}>
                            {option}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomDropdown;

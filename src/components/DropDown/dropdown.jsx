import React, { useState } from 'react';
import Select from 'react-select';
import style from './dropdown.module.css';
import gnosis from '../../assets/images/gnosis.png';
import ethereum from '../../assets/images/ethereum.png';


const DropdownComponent = () => {
    const options = [
        {
            value: 'option1',
            label: (
                <div>
                    <img src={gnosis} alt="Option 1" style={{ width: '25px', height: '25px' }} />
                </div>
            ),
        },
        {
            value: 'option2',
            label: (
                <div>
                    <img src={ethereum} alt="Option 2" style={{ width: '25px', height: '25px' }} />
                </div>
            ),
        },
    ];

    const defaultOption = options.find((option) => option.value === 'option1');

    const [selectedOption, setSelectedOption] = useState(defaultOption);

    const handleOptionChange = (selected) => {
        setSelectedOption(selected);
        console.log(selected);
    };

    return (
        <Select
            className={style.dropdown}
            options={options}
            value={selectedOption}
            onChange={handleOptionChange}
            isClearable
            placeholder="Gnosis"
            
        />
    );
};

export default DropdownComponent;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './date.module.css';
import axios from 'axios';

const Date = ({ menuItems, Date}) => {
    const [selectedMenu, setSelectedMenu] = useState('All Time');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    useEffect(() => {
        setSelectedMenu(selectedMenu);
    }, [selectedMenu]);


    return (
        <div className={style.menu}>
            {menuItems.map((menu, index) => (
                <div
                    key={index}
                    className={`${selectedMenu === menu ? style.selected : style.menuItem}`}
                    onClick={() => handleMenuClick(menu)}
                >
                    {menu}
                </div>
            ))}
        </div>
    );
};

export default Date;

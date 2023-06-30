import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './menu.module.css';
import axios from 'axios';

const Menu = ({ menuItems, address }) => {
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState('UserBrief');

    const handleMenuClick = (menu) => {
        console.log(menu);
        setSelectedMenu(menu);
        navigate(`/${menu}/${address}`);
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

export default Menu;


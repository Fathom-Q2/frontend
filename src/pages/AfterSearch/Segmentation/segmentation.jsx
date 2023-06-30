import React from 'react';
import CustomTextField from '../../../components/TextField/customedTextField';
import Menu from '../../../components/Menu/menu';
import style from './segmentation.module.css';
import { useParams, useNavigate } from 'react-router-dom';


function Segmentation(props) {
    const { address } = useParams();
    const menuItems = ['UserBrief', 'TxBrief', 'Segmentation', 'Funnel', 'Templates'];


    return (
        <div>
            <div className={style.header}>
                <h2 style={{ flex: 4 }}>WalletMetrics</h2>
                <h4 style={{ flex: 3 }}>Docs</h4>
                <h4 style={{ flex: 3 }}>Twitter</h4>
                <CustomTextField width={'700px'} />
            </div>
            <div className={style.mainmenu}>
                <Menu menuItems={menuItems} address={address} />
            </div>
        </div>
    );
}

export default Segmentation;
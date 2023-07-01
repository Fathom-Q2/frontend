import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './home.module.css';
import SushiSwap from '../../assets/images/SushiSwap.png';
import HopProtocol from '../../assets/images/HopProtocol.png';
import NFTx from '../../assets/images/NFTx.png';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import purple from '../../assets/images/purple.png';
import blue from '../../assets/images/blue.png';
import yellow from '../../assets/images/yellow.png';
import green from '../../assets/images/green.png';
import red from '../../assets/images/red.png';
import lightPurple from '../../assets/images/lightPurple.png';
import pink from '../../assets/images/pink.png';
import white from '../../assets/images/white.png';
import lightGray from '../../assets/images/lightGray.png';
import CustomTextField from '../../components/TextField/customedTextField';
import agave from '../../assets/images/agave.png';
import balancer from '../../assets/images/balancer.png';
import baoFinance from '../../assets/images/baoFinance.png';
import curve from '../../assets/images/curve.png';
import honey from '../../assets/images/honeySwap.png';
import stake from '../../assets/images/stakeWise.png';
import DropdownComponent from '../../components/DropDown/dropdown';
import topImg from '../../assets/images/topimg.png';
import drop from '../../assets/images/drop.png';
import pickGno from '../../assets/images/pickGno.png';
import logo from '../../assets/images/WalletMetrics.png';





function Home(props) {
  const [address, setAddress] = useState("");
  const [onClick, setOnclick] = useState(false);
  const [sethoney, setSetHoney] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = () => {
    console.log(address);
    setAddress('');
    navigate(`/userbrief/${address}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const onClickGno = () => {
    setOnclick(prevState => !prevState);
  };

  const clickHoney = () => {
    setSetHoney(true);
  }


  return (
    <div>
      <div>
        <img src={topImg} className={style.top} />
      </div>

      <div className={style.wrapper}>

        <div className={style.column}>

          <div className={style.title}>
          <img src={logo} className={style.logo} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CustomTextField honey ={sethoney} onClick={clickHoney}/>
            <div className={style.columnContainer}>
              <div>
                <img src={drop} className={style.drop} onClick={onClickGno} />
              </div>
              {onClick ? (
                <div>
                  <img src={pickGno} className={style.gno} />
                </div>
              )
                : (
                  <div className={style.emptySpace} style={{ height: '120px' }} />
                )}
            </div>
          </div>
          <div className={style.apps}>
            Apps
          </div>
          <div className={style.container}>
            <div className={style.grid}>
              <div className={style.gridItem} style={{ backgroundImage: `url(${yellow})` }} >
                <div className={style.column}>
                  <img src={honey} alt="dydx" />
                  <h2>Honeyswap</h2>
                </div>
              </div>
              <div className={style.gridItem} style={{ backgroundImage: `url(${green})` }}>
                <div className={style.column}>
                  <img src={agave} alt="ParaSwap" />
                  <h2>Agave</h2>
                </div>
              </div>
              <div className={style.gridItem} style={{ backgroundImage: `url(${red})` }}>
                <div className={style.column}>
                  <img src={curve} alt="Audius" />
                  <h2>Curve Finance</h2>
                </div>
              </div>

              <div className={style.gridItem} style={{ backgroundImage: `url(${purple})` }}>
                <div className={style.column}>
                  <img src={stake} alt="Lido" />
                  <h2>Stackwise</h2>
                </div>
              </div>
              <div className={style.gridItem} style={{ backgroundImage: `url(${lightGray})` }}>
                <div className={style.column}>
                  <img src={baoFinance} alt="NFTx" />
                  <h2>Bao Finance</h2>
                </div>
              </div>

              <div className={style.gridItem} style={{ backgroundImage: `url(${white})` }}>
                <div className={style.column}>
                  <img src={balancer} alt="DODO" />
                  <h2>Balancer</h2>
                </div>
              </div>
              <div className={style.gridItem} style={{ backgroundImage: `url(${lightPurple})` }}>
                <div className={style.column}>
                  <img src={SushiSwap} alt="Sushi" />
                  <h2>SushiSwap</h2>
                </div>
              </div>
              <div className={style.gridItem} style={{ backgroundImage: `url(${pink})` }}>
                <div className={style.column}>
                  <img src={HopProtocol} alt="Hop" />
                  <h2>Hop Protocol</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
import React, { useEffect, useState } from 'react';
import style from './userBrief.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import ApexChart from "react-apexcharts";
import axios, { AxiosHeaders } from "axios";
import CustomTextField from '../../../components/TextField/customedTextField';
import Menu from '../../../components/Menu/menu';
import ChartComponent from '../../../components/Charts/apexChart';
import Date from '../../../components/Date/date';
import topImg from '../../../assets/images/topimg.png';
import day from '../../../assets/images/1day.png';
import week from '../../../assets/images/1week.png';
import month from '../../../assets/images/1month.png';
import taw from '../../../assets/images/taw.png';
import daw from '../../../assets/images/daw.png';
import waw from '../../../assets/images/waw.png';
import maw from '../../../assets/images/maw.png';
import loadingGif from '../../../assets/images/loading.gif';


function UserBrief() {
    const { address } = useParams();
    const menuItems = ['UserBrief', 'TxBrief', 'Segmentation', 'Funnel', 'Templates'];
    const timeItems = ['All Time', 'Day', 'Week', 'Month'];
    const [selectedTimeItem, setSelectedTimeItem] = useState('All Time');
    const [selectedMenuItem, setSelectedMenuItem] = useState('UserBrief');
    const [isLoading, setIsLoading] = useState(true);


    const [dummyData, setDummyData] = useState([
        { newWalletNum: 10, startDate: '2023-01-01', endDate: '2023-01-07', newWalletCumulativeNum: 10 },
        { newWalletNum: 20, startDate: '2023-01-08', endDate: '2023-01-14', newWalletCumulativeNum: 30 },
        { newWalletNum: 15, startDate: '2023-01-15', endDate: '2023-01-21', newWalletCumulativeNum: 45 },
        { newWalletNum: 30, startDate: '2023-01-22', endDate: '2023-01-28', newWalletCumulativeNum: 75 },
        { newWalletNum: 25, startDate: '2023-01-29', endDate: '2023-02-04', newWalletCumulativeNum: 100 },
    ]);

    const [datasNum, setDatasNum] = useState([]);
    const [newDatasChart, setNewDatasChart] = useState([]);
    const [newDatasHistory, setDatasHistory] = useState([]);
    const [newDatasList, setDatasList] = useState([]);
    const [response, setResponse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/address?protocolAddress=${address}`,)
            .then((response) => {
                console.log(response.data);
                console.log(response.data['newDatasChart']['newDatasMonthChart']);

                setResponse(response.data);
                setDatasNum(response.data['datasNum']);
                setNewDatasChart(response.data['newDatasChart']['newDatasMonthChart']);
                setDatasHistory(response.data['newDatasHistory']);
                setDatasList(response.data['newDatasList'].slice(0, 6));
                setIsLoading(false); 
            })
            .catch(function (error) {
                console.error('error couldnt');
                setIsLoading(false);
            })
    }, []);



    useEffect(() => {
        console.log(newDatasChart);
        if (!isLoading) {
            if (selectedTimeItem === 'All Time') {
                // setNewDatasChart(newDatasChart['newDatasMonthChart']);
                setNewDatasChart(response['newDatasChart']['newDatasMonthChart']);
            } else if (selectedTimeItem === 'Day') {
                // setNewDatasChart(newDatasChart['newDatasDayChart']);
                setNewDatasChart(response['newDatasChart']['newDatasDayChart']);
            } else if (selectedTimeItem === 'Week') {
                // setNewDatasChart(newDatasChart['newDatasWeekChart']);
                setNewDatasChart(response['newDatasChart']['newDatasWeekChart']);
            } else if (selectedTimeItem === 'Month') {
                // setNewDatasChart(newDatasChart['newDatasMonthChart']);
                setNewDatasChart(response['newDatasChart']['newDatasMonthChart']);
            }
        }
    }, [isLoading, selectedTimeItem, newDatasChart]);

    const dummyWalletAddresses = [
        'Address 1',
        'Address 2',
        'Address 3',
        'Address 4',
        'Address 5',
        'Address 6',
    ];

    // const dummyData = [
    //     { newWalletNum: 10, startDate: '2023-01-01', endDate: '2023-01-07', newWalletCumulativeNum: 10 },
    //     { newWalletNum: 20, startDate: '2023-01-08', endDate: '2023-01-14', newWalletCumulativeNum: 30 },
    //     { newWalletNum: 15, startDate: '2023-01-15', endDate: '2023-01-21', newWalletCumulativeNum: 45 },
    //     { newWalletNum: 30, startDate: '2023-01-22', endDate: '2023-01-28', newWalletCumulativeNum: 75 },
    //     { newWalletNum: 25, startDate: '2023-01-29', endDate: '2023-02-04', newWalletCumulativeNum: 100 },
    //   ];

    //    useEffect(() => {
    //     axios.post(`http://localhost:3000/sync?protocolAddress=${address}`)
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.error(error.response);
    //         })
    // }, [])



    if (isLoading) {
        return (
            <div>
                <div>
                    <img src={topImg} className={style.top} />
                </div>
                <div className={style.loadingContainer}>
                    <img src={loadingGif} alt="Loading" className={style.loadingSpinner} />
                </div>

            </div>

        );
    } else {
        console.log(selectedMenuItem);
        return (
            <div>
                <div>
                    <img src={topImg} className={style.top} />
                </div>
                <div className={style.briefbody}>
                    <div className={style.mainmenu}>
                    <Menu menuItems={menuItems} address={address} selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
                    </div>
                    <div className={style.maincontents}>
                        <div className={style.history} style={{ flex: 2 }}>
                            <h3 className={style.subtitle} style={{ color: 'white' }}>Wallet Flow History</h3>
                            <div className={style.boxcontainer}>
                                <img className={style.container0} src={day} alt="Day" />
                                <span className={style.innerText}>{newDatasHistory['day']}%</span>
                            </div>
                            <div className={style.boxcontainer}>
                                <img className={style.container0} src={week} alt="Week" />
                                <span className={style.innerText}>{newDatasHistory['week']}%</span>
                            </div>
                            <div className={style.boxcontainer}>
                                <img className={style.container0} src={month} alt="Month" />
                                <span className={style.innerText}>{newDatasHistory['month']}%</span>
                            </div>
                        </div>
                        <div className={style.graphcontainer}>
                            <div>
                                <Date menuItems={timeItems} selectedTimeItem={selectedTimeItem} setSelectedTimeItem={setSelectedTimeItem} />
                            </div>
                            <div className={style.graph} style={{ flex: 3 }}>
                                <ChartComponent newDatasDayChart={newDatasChart} isTx={false}/>
                            </div>
                        </div>

                        <div className={style.address} style={{ flex: 2 }}>
                            <h3 className={style.subtitle} style={{ color: 'white' }}>Wallet Address</h3>
                            <div className={style.addresscontainer}>
                                {newDatasList.map((address, index) => (
                                    <div className={style.addressmap} key={index}>
                                        {address['address'].length > 20 ? (
                                            <span title={address['address']}>
                                                {address['address'].substring(0, 9)}... {address['timestamp'].split('T')[0]}
                                            </span>
                                        ) : (
                                            address['address']
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={style.bottomcontents}>
                        <div className={style.subcontents} style={{ flex: 1 }}>
                            <div style={{ flex: 1, backgroundColor: '#D75DDA' }}></div>
                            <div className={style.aw} style={{ flex: 30 }}>
                                <img src={taw} className={style.awcontainer} />
                                <h2 className={style.total}>{datasNum['totalDatasNum']}</h2>
                            </div>
                        </div>
                        <div className={style.sizebox}></div>
                        <div className={style.subcontents} style={{ flex: 1 }}>
                            <div style={{ flex: 1, backgroundColor: '#5D5DDA' }}></div>
                            <div className={style.aw} style={{ flex: 30 }}>
                                <img src={daw} className={style.awcontainer} />
                                <h2 className={style.total}>{datasNum['activatedDailyDatasNum']}</h2>
                            </div>
                        </div>
                        <div className={style.sizebox}></div>
                        <div className={style.subcontents} style={{ flex: 1 }}>
                            <div style={{ flex: 1, backgroundColor: '#5DDAD2' }}></div>
                            <div className={style.aw} style={{ flex: 30 }}>
                                <img src={waw} className={style.awcontainer} />
                                <h2 className={style.total}>{datasNum['activatedWeekDatasNum']}</h2>
                            </div>
                        </div>
                        <div className={style.sizebox}></div>
                        <div className={style.subcontents} style={{ flex: 1 }}>
                            <div style={{ flex: 1, backgroundColor: '#5DB4DA' }}></div>
                            <div className={style.aw} style={{ flex: 30 }}>
                                <img src={maw} className={style.awcontainer} />
                                <h2 className={style.total}>{datasNum['activatedMonthlyDatasNum']}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );


    }
}

export default UserBrief;


    // useEffect(() => {
    //     axios.post(`http://localhost:3000/sync?protocolAddress=${address}`)
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.error(error.response);
    //         })
    // }, [])

    //00x7128AF8F5AA6abe92b5f9ba9545146027A995B16

    // useEffect(() => {
    //     axios.get(`http://localhost:3000/userbrief`,
    //     {headers: {
    //         protocolAddress: `${address}`,
    //         timeStampInterval: `1000`
    //     }})
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.error(error.response);
    //         })
    // }, [])

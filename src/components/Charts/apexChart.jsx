import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import style from './apexChart.module.css';


const ChartComponent = ({ newDatasDayChart , isTx}) => {
    // 데이터 변환
    const transformedData = newDatasDayChart.map((data, index) => ({
        x: new Date(data.startDate).getTime(),
        y: data.newDataNum,
        startDate: data.startDate,
        endDate: data.endDate,
        newWalletCumulativeNum: data.newDataCumulatedNum,
      }));

    // 차트 옵션 설정
    const options = {
        series: [{
            name: isTx ? 'New Txs' : 'New Wallets',
            data: transformedData
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#ffffff'],
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        // title: {
        //   text: 'New Wallets',
        //   align: 'left'
        // },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100],
                colorStops: [{
                    offset: 0,
                    color: '#8383ff98' // Blue color
                }, {
                    offset: 100,
                    color: '#f5f5ff2c' // Blue color
                }]
            },
        },
        yaxis: {
            title: {
                text: isTx ? 'Number of New Txs': 'Number of New Wallets',
                style: {
                    color: '#FFFFFF' // Y-axis label color is white
                }
            },
            labels: {
                style: {
                    colors: '#FFFFFF' // White color for Y-axis labels
                }
            },
        },
        xaxis: {
            type: 'datetime',
            labels: {
                formatter: function (val, timestamp) {
                    const startDate = new Date(val).toLocaleDateString();
                    return startDate;
                },
                style: {
                    colors: '#FFFFFF' // X-axis label color is white
                }
            },
            style: {
                colors: '#FFFFFF' // X-axis label color is white
            }

        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val) {
                    return val;
                }
            },
            x: {
                formatter: function (val, timestamp) {
                    const dataPointIndex = Math.floor(val) - 1;
                    if (transformedData[dataPointIndex]) {
                      const data = transformedData[dataPointIndex];
                      const startDate = data.startDate.split('T')[0];
                      return startDate;
                    }
                    return '';
                  },
            }
        }
    };

    useEffect(() => {
        // Create and render the chart
        const chart = new ApexCharts(document.getElementById('chart'), options);
        chart.render();

        // Clean up on component unmount
        return () => {
            chart.destroy();
        };
    }, []);

    return <div id="chart" className={style.chart} />;
};

export default ChartComponent;
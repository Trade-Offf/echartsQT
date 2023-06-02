import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import ACH from '../../data/ACH-USDT.csv';
import C98 from '../../data/C98-USDT.csv';
import UNFI from '../../data/UNFI-USDT.csv';

function RevenueChart() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    fetch(ACH)
      .then((response) => response.text())
      .then((data) => {
        const jsonData = Papa.parse(data, { header: true });
        setData1(jsonData.data);
      });
    fetch(C98)
      .then((response) => response.text())
      .then((data) => {
        const jsonData = Papa.parse(data, { header: true });
        setData2(jsonData.data);
      });
    fetch(UNFI)
      .then((response) => response.text())
      .then((data) => {
        const jsonData = Papa.parse(data, { header: true });
        setData3(jsonData.data);
      });
  }, []);

  let revenueRateList1 = [];
  let dateList1 = [];
  data1.forEach((item) => {
    revenueRateList1.push(item.revenueRate);
    dateList1.push(item.date);
  });
  let revenueRateList2 = [];
  let dateList2 = [];
  data2.forEach((item) => {
    revenueRateList2.push(item.revenueRate);
    dateList2.push(item.date);
  });
  let revenueRateList3 = [];
  let dateList3 = [];
  data3.forEach((item) => {
    revenueRateList3.push(item.revenueRate);
    dateList3.push(item.date);
  });
  const option = {
    title: {
      text: '小时级收益率',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['ACH', 'C98', 'UNFI'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: dateList1,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'ACH',
        type: 'line',
        data: revenueRateList1,
      },
      {
        name: 'C98',
        type: 'line',
        data: revenueRateList2,
      },
      {
        name: 'UNFI',
        type: 'line',
        data: revenueRateList3,
      },
    ],
  };

  return (
    <ReactECharts
      echarts={echarts}
      option={option}
      style={{ height: '400px' }}
    />
  );
}

export default RevenueChart;

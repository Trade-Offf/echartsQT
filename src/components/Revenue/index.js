import { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { fetchCSV, clearData } from '../../utils';
import { ACH, C98, UNFI } from './selectData';

function RevenueChart() {
  const [ACHData, setACHData] = useState();
  const [C98Data, setC98Data] = useState();
  const [UNFIData, setUNFIData] = useState();

  useEffect(() => {
    fetchCSV(ACH).then((data) => setACHData(clearData(data)));
    fetchCSV(C98).then((data) => setC98Data(clearData(data)));
    fetchCSV(UNFI).then((data) => setUNFIData(clearData(data)));
  }, []);

  const option = {
    title: {
      text: '累计收益率（小时级）',
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    legend: {
      data: ['ACH', 'C98', 'UNFI'],
    },
    xAxis: {
      type: 'category',
      data: ACHData?.dateList,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'ACH',
        type: 'line',
        data: ACHData?.revenueRateList,
      },
      {
        name: 'C98',
        type: 'line',
        data: C98Data?.revenueRateList,
      },
      {
        name: 'UNFI',
        type: 'line',
        data: UNFIData?.revenueRateList,
      },
    ],
  };

  return (
    <ReactECharts
      echarts={echarts}
      option={option}
      style={{ height: '500px' }}
    />
  );
}

export default RevenueChart;

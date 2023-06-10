import { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { fetchCSV, clearData } from '../../utils';
import {
  CTK,
  DOGE,
  EDU,
  FXS,
  LDO,
  LPT,
  PEOPLE,
  ROSE,
  RUNE,
  SKL,
  SNX,
  SSV,
  STMX,
  ZRX,
} from './selectData';

function RevenueChart() {
  const [DOGEData, setDOGEData] = useState();
  const [EDUData, setEDUData] = useState();
  const [FXSData, setFXSData] = useState();
  const [LDOData, setLDOData] = useState();
  const [PEOPLEData, setPEOPLEData] = useState();
  const [ROSEData, setROSEData] = useState();
  const [SKLData, setSKLData] = useState();
  const [SNXData, setSNXData] = useState();
  const [SSVData, setSSVData] = useState();
  const [STMXData, setSTMXData] = useState();
  const [ZRXData, setZRXData] = useState();
  const [CTKData, setCTKData] = useState();
  const [LPTData, setLPTData] = useState();
  const [RUNEData, setRUNEData] = useState();

  useEffect(() => {
    fetchCSV(CTK).then((data) => setCTKData(clearData(data)));
    fetchCSV(DOGE).then((data) => setDOGEData(clearData(data)));
    fetchCSV(EDU).then((data) => setEDUData(clearData(data)));
    fetchCSV(FXS).then((data) => setFXSData(clearData(data)));
    fetchCSV(LDO).then((data) => setLDOData(clearData(data)));
    fetchCSV(LPT).then((data) => setLPTData(clearData(data)));
    fetchCSV(PEOPLE).then((data) => setPEOPLEData(clearData(data)));
    fetchCSV(ROSE).then((data) => setROSEData(clearData(data)));
    fetchCSV(RUNE).then((data) => setRUNEData(clearData(data)));
    fetchCSV(SKL).then((data) => setSKLData(clearData(data)));
    fetchCSV(SNX).then((data) => setSNXData(clearData(data)));
    fetchCSV(SSV).then((data) => setSSVData(clearData(data)));
    fetchCSV(STMX).then((data) => setSTMXData(clearData(data)));
    fetchCSV(ZRX).then((data) => setZRXData(clearData(data)));
  }, []);

  const option = {
    title: {
      text: '累计收益率（4小时级）',
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
      data: [
        'CTK',
        'DOGE',
        'EDU',
        'FXS',
        'LDO',
        'LPT',
        'PEOPLE',
        'ROSE',
        'RUNE',
        'SKL',
        'SNX',
        'SSV',
        'STMX',
        'ZRX',
      ],
    },
    xAxis: {
      type: 'category',
      data: CTKData?.dateList,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'CTK',
        type: 'line',
        data: CTKData?.revenueRateList,
      },
      {
        name: 'DOGE',
        type: 'line',
        data: DOGEData?.revenueRateList,
      },
      {
        name: 'EDU',
        type: 'line',
        data: EDUData?.revenueRateList,
      },
      {
        name: 'FXS',
        type: 'line',
        data: FXSData?.revenueRateList,
      },
      {
        name: 'LDO',
        type: 'line',
        data: LDOData?.revenueRateList,
      },
      {
        name: 'LPT',
        type: 'line',
        data: LPTData?.revenueRateList,
      },
      {
        name: 'PEOPLE',
        type: 'line',
        data: PEOPLEData?.revenueRateList,
      },
      {
        name: 'ROSE',
        type: 'line',
        data: ROSEData?.revenueRateList,
      },
      {
        name: 'RUNE',
        type: 'line',
        data: RUNEData?.revenueRateList,
      },
      {
        name: 'SKL',
        type: 'line',
        data: SKLData?.revenueRateList,
      },
      {
        name: 'SNX',
        type: 'line',
        data: SNXData?.revenueRateList,
      },
      {
        name: 'SSV',
        type: 'line',
        data: SSVData?.revenueRateList,
      },
      {
        name: 'STMX',
        type: 'line',
        data: STMXData?.revenueRateList,
      },
      {
        name: 'ZRX',
        type: 'line',
        data: ZRXData?.revenueRateList,
      },
    ],
  };

  return (
    <ReactECharts
      echarts={echarts}
      option={option}
      style={{ height: '600px' }}
    />
  );
}

export default RevenueChart;

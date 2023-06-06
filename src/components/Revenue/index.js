import { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { fetchCSV, clearData } from '../../utils';
import { CKB, CRV, ENJ, EOS, IMX, LIT, LUNA2, OCEAN, SNX, TOMO, XLM } from './selectData';

function RevenueChart() {
  const [CKBData, setCKBData] = useState();
  const [CRVData, setCRVData] = useState();
  const [ENJData, setENJData] = useState();
  const [EOSData, setEOSData] = useState();
  const [IMXData, setIMXData] = useState();
  const [LITData, setLITData] = useState();
  const [LUNA2Data, setLUNA2Data] = useState();
  const [OCEANData, setOCEANData] = useState();
  const [SNXData, setSNXData] = useState();
  const [TOMOData, setTOMOData] = useState();
  const [XLMData, setXLMData] = useState();

  useEffect(() => {
    fetchCSV(CKB).then((data) => setCKBData(clearData(data)));
    fetchCSV(CRV).then((data) => setCRVData(clearData(data)));
    fetchCSV(ENJ).then((data) => setENJData(clearData(data)));
    fetchCSV(EOS).then((data) => setEOSData(clearData(data)));
    fetchCSV(IMX).then((data) => setIMXData(clearData(data)));
    fetchCSV(LIT).then((data) => setLITData(clearData(data)));
    fetchCSV(LUNA2).then((data) => setLUNA2Data(clearData(data)));
    fetchCSV(OCEAN).then((data) => setOCEANData(clearData(data)));
    fetchCSV(SNX).then((data) => setSNXData(clearData(data)));
    fetchCSV(TOMO).then((data) => setTOMOData(clearData(data)));
    fetchCSV(XLM).then((data) => setXLMData(clearData(data)));
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
      data: ['CKB', 'CRV', 'ENJ', 'EOS', 'IMX', 'LIT', 'LUNA2', 'OCEAN', 'SNX', 'TOMO', 'XLM'],
    },
    xAxis: {
      type: 'category',
      data: CKBData?.dateList,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'CKB',
        type: 'line',
        data: CKBData?.revenueRateList,
      },
      {
        name: 'CRV',
        type: 'line',
        data: CRVData?.revenueRateList,
      },
      {
        name: 'ENJ',
        type: 'line',
        data: ENJData?.revenueRateList,
      },
      {
        name: 'EOS',
        type: 'line',
        data: EOSData?.revenueRateList,
      },
      {
        name: 'IMX',
        type: 'line',
        data: IMXData?.revenueRateList,
      },
      {
        name: 'LIT',
        type: 'line',
        data: LITData?.revenueRateList,
      },
      {
        name: 'LUNA2',
        type: 'line',
        data: LUNA2Data?.revenueRateList,
      },
      {
        name: 'OCEAN',
        type: 'line',
        data: OCEANData?.revenueRateList,
      },
      {
        name: 'SNX',
        type: 'line',
        data: SNXData?.revenueRateList,
      },
      {
        name: 'TOMO',
        type: 'line',
        data: TOMOData?.revenueRateList,
      },
      {
        name: 'XLM',
        type: 'line',
        data: XLMData?.revenueRateList,
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
import { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { fetchCSV, clearData } from '../../utils';
import {
  AR,
  ARB,
  BAND,
  CHR,
  CTK,
  FIL,
  GMT,
  IOTA,
  IOTX,
  LINK,
  LPT,
  MASK,
  MKR,
  OCEAN,
  PERP,
  REEF,
  RLC,
  RUNE,
  SAND,
  SFP,
  THETA,
  ZEC,
  ZEN,
} from './selectData';

function RevenueChart() {
  const [ARData, setARData] = useState();
  const [ARBData, setARBData] = useState();
  const [BANDData, setBANDData] = useState();
  const [CHRData, setCHRData] = useState();
  const [CTKData, setCTKData] = useState();
  const [FILData, setFILData] = useState();
  const [GMTData, setGMTData] = useState();
  const [IOTAData, setIOTAData] = useState();
  const [IOTXData, setIOTXData] = useState();
  const [LINKData, setLINKData] = useState();
  const [LPTData, setLPTData] = useState();
  const [MASKData, setMASKData] = useState();
  const [MKRData, setMKRData] = useState();
  const [OCEANData, setOCEANData] = useState();
  const [PERPData, setPERPData] = useState();
  const [REEFData, setREEFData] = useState();
  const [RLCData, setRLCData] = useState();
  const [RUNEData, setRUNEData] = useState();
  const [SANDData, setSANDData] = useState();
  const [SFPData, setSFPData] = useState();
  const [THETAData, setTHETAData] = useState();
  const [ZECData, setZECData] = useState();
  const [ZENData, setZENData] = useState();

  useEffect(() => {
    fetchCSV(AR).then((data) => setARData(clearData(data)));
    fetchCSV(ARB).then((data) => setARBData(clearData(data)));
    fetchCSV(BAND).then((data) => setBANDData(clearData(data)));
    fetchCSV(CHR).then((data) => setCHRData(clearData(data)));
    fetchCSV(CTK).then((data) => setCTKData(clearData(data)));
    fetchCSV(FIL).then((data) => setFILData(clearData(data)));
    fetchCSV(GMT).then((data) => setGMTData(clearData(data)));
    fetchCSV(IOTA).then((data) => setIOTAData(clearData(data)));
    fetchCSV(IOTX).then((data) => setIOTXData(clearData(data)));
    fetchCSV(LINK).then((data) => setLINKData(clearData(data)));
    fetchCSV(LPT).then((data) => setLPTData(clearData(data)));
    fetchCSV(MASK).then((data) => setMASKData(clearData(data)));
    fetchCSV(MKR).then((data) => setMKRData(clearData(data)));
    fetchCSV(OCEAN).then((data) => setOCEANData(clearData(data)));
    fetchCSV(PERP).then((data) => setPERPData(clearData(data)));
    fetchCSV(REEF).then((data) => setREEFData(clearData(data)));
    fetchCSV(RLC).then((data) => setRLCData(clearData(data)));
    fetchCSV(RUNE).then((data) => setRUNEData(clearData(data)));
    fetchCSV(SAND).then((data) => setSANDData(clearData(data)));
    fetchCSV(SFP).then((data) => setSFPData(clearData(data)));
    fetchCSV(THETA).then((data) => setTHETAData(clearData(data)));
    fetchCSV(ZEC).then((data) => setZECData(clearData(data)));
    fetchCSV(ZEN).then((data) => setZENData(clearData(data)));
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
        'AR',
        'ARB',
        'BAND',
        'CHR',
        'CTK',
        'FIL',
        'GMT',
        'IOTA',
        'IOTX',
        'LINK',
        'LPT',
        'MASK',
        'MKR',
        'OCEAN',
        'PERP',
        'REEF',
        'RLC',
        'RUNE',
        'SAND',
        'SFP',
        'THETA',
        'ZEC',
        'ZEN',
      ],
    },
    xAxis: {
      type: 'category',
      data: ARData?.dateList,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'AR',
        type: 'line',
        data: ARData?.revenueRateList,
      },
      {
        name: 'ARB',
        type: 'line',
        data: ARBData?.revenueRateList,
      },
      {
        name: 'BAND',
        type: 'line',
        data: BANDData?.revenueRateList,
      },
      {
        name: 'CHR',
        type: 'line',
        data: CHRData?.revenueRateList,
      },
      {
        name: 'CTK',
        type: 'line',
        data: CTKData?.revenueRateList,
      },
      {
        name: 'FIL',
        type: 'line',
        data: FILData?.revenueRateList,
      },
      {
        name: 'GMT',
        type: 'line',
        data: GMTData?.revenueRateList,
      },
      {
        name: 'IOTA',
        type: 'line',
        data: IOTAData?.revenueRateList,
      },
      {
        name: 'IOTX',
        type: 'line',
        data: IOTXData?.revenueRateList,
      },
      {
        name: 'LINK',
        type: 'line',
        data: LINKData?.revenueRateList,
      },
      {
        name: 'LPT',
        type: 'line',
        data: LPTData?.revenueRateList,
      },
      {
        name: 'MASK',
        type: 'line',
        data: MASKData?.revenueRateList,
      },
      {
        name: 'MKR',
        type: 'line',
        data: MKRData?.revenueRateList,
      },
      {
        name: 'OCEAN',
        type: 'line',
        data: OCEANData?.revenueRateList,
      },
      {
        name: 'PERP',
        type: 'line',
        data: PERPData?.revenueRateList,
      },
      {
        name: 'REEF',
        type: 'line',
        data: REEFData?.revenueRateList,
      },
      {
        name: 'RLC',
        type: 'line',
        data: RLCData?.revenueRateList,
      },
      {
        name: 'RUNE',
        type: 'line',
        data: RUNEData?.revenueRateList,
      },
      {
        name: 'SAND',
        type: 'line',
        data: SANDData?.revenueRateList,
      },
      {
        name: 'SFP',
        type: 'line',
        data: SFPData?.revenueRateList,
      },
      {
        name: 'THETA',
        type: 'line',
        data: THETAData?.revenueRateList,
      },
      {
        name: 'ZEC',
        type: 'line',
        data: ZECData?.revenueRateList,
      },
      {
        name: 'ZEN',
        type: 'line',
        data: ZENData?.revenueRateList,
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

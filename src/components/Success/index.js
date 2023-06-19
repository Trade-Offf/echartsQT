import React from 'react';
import data from './data.js';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

// 接口失败率（图 + 折线）
function Success() {
  const dataList = data;

  let timeArr = [];
  let rateArr = [];
  let failNumArr = [];
  dataList.map((item) => {
    rateArr.push(item.rate.toFixed(3));
    failNumArr.push(item.fail_uv);

    const date = new Date(item.date);
    const month = date.getMonth() + 1; // getMonth()方法返回的月份是0-11，需要加1
    const day = date.getDate(); // getDate()方法返回月份中的日期
    timeArr.push(`${month}.${day}`);
  });
  const option = {
    title: {
      text: '接口失败数量、失败率',
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      top: '15%',
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },
    legend: {
      data: ['value', 'rate'],
    },
    xAxis: {
      type: 'category',
      data: timeArr,
    },
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: false, // 隐藏分隔线
        },
      },
      {
        type: 'value',
        splitLine: {
          show: false, // 隐藏分隔线
        },
      },
    ],
    series: [
      {
        name: 'rate',
        type: 'line',
        data: rateArr.map((item) => ({
          value: item,
          itemStyle:
            item < 0.99
              ? {
                  color: 'red', // 小于0.99的数据点用红色标记
                }
              : null,
        })),
        label: {
          show: true,
          position: 'top',
          formatter: '{c}', // 显示具体值
        },
      },
      {
        name: 'value',
        type: 'bar',
        data: failNumArr,
        yAxisIndex: 1, // 使用第二个 y 轴
        label: {
          show: true,
          position: 'top',
          formatter: '{c}', // 显示具体值
        },
        itemStyle: {
          normal: {
            color: '#E79C00',
            barBorderRadius: 2, // 柱子圆角
          },
        },
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

export default Success;

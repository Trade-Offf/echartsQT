import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

function Chart() {
  const option = {
    title: {
      text: 'ECharts 入门示例',
    },
    tooltip: {},
    xAxis: {
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 5],
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

export default Chart;

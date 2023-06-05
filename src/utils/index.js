import Papa from 'papaparse';

/**
 * 获取csv数据,并转换为json格式
 * @param {string} type
 */
export function fetchCSV(path) {
  return fetch(path)
    .then((response) => response.text())
    .then((data) => {
      const jsonData = Papa.parse(data, { header: true });
      return jsonData.data;
    });
}

/**
 * 处理单个币种的数据
 * @param {string} type
 */
export function clearData(data) {
  let revenueRateList = [];
  let dateList = [];
  data.forEach((item) => {
    revenueRateList.push(item.revenueRate);
    dateList.push(item.date);
  });

  return { revenueRateList, dateList };
}

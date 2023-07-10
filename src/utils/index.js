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


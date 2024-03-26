import { useState } from 'react';

const RemoteCsvComponent = () => {
  const [csvData, setCsvData] = useState('');

  const fetchCSV = async () => {
    console.log('fetchCSV');
    try {
      // const response = await fetch('https://www.tsuchiya2.org/CSV_file_seisaku/sampleCSV/sample1.csv');
      const response = await fetch('/CSV_file_seisaku/sampleCSV/sample1.csv');
      const text = await response.text();
      console.log(`text: ${text}`);

      setCsvData(text);
    } catch (error) {
      console.error('Error fetching CSV:', error);
    }
  };

  return (
    <div>
      <h1>Remote CSV Data</h1>
      <div>{csvData}</div>

      <button onClick={() => fetchCSV()}>Fetch CSV</button>
    </div>
  );
};

export default RemoteCsvComponent;

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    const headers = {
        "Content-Type": "application/json",
    }
    app.use(
        '/CSV_file_seisaku/sampleCSV/sample1.csv',
        createProxyMiddleware({
            target: 'https://www.tsuchiya2.org',
            changeOrigin: true,
            headers: headers
        })
    );
};
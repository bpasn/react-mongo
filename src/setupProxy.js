
require('dotenv').config({path:".env"})
const { createProxyMiddleware } = require('http-proxy-middleware');

console.log("process.env.REACT_APP_API_URI => ", process.env.REACT_APP_API_URI)
module.exports = function (app) {
  app.use(createProxyMiddleware('/v1', { target: 'http://localhost:3001', changeOrigin: true }));
};
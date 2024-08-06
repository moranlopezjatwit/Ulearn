// getLocalIp.js
const internalIp = require('internal-ip');

const getLocalIp = async () => {
  const ip = await internalIp.v4();
  console.log(ip);
  return ip;
};

getLocalIp();

import React, { useState, useEffect } from 'react';

const QRCodeComponent = () => {
  const [localIp, setLocalIp] = useState('');

  const fetchLocalIp = async () => {
    try {
      const response = await fetch('http://localhost:5000/getLocalIp');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLocalIp(data.ip);
    } catch (error) {
      console.error('Failed to fetch', error);
    }
  };

  useEffect(() => {
    fetchLocalIp();
  }, []);

  const url = `http://${localIp}:3000/Register`;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <QRCodeCanvas value={url} />
      <p>Scan this QR code with your phone to access the app</p>
    </div>
  );
};

export default QRCodeComponent;

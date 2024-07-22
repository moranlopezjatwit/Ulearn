import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ url }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <QRCode value={url} />
      <p>Scan this QR code with your phone to access the app</p>
    </div>
  );
};

export default QRCodeGenerator;

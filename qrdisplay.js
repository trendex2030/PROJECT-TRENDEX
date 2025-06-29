import React, { useEffect, useState } from 'react';

function QRDisplay() {
  const [qr, setQr] = useState(null);
  const [pairingCode, setPairingCode] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/pairing')
      .then(res => res.json())
      .then(data => {
        setQr(data.qr);
        setPairingCode(data.pairingCode);
      });
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Scan this QR to Pair</h1>
      {qr ? <img src={qr} alt="QR Code" className="mx-auto" /> : <p>Loading QR...</p>}
      <h2 className="mt-4 text-xl">Pairing Code:</h2>
      <p className="text-3xl font-mono">{pairingCode}</p>
    </div>
  );
}

export default QRDisplay;

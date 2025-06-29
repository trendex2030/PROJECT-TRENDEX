const express = require('express');
const cors = require('cors');
const QRCode = require('qrcode');

const app = express();
app.use(cors());

let pairingCode = Math.floor(100000 + Math.random() * 900000).toString();

app.get('/api/pairing', async (req, res) => {
  try {
    const qrData = `PAIR-${pairingCode}`;
    const qrImage = await QRCode.toDataURL(qrData);
    res.json({
      pairingCode,
      qr: qrImage
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate QR' });
  }
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});

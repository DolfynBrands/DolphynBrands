/* eslint-env node */
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(compression());

// Serve static assets with cache headers
app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js') || path.endsWith('.css') || path.endsWith('.woff2') || path.endsWith('.webp') || path.endsWith('.png') || path.endsWith('.jpg') || path.endsWith('.jpeg') || path.endsWith('.svg')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'sairishigangarapu@gmail.com',
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error); // Log the error to the console
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
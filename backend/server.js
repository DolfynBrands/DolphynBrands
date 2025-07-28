/* eslint-env node */
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const compression = require('compression');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword'
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF and Word documents are allowed.'));
    }
  }
});

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

// Career application endpoint
app.post('/careers', upload.single('resume'), async (req, res) => {
  try {
    const {
      jobOpening, fullName, email, phoneNumber, gender, address, country,
      state, city, pincode, motivation
    } = req.body;

    // Validate required fields
    if (!jobOpening || !fullName || !email || !phoneNumber || !gender || !address || 
        !country || !state || !city || !pincode || !motivation) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Resume file is required.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Prepare email content
    const emailContent = `
      New Career Application Received
      
      Job Position: ${jobOpening}
      
      Personal Information:
      - Full Name: ${fullName}
      - Email: ${email}
      - Phone: ${phoneNumber}
      - Gender: ${gender}
      
      Address:
      - Address: ${address}
      - City: ${city}
      - State: ${state}
      - Country: ${country}
      - Pincode: ${pincode}
      
      Motivation:
      ${motivation}
    `;

    // Send email with resume attachment
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'careers@dolfynbrands.com', // You can change this to the actual careers email
      subject: `New Career Application: ${jobOpening} - ${fullName}`,
      text: emailContent,
      replyTo: email,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path
        }
      ]
    });

    // Clean up uploaded file after sending email
    fs.unlink(req.file.path, (err) => {
      if (err) console.error('Error deleting file:', err);
    });

    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Career application error:', error);
    
    // Clean up uploaded file in case of error
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }
    
    res.status(500).json({ error: 'Failed to submit application.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
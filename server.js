const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS, media)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve main portfolio page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Form submission handler
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Create reusable transporter (use your email service credentials here)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use 'outlook', 'yahoo', etc.
    auth: {
      user: 'your_email@gmail.com',       // replace with your email
      pass: 'your_email_password_or_app_password' // use an app password for Gmail
    }
  });

  const mailOptions = {
    from: email,
    to: 'your_email@gmail.com', // your receiving email
    subject: `Portfolio Contact Form - ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Something went wrong. Please try again.');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Message sent successfully!');
    }
  });
});

// Start the server
app.listen(PORT, '127.0.0.1', () => {
  console.log(`🚀 Portfolio running at http://127.0.0.1:${PORT}`);
});

import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;

  // Perform email validation (you can use a library like validator)
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Process the form data (you can save it to a database, send an email, etc.)
  console.log('Form data received:', { name, email, message });

  // Send verification email using nodemailer
  const verificationCode = generateVerificationCode();
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password', // Use the App Password here
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Email Verification',
      text: `Your verification code is: ${verificationCode}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Verification email sent successfully');
  } catch (error) {
    console.error('Error sending verification email:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  // Respond to the client
  res.status(200).json({ message: 'Verification email sent successfully' });
});

// Additional routes for handling email verification

export default router;

// Helper functions

function isValidEmail(email) {
  // You can use a library like validator to perform more thorough email validation
  return true; // For simplicity, assuming all emails are valid
}

function generateVerificationCode() {
  // Generate a unique verification code (you may use a library for this)
  return '123456'; // For simplicity, using a static code
}

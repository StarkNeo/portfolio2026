const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const dotenv = require('dotenv');
//const contactRoutes = require('./routes/contact.js');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3001;

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log(process.env.TO_EMAIL)
  console.log("Received contact message:", { name, email, message });
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.TO_EMAIL,
      subject: `Portfolio Contact ${email}`,
      html: `<h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
`,
    });
    res.json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});




app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
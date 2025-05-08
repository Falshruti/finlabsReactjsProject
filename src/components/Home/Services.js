const express = require('express');
const fs = require('fs');
const XLSX = require('xlsx');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

<<<<<<< HEAD
const app = express();
const PORT = process.env.PORT || 5000;
=======
const offerings = [
  {
    icon: "./images/services-icon/1.webp",
    title: "Products",
    description:
      "Explore a range of innovative financial tools designed to streamline your operations and maximize growth.",
    buttonText: "Browse Our Products",
  },
  {
    icon: "./images/services-icon/2.webp",
    title: "Solutions",
    description:
      "Our tailored solutions empower you to solve complex problems and achieve your unique goals.",
    buttonText: "Find Your Solution",
  },
  {
    icon: "./images/services-icon/3.webp",
    title: "Services",
    description:
      "Leverage our specialized services to tackle challenges, improve efficiency, and drive results.",
    buttonText: "Discover Our Services",
  },
];
>>>>>>> 74a785296173a478e8d200e132caa33618d68be7

let leads = [];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/lead', async (req, res) => {
  const {
    name,
    email,
    phone,
    company,
    website,
    product,
    solution,
    service
  } = req.body;

  const newLead = {
    Name: name,
    Email: email,
    Phone: phone,
    Company: company,
    Website: website,
    Product: product,
    Solution: solution,
    Service: service,
    Date: new Date().toLocaleString()
  };

  leads.push(newLead);

  // Create or update Excel file
  const worksheet = XLSX.utils.json_to_sheet(leads);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Leads');

  const filePath = path.join(__dirname, 'leads.xlsx');
  XLSX.writeFile(workbook, filePath);

  // Email the file
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: 'New Lead Submitted - FINLABS',
      text: 'A new lead has been submitted. See the attached Excel file.',
      attachments: [{ filename: 'leads.xlsx', path: filePath }]
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Lead submitted and emailed successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

const express = require('express');
const fs = require('fs');
const XLSX = require('xlsx');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const EXCEL_FILE = path.join(__dirname, 'leads.xlsx');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/lead', (req, res) => {
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

  let leads = [];

  // If file exists, read existing leads
  if (fs.existsSync(EXCEL_FILE)) {
    const workbook = XLSX.readFile(EXCEL_FILE);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    leads = XLSX.utils.sheet_to_json(sheet);
  }

  // Add new lead
  leads.push(newLead);

  // Write updated data back to Excel
  const worksheet = XLSX.utils.json_to_sheet(leads);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Leads');
  XLSX.writeFile(workbook, EXCEL_FILE);

  res.status(200).json({ message: 'Lead saved to Excel successfully.' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

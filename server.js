const express = require('express');
const xlsx = require('xlsx');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const leadsFile = './leads.xlsx';

// Create Excel file with header if it doesn't exist
if (!fs.existsSync(leadsFile)) {
  const wb = xlsx.utils.book_new();
  const ws = xlsx.utils.json_to_sheet([]);
  xlsx.utils.book_append_sheet(wb, ws, 'Leads');
  xlsx.writeFile(wb, leadsFile);
}

app.post('/api/submit', (req, res) => {
  const lead = req.body;

  try {
    // Read existing leads
    const wb = xlsx.readFile(leadsFile);
    const ws = wb.Sheets['Leads'];
    const existingData = xlsx.utils.sheet_to_json(ws);

    // Add new lead
    existingData.push(lead);
    const updatedSheet = xlsx.utils.json_to_sheet(existingData);
    wb.Sheets['Leads'] = updatedSheet;
    xlsx.writeFile(wb, leadsFile);

    res.status(200).json({ message: 'Lead saved to Excel.' });
  } catch (err) {
    console.error('Error saving lead:', err);
    res.status(500).json({ error: 'Failed to save lead.' });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));

import { Main } from '@strapi/design-system';
import { Typography, Box, Button } from '@strapi/design-system';
import axios from 'axios';
import { useState } from 'react';
import * as XLSX from 'xlsx';

const HomePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    setLoading(true);

    const fileReader = new FileReader();

    fileReader.onload = async (event) => {
      let parsedData: any[] = [];
      const ext = file.name.split('.').pop();

      try {
        if (ext === 'csv') {
          const text = event.target?.result as string;
          const rows = text.split('\n').filter((row) => row.trim() !== '');

          const headers = rows[0].split(',').map((header) => header.trim());

          parsedData = rows.slice(1).map((row) => {
            const columns = row.split(',').map((col) => col.trim());
            return {
              PartNumber: columns[1].replace(/^"|"$/g, ''),
              ALT: columns[2].replace(/^"|"$/g, ''),
              Description: columns[3].replace(/^"|"$/g, ''),
              Qty: Number(columns[4]),
              Condition: columns[5].replace(/^"|"$/g, ''),
            };
          });
        } else if (ext === 'xlsx') {
          const data = new Uint8Array(event.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          parsedData = XLSX.utils.sheet_to_json(worksheet);
          parsedData = parsedData.map((row) => {
            const { 's.no': _, ...rest } = row;
            return {
              PartNumber: row.PartNumber ?? row['Part Number'] ?? '',
              ALT: row.ALT ?? '',
              Description: row.Description ?? '',
              Qty: Number(row.Qty ?? 0),
              Condition: row.Condition ?? '',
              ...rest,
            };
          });
        } else {
          throw new Error('Unsupported file format. Please upload CSV or XLSX.');
        }

        try {
          const response = await axios.post('/api/parts-sales/bulk-upload', {
            data: parsedData,
          });
          alert(`Successfully uploaded ${response?.data?.count} records!`);
        } catch (error) {
          console.error('Error uploading data:', error);
          alert('Failed to upload data.');
        }
      } catch (err) {
        console.error('Error parsing/uploading:', err);
        alert('Failed to upload data.');
      } finally {
        setLoading(false);
      }
    };

    if (file.name.endsWith('.csv')) {
      fileReader.readAsText(file);
    } else {
      fileReader.readAsArrayBuffer(file);
    }
  };

  return (
    <Main>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '50px 100px',
          gap: '10px',
        }}
      >
        <Typography variant="alpha" fontSize>
          Parts Sales Data
        </Typography>
        <Box
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Typography style={{ fontSize: '20px' }}>Upload your file:</Typography>

          <Box
            style={{
              margin: '10px 0',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              border: '3px dotted #a3a3a3',
              borderRadius: '5px',
              width: '50%',
              textAlign: 'center',
              alignItems: 'flex-start',
              gap: '10px',
            }}
          >
            <header>
              <h2 style={{ fontWeight: 500, fontSize: '18px' }}>Select File here</h2>
            </header>
            <p style={{ fontSize: '12px' }}>Files Supported: PDF, TEXT, DOC , DOCX</p>

            <input
              type="file"
              accept=".csv, .xlsx"
              onChange={handleFileChange}
              style={{ fontSize: '17px' }}
            />
          </Box>
        </Box>

        <Box marginTop={4}>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Uploading...' : 'Submit'}
          </Button>
        </Box>
      </Box>
    </Main>
  );
};

export { HomePage };

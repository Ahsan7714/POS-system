import { useState } from 'react';
import { FaDownload, FaFilePdf, FaFileExcel, FaFileCsv } from 'react-icons/fa';
import '../../styles/ExportButton.css';

function ExportButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleExport = (format) => {
    // In a real application, this would trigger the actual export
    console.log(`Exporting in ${format} format`);
    setIsOpen(false);
  };

  return (
    <div className="export-button-container">
      <button className="export-button" onClick={handleToggle}>
        <FaDownload /> Export
      </button>
      
      {isOpen && (
        <div className="export-dropdown">
          <button 
            className="export-option" 
            onClick={() => handleExport('pdf')}
          >
            <FaFilePdf /> Export as PDF
          </button>
          <button 
            className="export-option" 
            onClick={() => handleExport('excel')}
          >
            <FaFileExcel /> Export as Excel
          </button>
          <button 
            className="export-option" 
            onClick={() => handleExport('csv')}
          >
            <FaFileCsv /> Export as CSV
          </button>
        </div>
      )}
    </div>
  );
}

export default ExportButton;
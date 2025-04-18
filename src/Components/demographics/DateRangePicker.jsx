import { useState } from 'react';
import '../../styles/DateRangePicker.css';

function DateRangePicker({ startDate, endDate, onDateChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [localStartDate, setLocalStartDate] = useState(startDate);
  const [localEndDate, setLocalEndDate] = useState(endDate);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleApply = () => {
    onDateChange({
      startDate: localStartDate,
      endDate: localEndDate
    });
    setIsOpen(false);
  };

  const handlePresetRange = (days) => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - days);
    
    setLocalStartDate(formatDate(start));
    setLocalEndDate(formatDate(end));
  };

  const formatDate = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="date-range-picker">
      <div className="date-display" onClick={handleToggle}>
        <span className="calendar-icon">📅</span>
        <span>{startDate}</span>
        <span className="to-text">to</span>
        <span>{endDate}</span>
        <span className="dropdown-icon">▼</span>
      </div>
      
      {isOpen && (
        <div className="date-picker-dropdown">
          <div className="preset-ranges">
            <button onClick={() => handlePresetRange(7)}>Last 7 days</button>
            <button onClick={() => handlePresetRange(30)}>Last 30 days</button>
            <button onClick={() => handlePresetRange(90)}>Last 90 days</button>
          </div>
          
          <div className="custom-range">
            <div className="date-input-group">
              <label>Start Date</label>
              <input 
                type="text" 
                value={localStartDate} 
                onChange={(e) => setLocalStartDate(e.target.value)}
                placeholder="MM/DD/YYYY" 
              />
            </div>
            <div className="date-input-group">
              <label>End Date</label>
              <input 
                type="text" 
                value={localEndDate}
                onChange={(e) => setLocalEndDate(e.target.value)}
                placeholder="MM/DD/YYYY" 
              />
            </div>
          </div>
          
          <div className="date-picker-actions">
            <button className="cancel-btn" onClick={() => setIsOpen(false)}>Cancel</button>
            <button className="apply-btn" onClick={handleApply}>Apply</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DateRangePicker;
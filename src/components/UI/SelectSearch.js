import React from 'react';

const SelectSearch = ({ handleChange }) => {
  const regions = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
  ]

  return (
    <div className="col-4">
      <select className="form-control" onChange={handleChange} name="regions">
        <option value=''>All</option>
        {regions.map((region, index) => (
          <option key={index} value={region}>{region}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectSearch;
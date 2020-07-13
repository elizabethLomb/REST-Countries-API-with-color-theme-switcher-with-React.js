import React from 'react';

const SelectSearch = ({ handleChange, theme }) => {
  const regions = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
  ]

  return (
    <div className="col-lg-4 col-md-4 col-12">
      <select
        className={`form-control ${theme === 'dark' && 'darkInput'}`}
        onChange={handleChange}
        name="regions"
      >
        <option value=''>All</option>
        {regions.map((region, index) => (
          <option key={index} value={region}>{region}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectSearch;
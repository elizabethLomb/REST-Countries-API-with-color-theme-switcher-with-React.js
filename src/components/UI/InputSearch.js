import React from 'react';

const InputSearch = ({ handleChange, searchTerm, theme }) => (
  <div className="col-lg-5 col-md-5 col-12">
    <form>
      <input
        name="search"
        type="text"
        className={`form-control ${theme === 'dark' && 'darkInput'}`}
        onChange={handleChange}
        value={searchTerm}
        placeholder="Search....."
      />
    </form>
  </div>
);

export default InputSearch;
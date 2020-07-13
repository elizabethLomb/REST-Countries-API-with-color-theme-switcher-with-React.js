import React from 'react';

const InputSearch = ({ handleChange, searchTerm }) => (
  <div className="col-5">
    <form>
      <div className="col-9">
        <input
          name="search"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={searchTerm}
          placeholder="Search....."
        />
      </div>
    </form>
  </div>
);

export default InputSearch;
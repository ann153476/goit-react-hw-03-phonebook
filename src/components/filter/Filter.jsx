import React from 'react';

import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div>
    <h2>Find contacts by name</h2>
    <label>
      <input type="name" value={value} onChange={onChange} />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

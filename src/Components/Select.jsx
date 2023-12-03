import React, { useState } from "react";

import Select from "react-select";
import PropTypes from "prop-types";

const SelectCustom = ({ onChange, name, select, values, className }) => {
  return (
    <>
      <Select
        className={className}
        name={name}
        options={values}
        onChange={onChange}
        isClearable={true}
        placeholder={select}
      />
    </>
  );
};

SelectCustom.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  select: PropTypes.string,
  values: PropTypes.array,
  className: PropTypes.string,
};
export default SelectCustom;

import React from "react";
import PropTypes from "prop-types";
const search = props => (
  <form className="search" onInput={event => props.onInput(event.target.value)}>
    <input type="search" value={props.query} placeholder={props.placeholder} />
  </form>
);

search.propTypes = {
  query      : PropTypes.string.isRequired,
  onInput    : PropTypes.func.isRequired,
  placeholder: PropTypes.string
};
export default search;
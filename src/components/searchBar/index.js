import React, { useState } from "react";
import { connect } from "react-redux";
import { getSearchImages } from "../../redux-store/actions/global";
import "./searchBar.css";

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
    props.getSearchImages(e.target.value);
  };
  return (
    <div className="searchBar">
      <input
        placeholder="Search free high resolution photos"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

const mapStateToProps = ({ global }) => {
  return {
    images: global.images,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSearchImages: (e) => dispatch(getSearchImages(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

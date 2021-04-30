import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./page.css";

import {
  getInitialImages,
  getSearchImages,
} from "../../redux-store/actions/global";
import SearchBar from "../searchBar";
import Grid from "../grid";

const Page = (props) => {
  useEffect(() => {
    props.getInitialImages();
  }, []);
  return (
    <div className="page">
      <SearchBar />
      <Grid />
    </div>
  );
};

const mapStateToProps = ({ global }) => {
  return {
    images: global.images,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getInitialImages: () => dispatch(getInitialImages()),
    getSearchImages: (e) => dispatch(getSearchImages(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);

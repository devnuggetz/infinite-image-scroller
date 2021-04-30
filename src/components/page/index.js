import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getInitialImages } from "../../redux-store/actions/global";

const Page = (props) => {
  useEffect(() => {
    props.getInitialImages();
  }, []);
  return <div>THis is page</div>;
};

const mapStateToProps = ({ global }) => {
  console.log(global);
  return {
    images: global.images,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getInitialImages: () => dispatch(getInitialImages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);

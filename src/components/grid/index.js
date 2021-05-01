import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import {
  getInitialImages,
  getSearchImages,
  getSearchNextImages,
} from "../../redux-store/actions/global";
import "./grid.css";

function Grid(props) {
  const [page, setPage] = useState(2);
  const [initPage, setInitPage] = useState(2);
  const getMore = () => {
    if (props.query.length > 0) {
      props.getSearchNextImages(props.query, page);
      setPage(page + 1);
    } else {
      props.getInitialImages(initPage);
      setInitPage(initPage + 1);
    }
  };
  return (
    <div style={{ width: "70%" }}>
      <InfiniteScroll
        dataLength={props.images.length}
        next={() => getMore()}
        hasMore={true}
        loader={
          <p style={{ textAlign: "center", marginTop: "1%" }}>
            Getting more images for you 🏃🏽‍♂️🏃🏽‍♂️
          </p>
        }
      >
        <div className="container">
          {!props.loading
            ? props.images.map((image) => (
                <div className="brick" key={image.id}>
                  <img
                    src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                    alt={image.title}
                  />
                </div>
              ))
            : ""}
        </div>
      </InfiniteScroll>
    </div>
  );
}

const mapStateToProps = ({ global }) => {
  return {
    loading: global.loading,
    images: global.images,
    query: global.query,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getInitialImages: (e) => dispatch(getInitialImages(e)),
    getSearchImages: (e, p) => dispatch(getSearchImages(e, p)),
    getSearchNextImages: (e, p) => dispatch(getSearchNextImages(e, p)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);

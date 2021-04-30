import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import {
  getInitialImages,
  getSearchImages,
} from "../../redux-store/actions/global";
import "./grid.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Grid(props) {
  const getMore = () => {
    if (props.query.length > 0) {
      props.getSearchImages(props.query);
    } else {
      props.getInitialImages();
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
            More doggo incoming 🐕 🐕...
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
    getInitialImages: () => dispatch(getInitialImages()),
    getSearchImages: (e) => dispatch(getSearchImages(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);

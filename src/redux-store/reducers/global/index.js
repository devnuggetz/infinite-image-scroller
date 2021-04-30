import {
  SET_INITIAL_IMAGES,
  SET_SEARCH_IMAGES,
} from "../../actionTypes/global";

const initState = {
  images: [],
  loading: true,
  query: "",
  searchImages: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_INITIAL_IMAGES: {
      const { data } = action;
      return {
        ...state,
        images: [...state.images, ...data],
        loading: false,
      };
    }
    case SET_SEARCH_IMAGES: {
      console.log(action);
      const { data } = action;
      return {
        ...state,
        searchImages: [...state.searchImages, ...data],
        images: state.searchImages,
        loading: false,
        query: action.query,
      };
    }
    default: {
      return { ...state };
    }
  }
}

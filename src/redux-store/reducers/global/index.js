import {
  SET_INITIAL_IMAGES,
  SET_SEARCH_IMAGES,
  SET_SEARCH_NEXT_IMAGES,
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
        images: state.images.concat(data),
        loading: false,
      };
    }
    case SET_SEARCH_IMAGES: {
      console.log(action);
      const { data } = action;
      const temp = [...state.searchImages, ...data];
      return {
        ...state,
        images: data,
        loading: false,
        query: action.query,
      };
    }
    case SET_SEARCH_NEXT_IMAGES: {
      const { data } = action;
      return {
        ...state,
        images: [...state.images, ...data],
        loading: false,
      };
    }
    default: {
      return { ...state };
    }
  }
}

import {
  SET_INITIAL_IMAGES,
  SET_SEARCH_IMAGES,
} from "../../actionTypes/global";

const initState = {
  images: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_INITIAL_IMAGES: {
      const { data } = action;
      return {
        ...state,
        images: data,
      };
    }
    case SET_SEARCH_IMAGES: {
      const { data } = action;
      return {
        ...state,
        images: data,
      };
    }
    default: {
      return { ...state };
    }
  }
}

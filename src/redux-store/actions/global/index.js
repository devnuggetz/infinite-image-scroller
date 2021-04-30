import {
  GET_INITITAL_IMAGES,
  GET_SEARCH_IMAGES,
  SET_INITIAL_IMAGES,
  SET_SEARCH_IMAGES,
} from "../../actionTypes/global";

export const getInitialImages = () => {
  return {
    type: GET_INITITAL_IMAGES,
  };
};

export const setInitialImages = (data) => {
  return {
    type: SET_INITIAL_IMAGES,
    data,
  };
};

export const getSearchImages = (query) => {
  return {
    type: GET_SEARCH_IMAGES,
    query,
  };
};

export const setSearchImages = (data) => {
  return {
    type: SET_SEARCH_IMAGES,
    data,
  };
};

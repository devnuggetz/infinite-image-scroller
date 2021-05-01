import {
  GET_INITITAL_IMAGES,
  GET_SEARCH_IMAGES,
  GET_SEARCH_NEXT_IMAGES,
  SET_INITIAL_IMAGES,
  SET_SEARCH_IMAGES,
  SET_SEARCH_NEXT_IMAGES,
} from "../../actionTypes/global";
export const getSearchImages = (query, page) => {
  console.log("action page", page);
  return {
    type: GET_SEARCH_IMAGES,
    query,
    page,
  };
};

export const getInitialImages = (page) => {
  console.log("Ye page:", page);
  return {
    type: GET_INITITAL_IMAGES,
    page,
  };
};

export const setInitialImages = (data) => {
  return {
    type: SET_INITIAL_IMAGES,
    data,
  };
};

export const setSearchImages = (data, query) => {
  return {
    type: SET_SEARCH_IMAGES,
    data,
    query,
  };
};

export const getSearchNextImages = (query, page) => {
  return {
    type: GET_SEARCH_NEXT_IMAGES,
    query,
    page,
  };
};

export const setSearchNextImages = (data, query) => {
  return {
    type: SET_SEARCH_NEXT_IMAGES,
    data,
    query,
  };
};

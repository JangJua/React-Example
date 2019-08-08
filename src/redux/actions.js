import {SET_ISSORTED, UPDATE_TITLE,SEARCH_NAME} from "./actionTypes";
import {ADD_PLAYER} from "./actionTypes";
import {CHANGE_SCORE} from "./actionTypes";
import {REMOVE_PLAYER} from "./actionTypes";

export const updateTitle = (title) => {
  return {
    type: UPDATE_TITLE,
    title
  }
}

export const addPlayer = (name) => {
  return {
    type: ADD_PLAYER,
    name
  }
}

export const changeScore = (id, delta) => {
  return {
    type: CHANGE_SCORE,
    id,
    delta
  }
}

export const removePlayer = (id) => {
  return {
    type: REMOVE_PLAYER,
    id
  }
}

export const setIsSorted = (isSorted) => {
  return {
    type : SET_ISSORTED,
    isSorted
  }
}

export const searchName = (name) => {
  return {
    type: SEARCH_NAME,
    name
  }
}
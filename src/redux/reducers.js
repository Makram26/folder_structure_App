import {
    IS_LOG_IN,
    IS_DARK_MODE,
    USER_INFO,
    MAP_VALUES,
    IS_PERMISSION,
    SET_LANGUAGE,
    EVENTS_IDS,
  } from './constants';
  const initialState = {
    logIn: false,
    darkMode: false,
    permission: false,
    userInfo: null,
    mapValues: [],
    language: 'en',
    interestedEventsIds: [],
  };
  
  export function userReducer(state = initialState, action) {
    switch (action.type) {
      case IS_LOG_IN:
        return {
          ...state,
          logIn: action.payload,
        };
      case IS_DARK_MODE:
        return {
          ...state,
          darkMode: action.payload,
        };
      case USER_INFO:
        return {
          ...state,
          userInfo: action.payload,
        };
      case MAP_VALUES:
        return {
          ...state,
          mapValues: action.payload,
        };
      case IS_PERMISSION:
        return {
          ...state,
          permission: action.payload,
        };
      case SET_LANGUAGE:
        return {
          ...state,
          language: action.payload,
        };
      case EVENTS_IDS:
        return {
          ...state,
          interestedEventsIds: action.payload,
        };
      default:
        return state;
    }
  }
  
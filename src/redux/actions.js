import {
    IS_DARK_MODE,
    IS_LOG_IN,
    MAP_VALUES,
    USER_INFO,
    IS_PERMISSION,
    SET_LANGUAGE,
    EVENTS_IDS,
  } from './constants';
  
  export const UpdateLanguage = language => dispatch => {
    dispatch({
      type: SET_LANGUAGE,
      payload: language,
    });
  };
  
  export const dispatchIsLogIn = logIn => dispatch => {
    dispatch({
      type: IS_LOG_IN,
      payload: logIn,
    });
  };
  
  export const dispatchPermission = permission => dispatch => {
    dispatch({
      type: IS_PERMISSION,
      payload: permission,
    });
  };
  
  export const dispatchIsDarkMode = darkMode => dispatch => {
    dispatch({
      type: IS_DARK_MODE,
      payload: darkMode,
    });
  };
  
  export const dispatchUserInfo = userInfo => dispatch => {
    dispatch({
      type: USER_INFO,
      payload: userInfo,
    });
  };
  export const dispatchMapValues = mapValues => dispatch => {
    dispatch({
      type: MAP_VALUES,
      payload: mapValues,
    });
  };
  
  export const dispatchEventsIds = eventsIds => dispatch => {
    dispatch({
      type: EVENTS_IDS,
      payload: eventsIds || [],
    });
  };
  
/* eslint-disable import/prefer-default-export */
import {useState} from 'react';

import {Animated} from 'react-native';
import {useStackNavigator} from './useNavigation';

export const useAnimatedNavigation = (initialValue = 0) => {
  const [slideAnimation] = useState(new Animated.Value(initialValue));
  const {navigate, replaceScreen} = useStackNavigator();

  const slideIn = (screenName, params) => {
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      if (params?.type === 'replace') {
        replaceScreen(screenName);
      } else {
        navigate(screenName, params);
      }
    });
  };

  return {
    slideIn,
    slideAnimation,
  };
};

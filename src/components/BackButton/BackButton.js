import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColors, AppIcons, normalized} from '../../utils/AppConstants';
import {appIcons} from '../../utils/AppConstants';
import {useStackNavigator} from '../../hooks/useNavigation';

const BackButton = ({style}) => {
  const {goBack} = useStackNavigator();
  return (
    <TouchableOpacity onPress={() => goBack()} style={[styles.main, {style}]}>
      <TouchableOpacity onPress={() => goBack()}>
        <appIcons.AntDesign
          name={'arrowleft'}
          size={AppIcons.commonIcons.medium}
          color={AppColors.secondaryColor.darkPurple}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    left: normalized.wp(2),
    top: normalized.hp('5'),
    height: normalized.wp('8%'),
    width: normalized.wp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: AppColors.secondaryColor.darkPink,
  },
});

import React from 'react';
import {ScrollView, Text} from 'react-native';
import {AppColors, AppFonts, normalized} from '../../utils/AppConstants';

const Settings = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: normalized.wp(6),
        paddingTop: normalized.hp(5),
        backgroundColor: AppColors.secondaryColor.lightPink,
      }}>
      <Text
        style={{
          fontSize: AppFonts.commonFont.mediumLarge,
          fontWeight: '700',
          color: AppColors.secondaryColor.darkGray,
        }}>
        Settings
      </Text>
      <Text
        style={{
          marginTop: normalized.hp(2),
          color: AppColors.secondaryColor.lightGray,
        }}>
        Toggle themes, notifications, and preferences from here. Wire this up to
        Redux or an API when ready.
      </Text>
    </ScrollView>
  );
};

export default Settings;

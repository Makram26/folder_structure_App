import React from 'react';
import {ScrollView, Text} from 'react-native';
import {AppColors, AppFonts, normalized} from '../../utils/AppConstants';

const Support = () => {
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
        Support
      </Text>
      <Text
        style={{
          marginTop: normalized.hp(2),
          color: AppColors.secondaryColor.lightGray,
        }}>
        Reach out to our team for help with bookings, payments, or general
        questions. Hook this screen to your help center or chat provider.
      </Text>
    </ScrollView>
  );
};

export default Support;

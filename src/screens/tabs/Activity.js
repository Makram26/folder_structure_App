import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {AppColors, AppFonts, normalized} from '../../utils/AppConstants';

const Activity = () => {
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
        Activity
      </Text>
      <View style={{marginTop: normalized.hp(2)}}>
        <Text style={{color: AppColors.secondaryColor.lightGray}}>
          Track your bookings, invitations, and recent interactions.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Activity;

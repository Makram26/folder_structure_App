import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {AppColors, AppFonts, normalized} from '../../utils/AppConstants';

const Discover = () => {
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
        Discover
      </Text>
      <View style={{marginTop: normalized.hp(2)}}>
        <Text style={{color: AppColors.secondaryColor.lightGray}}>
          Browse curated experiences and new arrivals. Hook up API calls here
          to pull live content.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Discover;

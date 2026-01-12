import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Button from '../../components/buttons/Buttons';
import {AuthContext} from '../../boot/routing';
import {AppColors, AppFonts, normalized} from '../../utils/AppConstants';

const Profile = () => {
  const {signOut} = useContext(AuthContext);

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
        Profile
      </Text>
      <View style={{marginTop: normalized.hp(2), gap: normalized.hp(2)}}>
        <Text style={{color: AppColors.secondaryColor.lightGray}}>
          Manage your details and logout from the app.
        </Text>
        <Button
          commonButton
          label="Sign out"
          txtColor="#000"
          onPress={signOut}
        />
      </View>
    </ScrollView>
  );
};

export default Profile;

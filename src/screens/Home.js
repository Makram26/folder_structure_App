import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors, AppFonts, normalized } from '../utils/AppConstants'
import {images} from '../assets/images'
import AnimatedContainer from '../components/Animations/MainNavigation'
import Loader from '../components/apploaders/Apploader'
import BackButton from '../components/BackButton/BackButton'
import Button from '../components/buttons/Buttons'
import { useAnimatedNavigation } from '../hooks/useAnimatedNavigation'
import { ToastMessage } from '../components/ToastMessage/ToastMessage'

const Home = () => {

  const { slideIn } = useAnimatedNavigation();

  const showLoginAlert = useLoginValidation();

  return (
    <>
      <AnimatedContainer
        delay={120}
        duration={1000}
        animationType="fadeInRight"
        isVisible={true}>

        <View>
          <Image style={{ width: normalized.wp(30), height: normalized.hp(30) }} source={images.logo} />
          <Text style={{ fontSize: AppFonts.commonFont.medium, fontWeight: 'bold' }}>App</Text>
        </View>

        <Loader />
        <BackButton />

        <View style={{ marginVertical: normalized.wp(10) }}>
          <Button commonButton={true} label="Buy Tickets" />

        </View>





      </AnimatedContainer>

      <Button
        smallBtn
        iconName="call-outline"
        label={'Phone'}
        onPress={() => {
          ToastMessage(
            'Alert',
            'This Functionality under process',
            'success',
          );
        }}
      />
      <Button
        largeBtn
        label={'Submit'}
        onPress={() => {
          slideIn('ResetPassword');
        }}
        txtColor={AppColors.secondaryColor.darkPurple}
      />

      <View style={{margin:normalized.wp(5)}}>
      <Button
        socialBtn
        label='google'
        disable={false}
        // onPress={() => withGooglesignIn()}
        txtColor={AppColors.primaryColor.darkBlack}
      />
      </View>

      <Button
              menuBtn
              label='profile'
              txtColor={AppColors.primaryColor.darkBlack}
              // onPress={() => {
              //   if (userInfo) {
              //     slideIn('Profile');
              //   } else {
              //     showLoginAlert();
              //   }
              // }}
            />

<Button
              changePassword
              label={'changePassword'}
              txtColor={AppColors.primaryColor.darkBlack}
              // onPress={() => {
              //   if (userInfo) {
              //     slideIn('ChangePassword');
              //   } else {
              //     showLoginAlert();
              //   }
              // }}
            />


<Button
              favorite
              label={'favorite'}
              txtColor={AppColors.primaryColor.darkBlack}
              // onPress={() => {
              //   if (userInfo) {
              //     slideIn('Favorite');
              //   } else {
              //     showLoginAlert();
              //     // slideIn('Favorite');
              //   }
              // }}
            />

     


    </>

  )
}

export default Home

const styles = StyleSheet.create({})
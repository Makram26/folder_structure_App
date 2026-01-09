import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppColors, AppFonts, normalized } from '../utils/AppConstants'
import { images } from '../assets/images'
import AnimatedContainer from '../components/Animations/MainNavigation'
import Loader from '../components/apploaders/Apploader'
import BackButton from '../components/BackButton/BackButton'
import Button from '../components/buttons/Buttons'
import { useAnimatedNavigation } from '../hooks/useAnimatedNavigation'
import { ToastMessage } from '../components/ToastMessage/ToastMessage'
import useLoginValidation from '../hooks/LoginValidation'
import Headers from '../components/headers/Headers';
import CustomModal from '../components/Modal/Modal'
import TextInputs from '../components/TextInputs/TextInputs'


const Home = () => {

  const { slideIn } = useAnimatedNavigation();

  const showLoginAlert = useLoginValidation();

  const [languageModal, setLanguageModal] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);





  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <ScrollView>

      <Headers
        backBtnHeader
        label={'headers.privacyPolicy'}
      // onPress={() => {
      //   navigation.goBack();
      // }}
      />

      <Headers
        backBtnHeader2
      // onPress={() => {
      //   slideIn().goBack();
      // }}+
      />

      <Headers
        label={('headers.events')}
        filterHeader={true}
        hidefilter={true}
        backbtn={true}
        filterType={'events'}
      />

      <Headers commonHeader={false} showSearch={false} withSearch={false} label={('headers.settings')} />


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

      <Button
        Filter
        label={'buttonsTxt.apply'}
        txtColor={AppColors.secondaryColor.darkPurple}
      // onPress={() =>
      //   navigation.navigate('FilterDiscover', {
      //     userCoordinates:
      //       search == 'Search here'
      //         ? [MapValues?.longitude, MapValues?.latitude]
      //         : [longitude, latitude],
      //     range: disNo * 1000,
      //     page: 1,
      //     // costType: selectedEvent,
      //     // age: sendAge,
      //     // type: null
      //   })
      // }
      />

      <View style={{ margin: normalized.wp(5) }}>
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

      <Button
        contactTips
        label={'contact & Tips'}
        txtColor={AppColors.primaryColor.darkBlack}
      // onPress={() => {}}
      />


      <Button
        termCondition
        label={'term&Conditions'}
        txtColor={AppColors.primaryColor.darkBlack}
      // onPress={() => slideIn('TermConditions')}
      />


      <Button
        privacy
        label={'buttonsTxt.privacy&Policy'}
        txtColor={AppColors.primaryColor.darkBlack}
      // onPress={() => slideIn('PrivacyPolicy')}
      />
      <Button
        shareApp
        label={'buttonsTxt.sharetheApp'}
        txtColor={AppColors.primaryColor.darkBlack}
      // onPress={() => shareEvent()}
      />
      <Button
        location
        label={'buttonsTxt.location'}
        txtColor={AppColors.primaryColor.darkBlack}
      // onPress={() => openMap()}
      />
      <Button
        mobile
        label={'buttonsTxt.app&Sessions'}
        txtColor={AppColors.primaryColor.darkBlack}
      // onPress={() => {}}
      />
      <Button
        languageBtn
        label={'buttonsTxt.changeLang'}
        txtColor={AppColors.primaryColor.darkBlack}
        onPress={() => setLanguageModal(true)}
      />
      <CustomModal
        changeLang
        visible={languageModal}
        onClose={value => setLanguageModal(value)}
      />


      <Button
        deletebtn
        label={'buttonsTxt.deleteAccount'}
        txtColor={AppColors.primaryColor.darkBlack}
      // onPress={() => {
      //   if (userInfo?.rememberMe === true) {
      //     handleDeleteUser(uid);
      //   } else {
      //     showLoginAlert();
      //   }
      // }}
      />



      <Button
        logOutbtn
        label={'buttonsTxt.logOut'}
        txtColor={AppColors.primaryColor.darkBlack}
        onPress={() => openModal()}
      />

      <Button
        signUpbtn
        label={'buttonsTxt.loginSignUp'}
        txtColor={AppColors.primaryColor.darkBlack}
      // onPress={() => slideIn('AuthStack')}
      />



      <TextInputs
        simple
        placeholder={('placeholders.email')}
        placeholderTextColor={
          AppColors.secondaryColor.lightGray
        }
        keyboardType={'email-address'}
        returnKeyType={'next'}
        simpleTxtInput={true}
        // value={props.values.Email}
        maxLength={50}
      // onChangeText={props.handleChange('Email')}
      />

      <TextInputs
        profileTxtInput
        placeholder={'Enter School or Uni'}
        returnKeyType={'next'}
        simpleTxtInput={true}
        maxLength={50}
      // value={schoolUni}
      // onChangeText={text => {
      //   setSchoolUni(text);
      // }}
      />





      <View>
        <TextInputs
          password
          placeholder={('placeholders.currentpassword')}
          placeholderTextColor={AppColors.secondaryColor.lightGray}
          returnKeyType={'next'}
          secureTextEntry={true}
        // value={props.values.OldPassword}
        // onChangeText={props.handleChange('OldPassword')}
        />
        {/* <Text style={styles.errorTxt}>
          {props.touched.OldPassword && props.errors.OldPassword}
        </Text> */}
      </View>
      <View>
        <TextInputs
          password
          placeholder={('placeholders.newPassword')}
          placeholderTextColor={AppColors.secondaryColor.lightGray}
          returnKeyType={'next'}
          secureTextEntry={true}
        // value={props.values.NewPassword}
        // onChangeText={props.handleChange('NewPassword')}
        />
        {/* <Text style={styles.errorTxt}>
          {props.touched.NewPassword && props.errors.NewPassword}
        </Text> */}
      </View>
      <View>
        <TextInputs
          password
          placeholder={('placeholders.retypenewpassword')}
          placeholderTextColor={AppColors.secondaryColor.lightGray}
          returnKeyType={'done'}
          secureTextEntry={true}
        // value={props.values.ConfirmPassword}
        // onChangeText={props.handleChange('ConfirmPassword')}
        />
        {/* <Text style={styles.errorTxt}>
          {props.touched.ConfirmPassword &&
            props.errors.ConfirmPassword}
        </Text> */}
      </View>


      <TextInputs
        PhoneNo
        placeholder={'Phone Number'}
        placeholderTextColor={
          AppColors.secondaryColor.lightGray
        }
        keyboardType={'default'}
        returnKeyType={'next'}
      // value={props.values.PhoneNumber}
      // onChangeText={props.handleChange('PhoneNumber')}
      />

      <TextInputs
        userName
        placeholder={('placeholders.fullName')}
        placeholderTextColor={
          AppColors.secondaryColor.lightGrayz
        }
        keyboardType={'default'}
        returnKeyType={'next'}
      // value={props.values.FullName}
      // onChangeText={props.handleChange('FullName')}
      />
      {/* <Text style={styles.errorTxt}>
                        {props.touched.FullName && props.errors.FullName}
                      </Text> */}




      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.Alerttxt}>{'allTxts.alert'}</Text>
            <Text style={styles.txtcolor}>{'allTxts.suretoLogout'}</Text>
            <View style={styles.wrapText}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.txtCancel}>{'allTxts.cancel'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
              // onPress={handleOkPress}
              >
                <Text style={styles.textOk}>{'allTxts.ok'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


    </ScrollView>

  )
}

export default Home

const styles = StyleSheet.create({

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#f2f3f5',
    paddingHorizontal: normalized.wp('5%'),
    height: normalized.hp('20%'),
    width: normalized.wp('90%'),
    paddingVertical: normalized.wp('5%'),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 30,
    elevation: 5,
  },
  Alerttxt: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.large,
    fontWeight: '500',
    marginBottom: normalized.hp('1%'),
  },

  txtcolor: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.small,
  },

  txtCancel: {
    color: 'green',
    fontSize: AppFonts.commonFont.small,
    fontWeight: '400',
  },

  wrapText: {
    flexDirection: 'row',
    marginTop: normalized.hp('4.5%'),
    alignItems: 'center',
    paddingLeft: normalized.hp('23%'),
  },
  textOk: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.small,
    paddingLeft: normalized.hp('5%'),
  },
})
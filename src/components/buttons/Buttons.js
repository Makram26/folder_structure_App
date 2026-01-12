/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Image, Text, Switch, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { images } from '../../assets/images';
import {
  AppColor,
  AppColors,
  AppIcons,
  commonStyleSheet,
  appIcons,
  normalized,
  AppFonts,
} from '../../utils/AppConstants';
import { dispatchIsDarkMode } from '../../redux/actions';


function Button(props) {
  const isDarkMode = useSelector(state => state.userReducer.darkMode);
  const dispatch = useDispatch();


  const AppColorss = AppColor();
  const [isEnabled, setIsEnabled] = useState(isDarkMode);

  const toggleSwitch = t => {
    dispatch(dispatchIsDarkMode(t));
    setIsEnabled(!isEnabled);
  };

  const {
    label,
    onPress,
    txtColor,
    borderCol,
    marginTop,
    socialBtn,
    largeBtn,
    menuBtn,
    commonButton,
    Filter,
    interested,
    interestedBtn,
    changePassword,
    contactTips,
    termCondition,
    privacy,
    shareApp,
    location,
    mobile,
    darkMode,
    deletebtn,
    logOutbtn,
    signUpbtn,
    smallBtn,
    discoverCardLastBtn,
    iconName,
    contactUsBtn,
    adressbtn,
    disable,
    isInterested,
    languageBtn,
    loading,
    eventFl,
    favorite,
    image
  } = props;
  return (
    <>
      {largeBtn ? (
        <>
          <View style={{ ...styles.largeBtnWrap, marginTop: marginTop }}>
            <TouchableOpacity
              disabled={disable}
              onPress={onPress}
              style={{
                ...styles.largeBtnWrap,
                // borderColor: borderCol,
              }}>
              <Text style={{ ...styles.txtTitle, color: txtColor }}>{label}</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : smallBtn ? (
        <>
          <View
            style={{
              marginTop: marginTop,
            }}>
            <TouchableOpacity
              onPress={onPress}
              style={{
                ...styles.smallBtnWrap,
                borderColor: borderCol,
              }}>
              <appIcons.Ionicons
                name={iconName}
                color={AppColors.secondaryColor.darkPurple}
                size={AppIcons.commonIcons.smallest}
              />
              <Text style={{ ...styles.smallBtntxt }}>{label}</Text>
            </TouchableOpacity>
          </View>
        </>
      )  : socialBtn ? (
        <>
          <TouchableOpacity
            onPress={onPress}
            style={{ ...styles.socialBtnWrap, borderColor: AppColors.secondaryColor.borderColor, marginTop: marginTop }}>
            <TouchableOpacity
              disabled={disable}
              onPress={onPress}
              style={{
                ...styles.socialbtn,
                borderColor: borderCol,
              }}>
              <View style={styles.imgLogoWrap}>
                <Image
                  source={image}
                  resizeMode="contain"
                  style={styles.innerImg}
                />
              </View>
              <Text style={{ ...styles.socialgoogleTxt, color: txtColor }}>
                {label}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </>
      ) : menuBtn ? (
        <>
          <TouchableOpacity
            onPress={onPress}
            style={[
              styles.menuBtnMain,
              { backgroundColor: AppColorss.primaryColor.settingBtnColor },
            ]}>
            <appIcons.Ionicons
              name={'person-circle-outline'}
              color={AppColorss.primaryColor.darkBlack}
              size={AppIcons.commonIcons.smallest}
              style={{marginTop:normalized.wp(1)}}
            />
            <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
          </TouchableOpacity>
        </>
      ) : changePassword ? (
        <>
          <TouchableOpacity
            onPress={onPress}
            style={[
              styles.menuBtnMain,
              { backgroundColor: AppColorss.primaryColor.settingBtnColor },
            ]}>
            <appIcons.MaterialCommunityIcons
              name={'lock-outline'}
              color={AppColorss.primaryColor.darkBlack}
              size={AppIcons.commonIcons.smallest}
            />
            <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
          </TouchableOpacity>
        </>
      ) : favorite ?
        <>
          <TouchableOpacity
            onPress={onPress}
            style={[
              styles.menuBtnMain,
              { backgroundColor: AppColorss.primaryColor.settingBtnColor },
            ]}>
            <appIcons.AntDesign
              name={'hearto'}
              color={AppColorss.primaryColor.darkBlack}
              size={AppIcons.commonIcons.smallest}
            />
            <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
          </TouchableOpacity>
        </>
        : contactTips ? (
          <>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.menuBtnMain,
                { backgroundColor: AppColorss.primaryColor.settingBtnColor },
              ]}>
              <appIcons.MaterialCommunityIcons
                name={'lightbulb-on-outline'}
                color={AppColorss.primaryColor.darkBlack}
                size={AppIcons.commonIcons.smallest}
              />
              <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
            </TouchableOpacity>
          </>
        ) : termCondition ? (
          <>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.menuBtnMain,
                { backgroundColor: AppColorss.primaryColor.settingBtnColor },
              ]}>
              <appIcons.Entypo
                name={'text-document'}
                color={AppColorss.primaryColor.darkBlack}
                size={AppIcons.commonIcons.smallest}
              />
              <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
            </TouchableOpacity>
          </>
        ) : privacy ? (
          <>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.menuBtnMain,
                { backgroundColor: AppColorss.primaryColor.settingBtnColor },
              ]}>
              <appIcons.MaterialCommunityIcons
                name={'shield-lock'}
                color={AppColorss.primaryColor.darkBlack}
                size={AppIcons.commonIcons.smallest}
              />
              <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
            </TouchableOpacity>
          </>
        ) : shareApp ? (
          <>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.menuBtnMain,
                { backgroundColor: AppColorss.primaryColor.settingBtnColor },
              ]}>
              <appIcons.AntDesign
                name={'sharealt'}
                color={AppColorss.primaryColor.darkBlack}
                size={AppIcons.commonIcons.smallest}
              />
              <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
            </TouchableOpacity>
          </>
        ) : location ? (
          <>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.menuBtnMain,
                { backgroundColor: AppColorss.primaryColor.settingBtnColor },
              ]}>
              <appIcons.FontAwesome5
                name={'map-marker-alt'}
                color={AppColorss.primaryColor.darkBlack}
                size={AppIcons.commonIcons.smallest}
              />
              <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
            </TouchableOpacity>
          </>
        ) : mobile ? (
          <>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.menuBtnMain,
                { backgroundColor: AppColorss.primaryColor.settingBtnColor },
              ]}>
              <appIcons.Entypo
                name={'mobile'}
                color={AppColorss.primaryColor.darkBlack}
                size={AppIcons.commonIcons.smallest}
              />
              <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
            </TouchableOpacity>
          </>
        ) : languageBtn ? (
          <>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.menuBtnMain,
                { backgroundColor: AppColorss.primaryColor.settingBtnColor },
              ]}>
              <appIcons.FontAwesome
                name={'american-sign-language-interpreting'}
                color={AppColorss.primaryColor.darkBlack}
                size={AppIcons.commonIcons.smallest}
              />
              <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
            </TouchableOpacity>
          </>
        ) : darkMode ? (
          <>
            <View
              style={[
                styles.menuBtnMain,
                {
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  backgroundColor: AppColorss.primaryColor.settingBtnColor,
                },
              ]}>
              <View style={commonStyleSheet.flexAndAligned}>
                <appIcons.MaterialIcons
                  name={'dark-mode'}
                  color={AppColorss.primaryColor.darkBlack}
                  size={AppIcons.commonIcons.smallest}
                />
                <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
              </View>

              <Switch
                trackColor={{
                  false: AppColors.secondaryColor.lightGray,
                  true: AppColors.secondaryColor.selectionColor,
                }}
                thumbColor={AppColors.primaryColor.darkWhite}
                ios_backgroundColor="#3e3e3e"
                onValueChange={t => toggleSwitch(t)}
                value={isEnabled}
                style={styles.WrapSwitch}
              />
            </View>
          </>
        ) : deletebtn ? (
          <>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.menuBtnMain,
                { backgroundColor: AppColorss.primaryColor.settingBtnColor },
              ]}>
              <appIcons.AntDesign
                name={'delete'}
                color={AppColorss.primaryColor.darkBlack}
                size={AppIcons.commonIcons.smallest}
              />
              <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
            </TouchableOpacity>
          </>
        ) : logOutbtn ? (
          <>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.menuBtnMain,
                { backgroundColor: AppColorss.primaryColor.settingBtnColor },
              ]}>
              <appIcons.Entypo
                name={'log-out'}
                color={AppColorss.primaryColor.darkBlack}
                size={AppIcons.commonIcons.smallest}
              />
              <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
            </TouchableOpacity>
          </>
        ) : signUpbtn ? (
          <>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.menuBtnMain,
                { backgroundColor: AppColorss.primaryColor.settingBtnColor },
              ]}>
              <appIcons.Entypo
                name={'login'}
                color={AppColorss.primaryColor.darkBlack}
                size={AppIcons.commonIcons.smallest}
              />
              <Text style={{ ...styles.TxtFont, color: txtColor }}>{label}</Text>
            </TouchableOpacity>
          </>
        ) : contactUsBtn ? (
          <>
            <TouchableOpacity onPress={onPress} style={styles.contactWrap}>
              <appIcons.AntDesign
                name={iconName}
                color={AppColorss.primaryColor.darkBlack}
                size={AppIcons.commonIcons.smallest}
              />
              <Text
                style={[
                  styles.gmailtxt,
                  { color: AppColorss.primaryColor.darkBlack },
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          </>
        ) : adressbtn ? (
          <>
            <View onPress={onPress} style={styles.contactWrap}>
              <appIcons.AntDesign
                name={iconName}
                color={AppColorss.primaryColor.darkBlack}
                size={AppIcons.commonIcons.small}
              />
              <Text
                style={[
                  styles.gmailtxt,
                  { color: AppColorss.primaryColor.darkBlack },
                ]}>
                {label}
              </Text>
            </View>
          </>
        ) : commonButton ? (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            <LinearGradient
              colors={['#bab8b3', '#FFFFFF']}
              style={{ ...styles.commonButtonView, marginTop: marginTop }}>
              <TouchableOpacity
                onPress={onPress}
                style={{
                  ...styles.commonButton,
                  borderColor: borderCol,
                  position: 'absolute',
                  bottom: 0,
                }}>
                <Text style={{ ...styles.socialTxt, color: txtColor }}>
                  {label}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </>
        ) : Filter ? (
          <>
            <TouchableOpacity onPress={onPress} style={styles.FilterButtonView}>
              <Text style={{ ...styles.socialTxt, color: txtColor }}>{label}</Text>
            </TouchableOpacity>
          </>
        ) : null}
    </>
  );
}
export default Button;

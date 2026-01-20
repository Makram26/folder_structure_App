/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import {
  AppColor,
  AppColors,
  appIcons,
  commonStyleSheet,
  normalized,
} from '../../utils/AppConstants';
import styles from './styles';

function TextInputs(props) {
  const [icEye, setIcEye] = useState('eye-with-line');
  const [showPassword, setShowPassword] = useState(true);
  const AppColorss = AppColor();
  const {
    marginTop,
    simple,
    placeholder,
    maxLength,
    secureTextEntry,
    value,
    onChangeText,
    search,
    backgroundColor,
    nickname,
    placeholderTextColor,
    password,
    lockshow,
    PhoneNo,
    userName,
    profileTxtInput,
    filter,
    onFocus,
    onBlur,
    isFocused,
  } = props;

  const eyeIconFun = () => {
    setShowPassword(!showPassword);
    if (showPassword === true) {
      setIcEye('eye');
    } else {
      setIcEye('eye-with-line');
    }
  };

  return (
    <>
      {simple ? (
        <>
          <View style={{ ...styles.wrapSimple, borderColor: AppColorss.primaryColor.borderColors }}>
            <appIcons.Entypo
              name="mail"
              size={17}
              style={styles.lockIcon}
              color={AppColorss.primaryColor.textColor}
            />
            <TextInput
              placeholder={placeholder}
              style={{
                ...styles.txtInpStyle,
                marginTop: marginTop,
                color: AppColorss.primaryColor.darkBlack,
              }}
              placeholderTextColor={placeholderTextColor}
              maxLength={maxLength}
              autoCapitalize={'none'}
              autoCorrect={false}
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={onChangeText}
              cursorColor={AppColorss.primaryColor.textColor}
            />
          </View>
        </>
      ) : profileTxtInput ? (
        <>
          <View
            style={[
              styles.profileTxtInput,
              isFocused && {
                borderColor: AppColors.primaryColor.mainContent,
              },
            ]}>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={
                isFocused
                  ? AppColors.primaryColor.mainContent
                  : AppColorss.primaryColor.lightGray
              }
              style={{
                ...styles.txtInpStyle,
                marginTop: marginTop,
                color: isFocused
                  ? AppColors.primaryColor.mainContent
                  : AppColors.primaryColor.lightGray,
              }}
              maxLength={maxLength}
              autoCapitalize={'none'}
              autoCorrect={false}
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={onChangeText}
              onFocus={onFocus}
              onBlur={onBlur}
              cursorColor={AppColors.primaryColor.mainContent}
            />
          </View>
        </>
      ) : password ? (
        <>
          <View style={[styles.wrapSimple, isFocused && {
            borderColor: AppColors.primaryColor.mainContent,
          }]}>
            {
              lockshow ? (
                <appIcons.Fontisto
                  name="locked"
                  size={17}
                  color={AppColorss.primaryColor.textColor}
                  style={styles.lockIcon}
                />
              ) :
                (
                  <View style={{ paddingHorizontal: normalized.wp(1), }}>
                  </View>
                )
            }
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={
                isFocused
                  ? AppColors.primaryColor.mainContent
                  : AppColors.primaryColor.lightGray
              }
              style={{
                ...styles.txtInpStyle,
                marginTop: marginTop,
                color: isFocused
                  ? AppColors.primaryColor.mainContent
                  : AppColorss.primaryColor.lightGray,
              }}
              maxLength={maxLength}
              autoCapitalize={'none'}
              autoCorrect={false}
              secureTextEntry={showPassword}
              value={value}
              onChangeText={onChangeText}
              onFocus={onFocus}
              onBlur={onBlur}
              cursorColor={AppColors.primaryColor.mainContent}
            />
            <TouchableOpacity onPress={() => eyeIconFun()}>
              <appIcons.Entypo
                name={icEye}
                size={17}
                color={isFocused
                  ? AppColors.primaryColor.mainContent
                  : AppColors.secondaryColor.lightGray}
                style={styles.icons}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : PhoneNo ? (
        <>
          <View style={styles.wrapSimple}>
            <appIcons.Entypo
              name="phone"
              size={17}
              style={styles.lockIcon}
              color={AppColorss.primaryColor.textColor}
            />
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              style={{
                ...styles.txtInpStyle,
                marginTop: marginTop,
                color: AppColorss.primaryColor.darkBlack,
              }}
              maxLength={maxLength}
              autoCapitalize={'none'}
              autoCorrect={false}
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={onChangeText}
              cursorColor={AppColorss.primaryColor.textColor}
            />
          </View>
        </>
      ) : userName ? (
        <>
          <View style={{ ...styles.wrapSimple, borderColor: AppColorss.primaryColor.borderColors }}>
            <appIcons.Entypo
              name="user"
              size={17}
              style={styles.lockIcon}
              color={AppColorss.primaryColor.textColor}
            />
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              style={{
                ...styles.txtInpStyle,
                marginTop: marginTop,
                color: AppColorss.primaryColor.darkBlack,
              }}
              maxLength={maxLength}
              autoCapitalize={'none'}
              autoCorrect={false}
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={onChangeText}
              cursorColor={AppColorss.primaryColor.textColor}
            />
          </View>
        </>
      ) : search ? (
        <>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={AppColors.primaryColor.darkWhite}
            style={{
              ...styles.txtInpStyle,
              marginTop: marginTop,
              color: AppColorss.primaryColor.darkBlack,
            }}
            maxLength={maxLength}
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
          />
        </>
      ) : nickname ? (
        <>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={{
              ...styles.nickname,
              marginTop: marginTop,
              backgroundColor: backgroundColor,
            }}
            maxLength={maxLength}
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
          />
        </>
      ) : filter ? (
        <View style={{ ...styles.wrapSimple, borderColor: AppColorss.primaryColor.borderColors, marginHorizontal: normalized.wp(1) }}>
          <appIcons.EvilIcons
            name="search"
            size={20}
            color={AppColorss.primaryColor.textColor}
            style={styles.lockIcon}
          />
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={{
              ...styles.txtInpStyle,
              marginTop: marginTop,
              color: AppColorss.primaryColor.darkBlack,
            }}
            maxLength={maxLength}
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            cursorColor={AppColors.primaryColor.darkBlack}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
export default TextInputs;

/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import {TouchableOpacity, TextInput, Image, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  AppIcons,
  AppColors,
  MaterialIcons,
  appIcons,
  AppColor,
} from '../../utils/AppConstants';
import styles from './styles';
import {images} from '../../assets/images';
import AnimatedContainer from '../Animations/MainNavigation';
import {useStackNavigator} from '../../hooks/useNavigation';
import {useAnimatedNavigation} from '../../hooks/useAnimatedNavigation';

function Headers({
  label,
  homeFeedHeader,
  backBtnHeader,
  showSearch,
  commonHeader,
  setShowLoader,
  backBtnHeader2,
  withSearch,
  filterHeader,
  backbtn,
  offers,
  hidefilter,
  filterType
}) {
  const {goBack} = useStackNavigator();
  const {slideIn} = useAnimatedNavigation();
  const AppColorss = AppColor();

  return (
    <>
      {homeFeedHeader ? (
        <>
          <LinearGradient
            colors={AppColorss.primaryColor.darkBlack}
            style={{
              ...styles.headerStyle1,
            }}>
            <View style={styles.flexRow}>
              <View style={styles.wrapImg}>
                <Image
                  resizeMode="contain"
                  style={styles.innerImg}
                  source={images.logo}
                />
              </View>
              <Text style={{...styles.txtTitle1}}>{label}</Text>
              <Text>{'          '}</Text>
            </View>
          </LinearGradient>
        </>
      ) : backBtnHeader ? (
        <>
          <View style={styles.flexRow}>
            <TouchableOpacity
              onPress={() => goBack()}
              style={styles.flexRowHeader2}>
              <appIcons.AntDesign
                name={'arrowleft'}
                size={AppIcons.commonIcons.small}
                color={AppColors.primaryColor.darkBlack}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.txtTitle1,
                {color: AppColorss.primaryColor.darkBlack,marginLeft:0},
              ]}>
              {label}
            </Text>
            <Text>{'             '}</Text>
          </View>
        </>
      ) : backBtnHeader2 ? (
        <>
          <View style={styles.HeaderWrap}>
            <TouchableOpacity
              onPress={() => goBack()}
              style={styles.flexRowHeader2}>
              <appIcons.AntDesign
                name={'arrowleft'}
                size={AppIcons.commonIcons.smallest}
                color={AppColors.primaryColor.darkBlack}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : filterHeader ? (
        <>
          <View style={styles.flexRow}>
            {backbtn && (
              <TouchableOpacity
                onPress={() => goBack()}
                style={styles.flexRowHeader2}>
                <appIcons.AntDesign
                  name={'arrowleft'}
                  size={AppIcons.commonIcons.small}
                  color={AppColors.primaryColor.darkBlack}
                />
              </TouchableOpacity>
            )}
            {/* <View style={styles.alignCenter}> */}
              <Text
                style={[
                  styles.txtTitle2,
                  {color: AppColorss.primaryColor.darkBlack},
                ]}>
                {label}
              </Text>
            {/* </View> */}
            {
              hidefilter && 
              <TouchableOpacity
              style={styles.flexRowHeader2}
              onPress={() => slideIn('FilterScreen', filterType)}>
              <appIcons.FontAwesome
                name={'sliders'}
                size={AppIcons.commonIcons.smallest}
                color={AppColors.secondaryColor.darkPurple}
              />
            </TouchableOpacity>
            }
            
          </View>
        </>
      ) : commonHeader ? (
        <>
          <View style={styles.WrapCommonHeader}>
            <Text
              style={{
                ...styles.commonHeaderTxt,
                color: AppColorss.primaryColor.darkBlack,
              }}>
              {label}
            </Text>
          </View>
        </>
      ) : (
        <View style={styles.iconView}>
          <View style={styles.labelTxt}>
            <Text
              style={{
                color: AppColors.secondaryColor.lightWhite,
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              {label}
            </Text>
          </View>
          {showSearch && (
            <AnimatedContainer
              style={styles.wrapper}
              delay={100}
              duration={100}
              animationType="fadeInRight"
              isVisible={true}>
              <View style={styles.wrapper}>
                <TextInput
                  placeholder="Vad vill do soka efter?"
                  placeholderTextColor="white"
                  style={styles.headerText}
                />
              </View>
            </AnimatedContainer>
          )}
          {withSearch && (
            <TouchableOpacity
              onPress={() => setShowLoader(prev => !prev)}
              style={{alignSelf: 'flex-end'}}>
              <appIcons.AntDesign name="search1" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
      )}
    </>
  );
}
export default Headers;

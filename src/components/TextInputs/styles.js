import {Platform, StyleSheet} from 'react-native';
import {AppColors, AppFonts, normalized} from '../../utils/AppConstants';

const styles = StyleSheet.create({
  mediumBtnWrap: {
    borderWidth: 1,
    width: normalized.wp('55%'),
    height: normalized.hp('8%'),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtInpStyle: {
    // fontSize: AppFonts.commonFont.small,
    fontSize: AppFonts.commonFont.mediumSmall,
    fontWeight:"400",
  
    // height: normalized.hp('6%'),
    height:normalized.wp("10%"),
    // paddingVertical:normalized.wp(20),
    width: normalized.wp('82%'),
    flex: 1,
  },
  nickname: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: AppFonts.commonFont.small,
    height: normalized.hp('7%'),
    borderRadius: 20,
    width: normalized.wp('95%'),
    padding: 10,
  },
  txtInpSty: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.small,
    height: normalized.hp('7%'),
    borderWidth: 1,
    borderColor: AppColors.primaryColor.darkWhite,
    borderRadius: 20,
    paddingHorizontal: '5%',
    width: normalized.wp('90%'),
  },
  icons: {
    width: normalized.wp('10%'),
  },
  lockIcon: {
    paddingLeft: normalized.hp('2%'),
    // paddingRight: normalized.hp('1%'),
    paddingRight: normalized.hp('1.5%'),
  },
  wrapSimple: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    // borderWidth: 1.5,
    borderWidth: 1,
    borderColor: AppColors.secondaryColor.borderColor,
    marginTop: normalized.wp('1%'),
  },
  wrapSimple2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.primaryColor.darkWhite,
    borderRadius: 10,
    marginTop: normalized.wp('3%'),
    elevation: 3,
  },
  profileTxtInput: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AppColors.secondaryColor.lightGray,
    // marginTop: normalized.wp(2),
    paddingHorizontal: normalized.wp(2),
  },
});

export default styles;

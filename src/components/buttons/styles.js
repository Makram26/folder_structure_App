import { Platform, StyleSheet } from 'react-native';
import {
  AppColors,
  AppFonts,
  normalized,
  normalizedFont,
} from '../../utils/AppConstants';

const styles = StyleSheet.create({
  largeBtnWrap: {
    alignSelf: 'center',
    height: normalized.hp('6%'),
    backgroundColor: AppColors.primaryColor.mainContent,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: normalized.wp('88%'),



    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4



  },
  smallBtnWrap: {
    alignSelf: 'center',
    height: normalized.hp('6%'),
    backgroundColor: AppColors.secondaryColor.darkPink,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: normalized.wp('44%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialBtnWrap: {
    flexDirection: 'row',
    // height: normalized.hp('5.5%'),
    paddingVertical: normalized.hp('1.1%'),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:"center",
    width: normalized.wp('65%'),
    marginVertical:normalized.wp(2),
    
    borderWidth: 1,
    borderRadius: 100,
    borderColor: AppColors.secondaryColor.lightGray,
  },
  menuBtnMain: {
    flexDirection: 'row',
    // height: normalized.hp('6%'),
    paddingVertical: normalized.wp('4'),
    alignItems: 'center',
    paddingLeft: normalized.wp('3%'),
    borderRadius: 10,
    marginTop: normalized.wp('3.5'),

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    // marginTop: 5,
  },
  socialbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commonButtonView: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: normalized.hp('7%'),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: normalized.wp('90%'),
  },
  FilterButtonView: {
    // alignSelf: 'center',
    // height: normalized.hp('5%'),
    // borderRadius: 20,
    // width: normalized.wp('80%'),
    // backgroundColor: 'black',
    // position: 'absolute',
    // bottom: normalized.hp(2),



    alignSelf: 'center',
    height: normalized.hp('6%'),
    backgroundColor: AppColors.secondaryColor.darkPink,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: normalized.wp(10),
    width: normalized.wp('96%'),

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4
  },
  commonButton: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: normalized.hp('7%'),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: normalized.wp('90%'),
  },
  imgLogoWrap: {
    width: normalized.wp('7%'),
    height: normalized.wp('7%'),
    paddingRight: normalized.wp('2%'),
    marginRight: normalized.wp("2%")
  },
  innerImg: {
    width: '100%',
    height: '100%',

  },
  txtTitle: {
    fontSize: AppFonts.commonFont.small,
    fontWeight: '500',
  },
  largeBtnWrap1: {
    alignSelf: 'center',
    height: normalized.hp('6%'),
    borderRadius: 10,
    width: normalized.wp('94%'),
  },
  largeBtnWrap2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalized.wp('5%'),
  },
  manuBtn2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalized.wp('5%'),
  },

  iconTxtBtn: {
    backgroundColor: AppColors.primaryColor.darkWhite,
    flexDirection: 'row',
    width: normalized.wp('85%'),
    borderWidth: 0,
  },

  iconImg: {
    height: normalized.wp('6%'),
    width: normalized.wp('6%'),
    marginRight: normalized.wp('2%'),
  },

  // txtTitle: {
  //   fontSize: AppFonts.commonFont.medium,
  //   fontWeight: 'bold',
  // },
  smallBtntxt: {
    fontSize: AppFonts.commonFont.small,
    fontWeight: 'bold',
    paddingLeft: normalized.hp('2'),
    color: AppColors.secondaryColor.darkPurple,
  },
  TxtFont: {
    fontSize:
      Platform.OS == 'ios'
        ? AppFonts.commonFont.small
        : AppFonts.commonFont.small,
    fontWeight: '500',
    paddingLeft: normalized.wp('5'),
  },
  manuBtn2Txt: {
    fontSize: AppFonts.commonFont.small,
    fontWeight: '500',
    paddingLeft: normalized.hp('2'),
  },

  txtStyle: {
    fontSize: AppFonts.commonFont.small,
    fontWeight: '500',
    color: AppColors.primaryColor.darkBlack,
  },
  socialTxt: {
    fontSize: AppFonts.commonFont.medium,
    fontWeight: '500',
    alignSelf: 'center',
  },
  socialgoogleTxt: {
    fontSize: AppFonts.commonFont.mediumSmall,
    fontWeight: "400",
    alignSelf: 'center',
  },

  btnIconWrap: {
    // backgroundColor: AppColors.grey.dark,
    backgroundColor: 'red',
    alignItems: 'center',
    height: normalized.wp('38%'),
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: normalized.hp('3%'),
    width: normalized.wp('42%'),
  },

  btnIcon: {
    height: normalized.wp('7.5%'),
    width: normalized.wp('7.5%'),
  },

  btnIconTxt: {
    color: AppColors.primaryColor.darkWhite,
    textAlign: 'center',
    fontSize: AppFonts.commonFont.small,
    fontWeight: '400',
    alignSelf: 'center',
    marginTop: normalized.hp('1.5%'),
  },

  largeBtnCustomWrap: {
    alignSelf: 'center',
    height: normalized.hp('8%'),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  WrapSwitch: {
    alignItems: 'flex-end',
    transform:
      Platform.OS == 'ios'
        ? [{ scaleX: 0.6 }, { scaleY: 0.6 }]
        : [{ scaleX: 0.9 }, { scaleY: 0.9 }],
    // transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]
  },

  largeNewBtnWrap: {
    alignSelf: 'center',
    height: normalized.hp('8%'),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: normalized.wp('85%'),
  },

  iconNewBtn: {
    flexDirection: 'row',
    width: normalized.wp('85%'),
    borderWidth: 0,
  },
  interested: {
    backgroundColor: AppColors.secondaryColor.PeachyPink,
    marginVertical: normalized.wp(3),
    borderRadius: 6,
    padding: normalized.wp(3.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // width: normalized.wp('43%'),

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10
  },
  interestedbtn: {
    backgroundColor: AppColors.secondaryColor.PeachyPink,
    marginVertical: normalized.wp(1.4),
    borderRadius: 6,
    padding: normalized.wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: normalized.wp('44%'),
  },
  interestedText: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: normalizedFont.rf(1.6),
    marginLeft: normalized.wp(2),
    color: AppColors.secondaryColor.darkPurple,
    fontWeight: 'bold',
  },
  gmailtxt: {
    fontSize: normalizedFont.rf(2),
    marginLeft: normalized.wp('3%'),
  },
  contactWrap: {
    paddingLeft: 10,
    marginTop: normalized.wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;

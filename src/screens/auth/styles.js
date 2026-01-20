import {StyleSheet} from 'react-native';
import {AppColors, AppFonts, normalized} from '../../utils/AppConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor.darkWhite,
    paddingHorizontal: normalized.wp(4),
    paddingTop: normalized.wp(2),
    // backgroundColor:"red"

  },
  logo:{
    width: normalized.wp(10),
    height: normalized.hp(10),
    // alignSelf: 'center',
    marginBottom: normalized.wp(10),
  },
  heading: {
    fontSize: AppFonts.commonFont.large,
    fontWeight: '700',
    color: AppColors.primaryColor.mainContent,
    marginBottom: normalized.hp(1),
  },
  subHeading: {
    fontSize: AppFonts.commonFont.small,
    color: AppColors.primaryColor.mainContent,
    fontWeight: '400',
    marginBottom: normalized.hp(4),
  },
  formGap: {
    gap: normalized.hp(2),
  },
  label: {
    fontSize: AppFonts.commonFont.small,
    fontWeight: '400',
    color: AppColors.secondaryColor.lightGray,
    marginBottom: normalized.wp(-2),
    // marginBottom: normalized.hp(1),
  },
  labelFocused: {
    color: AppColors.primaryColor.mainContent,
    // color:"red"
  },
  rememberForgotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: normalized.hp(1),
    marginBottom: normalized.wp(25),
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: normalized.wp(5),
    height: normalized.wp(5),
    borderWidth: 2,
    borderColor: AppColors.secondaryColor.darkGray,
    borderRadius: 4,
    marginRight: normalized.wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: AppColors.primaryColor.mainContent,
    borderColor: AppColors.primaryColor.mainContent,
  },
  rememberText: {
    fontSize: AppFonts.commonFont.mediumSmall,
    color: AppColors.secondaryColor.lightGray,
    fontWeight:"500"
  },
  forgotText: {
    fontSize: AppFonts.commonFont.mediumSmall,
    color: AppColors.primaryColor.mainContent,
    fontWeight: '500',
  },
  helper: {
    marginTop: normalized.wp(2),
    fontSize: AppFonts.commonFont.mediumSmall,
    color: AppColors.secondaryColor.lightGray,
  },
  link: {
    color: AppColors.primaryColor.mainContent,
    fontSize:AppFonts.commonFont.small,
    fontWeight: '500',
  },
  codeRow: {
    flexDirection: 'row',
    gap: normalized.wp(3),
    alignItems: 'center',
  },




  phoneRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 12,
  },

  countryBox: {
    // flex: 0.45,
    // height: 50,
    borderWidth: 1,
    borderColor: AppColors.secondaryColor.borderColor,
    borderRadius: 10,
    paddingHorizontal: normalized.wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countryText:{
    fontSize: AppFonts.commonFont.mediumSmall,
    marginRight:normalized.wp(2),
    color:AppColors.secondaryColor.lightGray,
    fontWeight:"500"
    // padding:0,
    // backgroundColor:"red"
  },
  flag:{
   marginRight:normalized.wp(1)
  },

  mobileBox: {
    flex:1,
    // height: 50,
    
    borderWidth: 1,
    borderColor: AppColors.secondaryColor.borderColor,
    borderRadius: 10,
    paddingHorizontal: normalized.wp(2),
    paddingVertical:normalized.wp(0.5),
    marginLeft:normalized.wp(3),
    flexDirection: 'row',
    alignItems: 'center',
  },

  codeText: {
    fontSize: AppFonts.commonFont.mediumSmall,
    marginRight:normalized.wp(1),
    fontWeight:"400",
    color:AppColors.secondaryColor.lightGray
  },

  mobileInput: {
    width:normalized.wp(40),
    color:AppColors.primaryColor.mainContent,
    // flex:1,
    marginRight:normalized.wp(1)
  },

  focusedBox: {
    borderColor: '#2F80ED',
  },

  dropdown: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: AppColors.primaryColor.mainContent,
    borderRadius: 10,
    backgroundColor: AppColors.primaryColor.darkWhite,
  },

  dropdownItem: {
    padding: 12,
    borderBottomWidth: 0.5,
    borderColor: AppColors.primaryColor.mainContent,
  },

  dropdownText: {
    fontSize: AppFonts.commonFont.small,
    fontWeight:"500",
    color:AppColors.primaryColor.mainContent
  },
});

export default styles;

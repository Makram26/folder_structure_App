import {StyleSheet, Platform} from 'react-native';
import {
  AppColors,
  AppFonts,
  normalized,
  dimensionized,
} from '../../utils/AppConstants';

const styles = StyleSheet.create({
  widthAlign: {
    // height: normalized.hp('13.5%'),
    width: '100%',
    paddingHorizontal: normalized.wp('4%'),
    paddingVertical: normalized.hp('1%'),
    marginBottom: normalized.hp('1%'),
  },
  wrapper: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: AppColors.secondaryColor.lightGray,
    borderRadius: 10,
    width: '98%',
    zIndex: 2,
    top: 0,
    left: normalized.wp(-2),
  },
  headerText: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.small,
    paddingLeft: normalized.wp('4%'),
  },
  searchIconWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  wrapMenuFilText: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
  },

  filtreraTxt: {
    color: AppColors.primaryColor.darkWhite,
    fontSize: AppFonts.commonFont.small,
  },
  locArrow: {
    paddingLeft: normalized.wp('5%'),
  },
  mapIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  IconWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerStyle: {
    height: normalized.hp('12%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: {
    color: AppColors.primaryColor.darkWhite,
    fontWeight: '600',
    fontSize: AppFonts.commonFont.medium,
    bottom: -30,
  },
  headerStyle1: {
    height: normalized.hp('8%'),
    justifyContent: 'center',
  },
  txtTitle1: {
    fontWeight: '500',
    fontSize: AppFonts.commonFont.nearLarge,
    marginLeft: normalized.wp(5),
  },
  txtTitle2: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: AppFonts.commonFont.nearLarge,
    marginRight: normalized.wp('5%'),
    // marginLeft: normalized.wp(5),
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: normalized.wp('4%'),
    marginLeft: normalized.wp('2'),
    marginTop: normalized.hp(4),
    // backgroundColor:"red",
    // width: '95%',
  },
  flexRowHeader2: {
    height: normalized.wp('10%'),
    width: normalized.wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight:normalized.wp(4.5),

    borderRadius: 50,
    backgroundColor: AppColors.secondaryColor.darkPink,
  },
  HeaderWrap: {
    marginTop:
      Platform.OS === 'ios' ? normalized.hp('5.5') : normalized.hp('6'),

    marginLeft: normalized.hp('2'),
  },
  innerImg: {
    width: '100%',
    height: '100%',
    borderRadius: 90,
  },
  wrapImg: {
    height: dimensionized.SCREEN_WIDTH / 12,
    width: dimensionized.SCREEN_WIDTH / 12,
    borderRadius: 90,
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: normalized.hp(0.3),
    marginTop: normalized.hp(1),
  },
  labelTxt: {flex: 1, alignItems: 'center'},
  commonHeaderTxt: {
    fontWeight: '500',
    fontSize:
      Platform.OS == 'ios'
        ? AppFonts.commonFont.large
        : AppFonts.commonFont.large,
    alignSelf: 'center',
    marginTop: normalized.hp('1%'),
    paddingVertical: normalized.wp('2'),
  },
  WrapCommonHeader: {
    marginTop: Platform.OS == 'ios' ? normalized.hp(6) : normalized.hp(4),
  },
  alignCenter: {
    alignItems: 'center',
    flex: 1,
  },
});

export default styles;

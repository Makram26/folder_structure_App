import {StyleSheet} from 'react-native';
import {
  AppColors,
  AppFonts,
  normalized,
  normalizedFont,
} from '../../utils/AppConstants';
import {Platform} from 'react-native';
const styles = StyleSheet.create({
  mainImage: {
    height: normalized.hp('40%'),
    width: normalized.hp('100%'),
  },
  mainModal: {},
  infoView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: normalized.hp(6),
  },
  dataTxt: {
    color: 'white',
    position: 'absolute',
    bottom: normalized.hp(4),
  },
  type: {
    fontSize: normalizedFont.rf(2),
  },
  contentContainer: {
    padding: 10,
    marginTop: normalized.hp(-3.4),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: normalized.hp('90%'),
    position: 'absolute',
    bottom: Platform.OS === 'android' ? normalized.wp(-7) : normalized.wp(-5),
    width: normalized.wp('100%'),
    left: normalized.wp(-5),
  },
  profilePic: {
    height: normalized.hp('8%'),
    width: normalized.hp('8%'),
    marginRight: normalized.wp(2),
  },
  profileText: {
    color: AppColors.primaryColor.darkBlack,
    fontSize: normalizedFont.rf(2),
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  typesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalized.wp(18),
  },
  infoText: {
    color: AppColors.primaryColor.darkBlack,
    margin: normalized.wp(2),
    fontSize: normalizedFont.rf(2),
  },
  guide: {
    padding: normalized.hp(1),
    paddingVertical: normalized.hp(2),
    justifyContent: 'center',
  },
  txt: {
    fontSize: normalizedFont.rf(2),
    marginLeft: normalized.wp(1),
  },
  btnWrap: {
    position: 'absolute',
    bottom: normalized.hp(1),
    left: normalized.wp('5%'),
  },
  LoremTxt: {
    fontSize: normalizedFont.rf(1.6),
    marginTop: normalized.hp('2%'),
    textAlign: 'justify',
  },
  googleMap: {
    height: normalized.hp('35%'),
    width: normalized.wp('98%'),
    alignSelf: 'center',
    marginTop: normalized.hp('3%'),
    borderRadius: 20,
  },
  gmap: {
    height: normalized.hp('38%'),
    alignSelf: 'center',
    marginVertical: normalized.hp('1%'),
    borderRadius: 20,
  },
  mainView: {},
  headingText: {
    fontWeight: 'bold',
    fontSize: normalizedFont.rf(2),
    fontStyle: 'italic',
    alignSelf: 'center',
  },
  underLinedView: {
    borderWidth: 2,
    width: normalized.wp('60%'),
    alignSelf: 'center',
    marginBottom: normalized.wp(3),
    borderRadius: 100,
  },
  marginTop: {
    marginTop: normalized.hp(1),
  },
  mainFlatView: {
    backgroundColor: 'black',
    padding: normalized.wp(2),
    marginHorizontal: normalized.hp(0.9),
    marginVertical: normalized.hp(1),
    borderRadius: 10,
  },
  distanceText: {
    color: AppColors.secondaryColor.pureWhite,
  },
  distanceTextSelected: {
    color: AppColors.secondaryColor.pureWhite,
  },
  Events: {
    marginVertical: normalized.wp(1),
  },
  mapImage: {
    height: normalized.hp('40%'),
    width: normalized.hp('40%'),
  },

  swedishImage: {
    flex: 1,
    height: undefined,
    width: undefined,
    borderRadius: 3,
  },
  languageImageWrap: {
    height: normalized.wp('6'),
    width: normalized.wp('10'),
  },
  modalContainer: {
    justifyContent: 'space-around',
    backgroundColor: AppColors.primaryColor.darkWhite,
    alignContent: 'center',
    paddingHorizontal: normalized.wp('4'),
    height: normalized.wp('30'),
    width: normalized.wp('92'),
    borderRadius: 10,
  },
  modalWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  langTxtWrap: {
    padding: normalized.wp('2'),
  },
  swedish: {
    fontWeight: '500',
    fontSize: AppFonts.commonFont.small,
  },
});

export default styles;

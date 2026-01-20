import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import Feather from 'react-native-vector-icons/Feather';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Entypo from 'react-native-vector-icons/Entypo';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import EvilIcons from 'react-native-vector-icons/EvilIcons';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import {useSelector} from 'react-redux';
  import {useEffect} from 'react';
  import {RFPercentage as rf} from 'react-native-responsive-fontsize';
  import {Dimensions, StyleSheet} from 'react-native';
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  
  export const dimensionized = {SCREEN_WIDTH, SCREEN_HEIGHT};
  export const normalized = {hp, wp};
  export const normalizedFont = {rf};
  export const AppFonts = {
    commonFont: {
      smallest: rf(1.5),
      mediumSmall: rf(1.8),
      small: rf(2),
      lessMedium: rf(2.2),
      medium: rf(2.5),
      nearLarge:rf(2.7),
      large: rf(3),
      mediumLarge: rf(4),
      extraLarge: rf(5),
    },
  };
  export const AppIcons = {
    commonIcons: {
      moresmall:14,
      smallest: 18,
      small: 20,
      medium: 24,
      large: 28,
      extraLarge: 30,
    },
  };
  
  let isDarkModes = false;
  
  export const AppColor = () => {
    const isDarkMode = useSelector(state => state.userReducer.darkMode);
    useEffect(() => {
      isDarkModes = isDarkMode;
    }, [isDarkMode]);
    return {
      primaryColor: {
        darkBlack: isDarkMode ? '#FFFFFF' : '#000000',
        textColor:isDarkMode ? "#6E6C81" :"#A0A0A0",
        borderColors:isDarkMode? "#545275": "#AFAFAF",
        // stockColor: isDarkMode ? '#6E6C81' : '#FFFFFF',
        stockColor: isDarkMode ? '#22203A' : '#FFFFFF',
  
        settingBtnColor: isDarkMode ? '#22203A' : '#FFFFFF',
  
        statusBar: isDarkMode ? '#76243F' : '#d38c94',
        mainWhite: isDarkMode
          ? ['#76243F', '#0D0A2D', '#0D0A2D']
          : ['#FEF9F3', '#FFFFFF'],
      },
      secondaryColor: {
        darkWhite: isDarkMode ? '#000000' : '#FFFFFF',
  
        darkPurple: isDarkMode ? '#EFCAD1': '#76243F',
        selBdColor: isDarkMode ? "#D1D1D1" :"#AFAFAF",
        darkPurple2: isDarkMode ? '#76243F' : '#76243F',
        menuBtn: isDarkMode ? '#0D0A2D' : '#FFFFFF',
        darkPink: isDarkMode ? '#EFCAD1' : '#FFFFFF',
  
        iconsColor: isDarkMode ? '#FFFFFF' : '#76243F',
        discriptionBG: isDarkMode
          ? 'rgba(13, 10, 45, 0.5)'
          : 'rgba(255, 255, 255, 0.6)',
        countDown: isDarkMode ? '#FFFFFF' : '#FBF6F0',
      },
      errorColor: {
        red: isDarkMode ? '#f44336' : '#f44336',
      },
    };
  };
  
  export const AppColors = {
    primaryColor: {
      darkBlack: '#000000',
      darkWhite: '#FFFFFF',
      mainContent: '#030870',
    },
    secondaryColor: {
      mainContent:"#2A0370",
      darkGray: '#9A9CC5',
      lightGray1: '#545275',
  
      borderColor: "#707070",
      
      lightGray: '#707070',
    
      shadedBlack: '#364257',
      red: 'red',
      selectionColor: '#BEFFC1',
      placeHolderCol: '#7587A6',
      darkBlue: '#3083FF',
      PeachyPink: '#EFCAD1',
      darkPink: '#EFCAD1',
      darkPurple: '#76243F',
      mediumPink: '#F9E6D7',
      lightPink: '#FEF9F3',
      SlateGray: '#524e4e',
      pureWhite: 'white',
      mainWhite: ['#FFFFFF', '#FFFFFF'],
      lightMode: ['#F9E6D7', '#FEF9F3'],
      darkMode: ['#76243F', '#0D0A2D'],
      mainApp: ['#1fbe73', '#46785f'],
      whiteGradient: ['#c6ccc8', '#dae0db'],
      mainBlue: ['#3083FF', '#3083FF'],
      mainPink: ['#eb23a8', '#eb23a8'],
      // lightPink: '#faded9',
      transparentRed: 'rgba(255, 0, 0, 0.5)',
      transparent: 'rgba(255, 255, 255, 0)',
  
      pinkHeader: isDarkModes ? '#76243F' : '#d38c94',
    },
    radiantColor: {
      darkBlue: '#0551BF',
      white: '#FFFFFF',
      lightBlue: '#CADEFF',
    },
    errorColor: {
      red: '#f44336',
    },
  };
  export const commonStyleSheet = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor:"red"
      // paddingHorizontal:normalized.wp("0.5")
    },
    whiteContainer: {
      flex: 1,
      color: AppColors.secondaryColor.pureWhite,
    },
    black: {
      color: 'black',
      fontSize: AppFonts.commonFont.smallest,
    },
    fontWeight: {
      fontWeight: 'bold',
    },
    flexDirection: {
      flexDirection: 'row',
    },
    alignCenter: {
      // alignItems: 'center',
    },
    flexAndDirection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    flexAndDirectionAligned: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // marginLeft:8
    },
    flexAndAligned: {
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent:"center"
    },
    white: {
      color: AppColors.secondaryColor.pureWhite,
    },
    shadows: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
  });
  
  export {
    AntDesign,
    Feather,
    FontAwesome5,
    FontAwesome,
    MaterialIcons,
    EvilIcons,
    SimpleLineIcons,
    MaterialCommunityIcons,
    Entypo,
    Fontisto,
    Ionicons,
  };
  export const appIcons = {
    AntDesign,
    Feather,
    FontAwesome5,
    FontAwesome,
    MaterialIcons,
    EvilIcons,
    SimpleLineIcons,
    MaterialCommunityIcons,
    Entypo,
    Fontisto,
    Ionicons,
  };
  export const getAlignmentStyle = alignment => {
    switch (alignment) {
      case 'flex-start':
        return {alignItems: 'flex-start', alignSelf: 'flex-start'};
      case 'flex-end':
        return {alignItems: 'flex-end', alignSelf: 'flex-end'};
      case 'center':
        return {alignItems: 'center', alignSelf: 'center'};
      default:
        return {};
    }
  };
  
  export const getFlexStyles = ({
    justifyContent,
    alignSelf,
    alignItems,
    flexDirection,
  }) => {
    const styles = {};
  
    if (justifyContent) {
      styles.justifyContent = justifyContent;
    }
    if (alignSelf) {
      styles.alignSelf = alignSelf;
    }
    if (alignItems) {
      styles.alignItems = alignItems;
    }
    if (flexDirection) {
      styles.flexDirection = flexDirection;
    }
  
    return styles;
  };
  
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    Linking,
    Modal,
    Platform,
    ScrollView,
    Alert,
  } from 'react-native';
  import React, {useState} from 'react';
  import styles from './styles';
  import {
    AppColor,
    AppColors,
    commonStyleSheet,
    normalized,
  } from '../../utils/AppConstants';
  import Button from '../buttons/Buttons';
  import {images} from '../../assets/images';
  import LinearGradient from 'react-native-linear-gradient';
  import {appIcons} from '../../utils/AppConstants';
  import {distance, events} from '../../utils/CommonManager';

  import TextInputs from '../TextInputs/TextInputs';
  import {useDispatch, useSelector} from 'react-redux';

  
  const CustomModal = ({
    toggle,
    Toggle,
    visible,
    onClose,
    Event,
    changeLang,
    filter,
  }) => {
    const [selectedCategory, setSelectedCategory] = useState('About');
    const [selected, setSeleceted] = useState('5km');
    const [selectedEvent, setSelecetedEvent] = useState('All');
    const dispatch = useDispatch();
 
  
    const AppColorss = AppColor();
    const selectedItem = item => {
      setSeleceted(item);
    };
  
  
    return Event ? (
      <View>
        <Modal
          isVisible={toggle}
          onSwipeComplete={Toggle}
          swipeDirection={['down']}
          style={styles.mainModal}>
          <LinearGradient
            colors={AppColors.secondaryColor.whiteGradient}
            style={styles.contentContainer}>
            <View style={commonStyleSheet.flexAndAligned}>
              <Image source={images.profilePic} style={styles.profilePic} />
              <Text style={styles.profileText}>Organizer Name</Text>
            </View>
            <View style={styles.typesHeader}>
              <TouchableOpacity
                onPress={() => setSelectedCategory('About')}
                style={{borderBottomWidth: selectedCategory === 'About' ? 1 : 0}}>
                <Text style={styles.infoText}>About</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectedCategory('Map')}
                style={{borderBottomWidth: selectedCategory === 'Map' ? 1 : 0}}>
                <Text style={styles.infoText}>Map</Text>
              </TouchableOpacity>
            </View>
            {selectedCategory === 'About' ? (
              <View style={styles.guide}>
                <View
                  style={[
                    commonStyleSheet.flexAndAligned,
                    {marginLeft: normalized.wp(-1)},
                  ]}>
                  <appIcons.Entypo name="location" size={24} />
                  <Text style={styles.txt}>Albany, New York</Text>
                </View>
                <View
                  style={[
                    commonStyleSheet.flexAndAligned,
                    {marginVertical: normalized.hp(2)},
                  ]}>
                  <appIcons.AntDesign name="clockcircleo" size={16} />
                  <Text style={styles.txt}>11:00 pm : 3:00 am</Text>
                </View>
                <View style={commonStyleSheet.flexAndAligned}>
                  <appIcons.AntDesign name="calendar" size={19} />
                  <Text style={styles.txt}>Albany, New York</Text>
                </View>
                <View
                  style={[
                    commonStyleSheet.flexAndAligned,
                    {marginTop: normalized.hp(2)},
                  ]}>
                  <appIcons.Ionicons name="person-outline" size={19} />
                  <Text style={styles.txt}>Albany, New York</Text>
                </View>
                <Text style={styles.LoremTxt}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </Text>
              </View>
            ) : (
              <View>
                <TouchableOpacity onPress={openGoogleMapsForNavigation}>
                  <Image source={images.googleMap} style={styles.googleMap} />
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.btnWrap}>
              <Button commonButton={true} label="Buy Tickets" />
            </View>
          </LinearGradient>
        </Modal>
      </View>
    ) : filter ? (
      <ScrollView>
        {/* <Modal
          isVisible={toggle}
          onSwipeComplete={Toggle}
          swipeDirection={['down']}
          style={styles.mainModal}>
          <LinearGradient
            colors={AppColors.secondaryColor.whiteGradient}
            style={styles.contentContainer}>
            <View style={styles.underLinedView} />
            <View style={styles.mainView}>
              <Text style={styles.headingText}>Filter</Text>
              <TouchableOpacity onPress={openGoogleMapsForNavigation}>
                <Image source={images.googleMap} style={styles.gmap} />
              </TouchableOpacity>
              <View>
                <Text>Location:</Text>
                <TextInputs filter placeholder="Bahria Town, Lahore" />
              </View>
              <View style={styles.marginTop}>
                <Text>Distance:</Text>
                <View>
                  <FlatList
                    data={distance}
                    numColumns={6}
                    renderItem={({item}) => (
                      <TouchableOpacity onPress={() => selectedItem(item)}>
                        <View
                          style={[
                            styles.mainFlatView,
                            {
                              backgroundColor:
                                selected == item
                                  ? AppColors.secondaryColor.pureWhite
                                  : AppColors.primaryColor.darkBlack,
                            },
                          ]}>
                          <Text
                            style={[
                              styles.distanceText,
                              {color: selected === item ? 'black' : 'white'},
                            ]}>
                            {item.distance}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                  <View style={styles.Events}>
                    <Text>Event type</Text>
                  </View>
                  <FlatList
                    data={events}
                    renderItem={({item}) => (
                      <OtherCities
                        item={item}
                        categories
                        setSelecetedEvent={setSelecetedEvent}
                        selectedEvent={selectedEvent}
                      />
                    )}
                    numColumns={4}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
                <Button Filter label="Apply" txtColor="white" />
              </View>
            </View>
          </LinearGradient>
        </Modal> */}
      </ScrollView>
    ) : changeLang ? (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => onClose(false)}>
        <TouchableWithoutFeedback onPress={() => onClose(false)}>
          <View style={{flex: 1, backgroundColor: 'gray', opacity: 0.9}}>
            <View
              style={[
                styles.modalWrap,
                {backgroundColor: AppColorss.primaryColor.mainWhite},
              ]}>
              <View style={styles.modalContainer}>
                <TouchableOpacity
                  style={[
                    commonStyleSheet.flexAndDirectionAligned,
                    styles.langTxtWrap,
                  ]}
                  onPress={() => {
                    handleLanguage('en');
                    onClose(false);
                  }}>
                  <Text
                    style={[
                      styles.swedish,
                      {color: AppColors.primaryColor.darkBlack},
                    ]}>
                    {/* {t('allTxts.english')} */}
                    English
                  </Text>
                  <View style={styles.languageImageWrap}>
                    <Image source={images.english} style={styles.swedishImage} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    commonStyleSheet.flexAndDirectionAligned,
                    styles.langTxtWrap,
                  ]}
                  onPress={() => {
                    handleLanguage('sv');
                    onClose(false);
                  }}>
                  <Text
                    style={[
                      styles.swedish,
                      {color: AppColors.primaryColor.darkBlack},
                    ]}>
                    {/* {t('allTxts.swedish')} */}
                    Svenska
                  </Text>
                  <View style={styles.languageImageWrap}>
                    <Image source={images.swedish} style={styles.swedishImage} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    ) : null;
  };
  
  export default CustomModal;
  
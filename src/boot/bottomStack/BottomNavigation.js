import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {appIcons, AppColors} from '../../utils/AppConstants';
import Home from '../../screens/Home';
import Discover from '../../screens/tabs/Discover';
import Activity from '../../screens/tabs/Activity';
import Profile from '../../screens/tabs/Profile';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: AppColors.secondaryColor.darkPurple,
        tabBarInactiveTintColor: AppColors.secondaryColor.lightGray,
        tabBarIcon: ({color, size}) => {
          const iconName =
            route.name === 'HomeTab'
              ? 'home-outline'
              : route.name === 'Discover'
              ? 'compass-outline'
              : route.name === 'Activity'
              ? 'chatbubbles-outline'
              : 'person-outline';
          return <appIcons.Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="HomeTab" component={Home} options={{title: 'Home'}} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

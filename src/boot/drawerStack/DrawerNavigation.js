import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from '../bottomStack/BottomNavigation';
import Support from '../../screens/drawer/Support';
import Settings from '../../screens/drawer/Settings';
import {AppColors, appIcons} from '../../utils/AppConstants';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: AppColors.secondaryColor.darkGray,
        headerTitleStyle: {fontWeight: '600'},
        drawerActiveTintColor: AppColors.secondaryColor.darkPurple,
        drawerInactiveTintColor: AppColors.secondaryColor.lightGray,
      }}>
      <Drawer.Screen
        name="MainTabs"
        component={BottomNavigation}
        options={{
          title: 'Home',
          headerShown: false,
          drawerIcon: ({color, size}) => (
            <appIcons.Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={Support}
        options={{
          drawerIcon: ({color, size}) => (
            <appIcons.Ionicons
              name="help-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({color, size}) => (
            <appIcons.Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

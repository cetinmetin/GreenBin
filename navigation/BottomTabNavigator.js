import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen'
import ReportWasteScreen from '../screens/ReportWasteScreen'
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header } from 'react-native/Libraries/NewAppScreen';
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({navigation, route}) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({Header:'none', headerTitle: getHeaderTitle(route),headerTitleStyle: { alignSelf: 'center' } });
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="About Us"
        component={AboutUsScreen}
        options={{
          title: 'About Us',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="information" />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }}
      />
      <BottomTab.Screen
        name="Report Waste"
        component={ReportWasteScreen}
        options={{
          title: 'Report Waste',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="recycle" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Settings':
      return 'Account Settings';
    case 'Loc':
      return 'Location'  
    case 'About Us':
      return 'About Us'  
    case 'Contact':
      return 'Contact'  
    case 'Report Waste':
      return 'Report Waste'  
  }
}



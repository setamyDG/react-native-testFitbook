import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../../components/TabBarIcon';
import HomeScreen from '../../modules/home/HomeScreen';
import DietScreen from '../../modules/diet/DietScreen';
import TrainScreen from '../../modules/train/TrainScreen';
import MusicScreen from '../../modules/music/MusicScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const MusicStack = createStackNavigator({
  Music: MusicScreen,
});

MusicStack.navigationOptions = {
  header: null,
  headerMode: 'none',
  tabBarLabel: 'Music',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-headset'
      }
    />
  ),
};

const TrainStack = createStackNavigator({
  Train: TrainScreen,
});

TrainStack.navigationOptions = {
  tabBarLabel: 'Train',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'ios-fitness'
      }
    />
  ),
};

const FoodStack = createStackNavigator({
  Food: DietScreen,
});

FoodStack.navigationOptions = {
  tabBarLabel: 'Food',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'ios-pizza'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  MusicStack,
  TrainStack,
  FoodStack,
});

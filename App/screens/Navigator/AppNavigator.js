import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SplashScreen from '../Splash/SplashScreen.js';
import HomeScreen from '../Home/HomeScreen.js';

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: SplashScreen },
});

export default class AppNavigator extends Component {
  
  render() {
    return (
      <Navigator />
    )
  }
}
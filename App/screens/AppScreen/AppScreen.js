import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import AppNavigator from '../Navigator/AppNavigator.js';

export default class AppContainer extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>  
    );
  }
}
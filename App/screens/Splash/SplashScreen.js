import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Splash from '../../components/Splash/Splash.js'

export default class SplashScreen extends Component {

   componentWillMount () {
    const navigate = this.props.navigation;
  }

  render () {
    return (
      <Splash />
    )
  }
}
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, View, Text, StyleSheet } from 'react-native'

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'I Am The Light',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>This is the Home Page!</Text>
        <Button
          title='Go to Profile'
          onPress={() =>
            navigate('Profile', { name: 'Reuben'})}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});